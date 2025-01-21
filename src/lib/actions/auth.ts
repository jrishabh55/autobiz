import { OrganizationCustomRoleKey } from '@/types/globals';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { db, NewUser, newUserSchema } from '../db';
import { users } from '../db/schema';
import { actionClient } from '../safe-action';
import { onboardingActionValidation } from '../validations';
import { getOrCreateOrganization } from './org';

export type NewOrganization = {
  name: string;
  clerkOrgId: string;
};

export const getUser = async (clerkUserId: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, clerkUserId),
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const getOrCreateUser = actionClient
  .schema(newUserSchema.partial().required({ clerkId: true }))
  .action(async ({ parsedInput }) => {
    const { clerkId } = parsedInput;
    const user = await getUser(clerkId);
    if (user) {
      return user;
    }

    const parsedData = newUserSchema.parse(parsedInput);

    return createUser(parsedData);
  });

export const createUser = async ({ clerkId, clerkOrgId, organizationId, email, firstName, lastName }: NewUser) => {
  const [user] = await db.insert(users).values({
    firstName: firstName,
    lastName: lastName,
    clerkId: clerkId,
    clerkOrgId: clerkOrgId,
    organizationId: organizationId,
    email: email,
  });

  return {
    id: user.insertId.toString(),
    clerkId: clerkId,
    clerkOrgId: clerkOrgId,
    organizationId: organizationId,
    email: email,
    firstName: firstName,
    lastName: lastName,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export type ClerkUpdateMetadata = {
  role?: OrganizationCustomRoleKey;
  onboardingComplete?: boolean;
  userId?: string;
};

export const onboardingAction = actionClient.schema(onboardingActionValidation).action(async ({ parsedInput }) => {
  const { userId, completeOnboarding } = parsedInput;
  const { sessionClaims, orgId } = await auth();
  if (sessionClaims?.metadata?.userId) {
    return;
  }

  if (!orgId) {
    throw new Error('Organization ID is required to update a user.');
  }

  if (!sessionClaims?.orgName) {
    throw new Error('Organization name is required to update a user.');
  }

  const org = await getOrCreateOrganization(orgId, { name: sessionClaims?.orgName as string });

  const localUserData = await getOrCreateUser({
    clerkId: userId,
    clerkOrgId: orgId,
    organizationId: org.id.toString(),
    email: sessionClaims?.emailAddress as string,
    firstName: sessionClaims?.firstName as string,
    lastName: sessionClaims?.lastName as string,
  });

  if (!localUserData?.data) {
    throw new Error('User not found');
  }

  const client = await clerkClient();
  await client.users.updateUser(userId, {
    publicMetadata: {
      ...sessionClaims?.metadata,
      userId: localUserData.data.id,
      onboardingComplete: completeOnboarding,
    },
  });

  return redirect('/dashboard');
});
