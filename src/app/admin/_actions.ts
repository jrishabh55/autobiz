'use server';

import { actionClient } from '@/src/lib/safe-action';
import { OrganizationCustomRoleKey } from '@/types/globals';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { z } from 'zod';

export const checkRole = async (role: OrganizationCustomRoleKey) => {
  const user = await auth();
  return user?.orgRole === role;
};

const setRoleSchema = z.object({
  id: z.string(),
  role: z.string(),
});

export const setRole = actionClient.schema(setRoleSchema).action(async ({ parsedInput }) => {
  const client = await clerkClient();

  // Check that the user trying to set the role is an admin
  if (!checkRole('org:admin')) {
    return { message: 'Not Authorized' };
  }

  try {
    const res = await client.users.updateUser(parsedInput.id, {
      publicMetadata: { role: parsedInput.role },
    });
    return { message: res.publicMetadata };
  } catch (error) {
    return { message: error };
  }
});

export const removeRole = actionClient.schema(setRoleSchema).action(async ({ parsedInput }) => {
  const client = await clerkClient();

  try {
    const res = await client.users.updateUser(parsedInput.id, {
      publicMetadata: { role: null },
    });
    return { message: res.publicMetadata };
  } catch (error) {
    return { message: error };
  }
});
