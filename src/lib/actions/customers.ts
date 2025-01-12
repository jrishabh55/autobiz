'use server';

import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

import { revalidatePath } from 'next/cache';

import { db } from '@/lib/db';
import { customers, organizations, users } from '@/lib/db/schema';

interface AddCustomerParameters {
  name: string;
  email: string;
  mobile: string;
  gender: 'male' | 'female' | 'other';
  dob: Date;
  address: string;
  organizationId: string;
}

export async function addCustomer(parameters: AddCustomerParameters) {
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
    name: parameters.name,
    email: parameters.email,
    mobile: parameters.mobile,
    gender: parameters.gender,
    dob: parameters.dob,
    address: parameters.address,
    organizationId: org.id,
    userId: user.id,
  });

  revalidatePath('/customers');
  return { success: true };
}
