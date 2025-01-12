import { getUser } from '@/lib/actions/auth';
import { db } from '@/lib/db';
import { customers } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';

export const getCustomers = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error('Unauthorized');
  }

  const user = await getUser(userId);

  const _customers = await db.query.customers.findMany({
    where: and(eq(customers.organizationId, user?.organizationId)),
  });

  return _customers;
};
