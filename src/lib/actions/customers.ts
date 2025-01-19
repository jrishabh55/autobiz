'use server';

import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

import { revalidatePath } from 'next/cache';

import { customerSchema, db, newCustomerSchema } from '@/lib/db';
import { customers, organizations, users } from '@/lib/db/schema';
import { actionClient } from '@/src/lib/safe-action';
import { z } from 'zod';

export const updateCustomer = actionClient.schema(customerSchema).action(async ({ parsedInput }) => {
  const { userId, orgId } = await auth();
  if (!userId || !orgId) {
    throw new Error('Not authenticated or not in an organization');
  }

  const { id, ...data } = parsedInput;

  const [customer] = await db.update(customers).set(data).where(eq(customers.id, id));

  revalidatePath('/customers');
  return customer;
});

export const addCustomer = actionClient
  .schema(newCustomerSchema.extend({ userId: z.string().optional(), avatar: z.string().optional() }))
  .action(async ({ parsedInput }) => {
    const { userId, orgId } = await auth();
    if (!userId || !orgId) {
      throw new Error('Not authenticated or not in an organization');
    }

    // Verify that the organization exists and matches
    const [org] = await db.select().from(organizations).where(eq(organizations.clerkId, orgId));
    const [user] = await db.select().from(users).where(eq(users.clerkId, userId));

    if (!org) {
      throw new Error('Organization not found');
    }

    if (!user) {
      throw new Error('User not found');
    }

    // Add the customer
    await db.insert(customers).values({
      avatar: '',
      ...parsedInput,
      organizationId: org.id,
      userId: user.id,
    });

    revalidatePath('/customers');
    return { success: true };
  });
