'use server';

import { eq } from 'drizzle-orm';
import { db } from '../db';
import { organizations } from '../db/schema';
import { generateSlug } from '../utils';
import { NewOrganization } from './auth';

export const createOrganization = async ({ name, clerkOrgId }: NewOrganization) => {
  const [org] = await db.insert(organizations).values({
    clerkId: clerkOrgId,
    name: name,
    slug: generateSlug(name),
  });

  return {
    id: org.insertId.toString(),
    clerkOrgId,
    name,
    slug: generateSlug(name),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const getOrganization = async (orgId: string) => {
  const org = await db.query.organizations.findFirst({
    where: eq(organizations.id, orgId),
  });

  return org;
};

export const getOrganizationByClerkOrgId = async (clerkOrgId: string) => {
  const org = await db.query.organizations.findFirst({
    where: eq(organizations.clerkId, clerkOrgId),
  });

  return org;
};

export const getOrCreateOrganization = async (clerkOrgId: string, data: Omit<NewOrganization, 'clerkOrgId'>) => {
  const org = await getOrganizationByClerkOrgId(clerkOrgId);
  if (!org) {
    return createOrganization({ clerkOrgId, ...data });
  }

  return org;
};
