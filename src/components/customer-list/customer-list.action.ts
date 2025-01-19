'use server';

import { getUser } from '@/lib/actions/auth';
import { db } from '@/lib/db';
import { customers } from '@/lib/db/schema';
import { actionClient } from '@/src/lib/safe-action';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

export const getCustomers = actionClient.action(async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error('Unauthorized');
  }

  const user = await getUser(userId);

  const _customers = await db.query.customers.findMany({
    where: and(eq(customers.organizationId, user?.organizationId)),
  });

  return _customers;
});

export const getCustomer = actionClient.schema(z.object({ customerId: z.string() })).action(async ({ parsedInput }) => {
  const customer = await db.query.customers.findFirst({
    where: and(eq(customers.id, parsedInput.customerId)),
  });
  return customer;
});
