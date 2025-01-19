import { getCustomer } from '@/components/customer-list/customer-list.action';
import { getUser } from '@/lib/actions/auth';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ customerId: string }> }) {
  const { customerId } = await params;
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await getUser(userId);

  const customer = await getCustomer({ customerId });

  if (!customer?.data) {
    return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  }

  if (customer?.data?.organizationId !== user.organizationId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ customer });
}
