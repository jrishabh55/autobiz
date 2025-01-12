import { eq, or } from 'drizzle-orm';
import { db } from '../db';
import { organizations, users } from '../db/schema';
import { generateSlug } from '../utils';

export const returnOrCreateUser = async ({
  firstName,
  lastName,
  userId,
  clerkOrgId,
  organizationId,
  email,
}: {
  firstName: string;
  lastName: string;
  userId: string;
  clerkOrgId: string;
  organizationId: string;
  email: string;
}) => {
  const user = await getUser(userId);
  if (user) {
    return user;
  }

  await createUser({
    userId,
    clerkOrgId,
    organizationId,
    email,
    firstName,
    lastName,
  });

  return user;
};

export const returnOrCreateOrganization = async ({
  name,
  clerkOrgId,
  organizationId,
}: {
  name?: string;
  clerkOrgId: string;
  organizationId?: string;
}) => {
  const [organization] = await db
    .select()
    .from(organizations)
    .where(
      or(eq(organizations.clerkId, clerkOrgId), organizationId ? eq(organizations.id, organizationId) : undefined)
    );

  if (organization) {
    return organization;
  }

  if (!name) {
    throw new Error('Name is required to create an organization.');
  }

  return createOrganization({ name, clerkOrgId });
};

export const createOrganization = async ({ name, clerkOrgId }: { name: string; clerkOrgId: string }) => {
  return await db.insert(organizations).values({
    clerkId: clerkOrgId,
    name: name,
    slug: generateSlug(name),
  });
};

export const createUser = async ({
  userId,
  clerkOrgId,
  organizationId,
  email,
  firstName,
  lastName,
}: {
  userId: string;
  clerkOrgId: string;
  organizationId: string;
  email: string;
  firstName: string;
  lastName: string;
}) => {
  return await db.insert(users).values({
    firstName: firstName,
    lastName: lastName,
    clerkId: userId,
    clerkOrgId: clerkOrgId,
    organizationId: organizationId,
    email: email,
  });
};

export const getUser = async (userId: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
