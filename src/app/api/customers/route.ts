import { getCustomers } from '@/components/customer-list/customer-list.action';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const customers = await getCustomers();
    if (!customers?.data) {
      return NextResponse.json({ error: 'Customers not found' }, { status: 404 });
    }

    return NextResponse.json({ customers: customers.data });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      if (error.message === 'Unauthorized') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
