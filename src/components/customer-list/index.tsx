'use server';
import { FC, Suspense } from 'react';
import { CustomerListItem } from './custome-list-item';
import { getCustomers } from './customer-list.action';
import { Skeleton } from '../ui/skeleton';

type CustomerListProps = {
  selectedCustomerId?: string;
};

const CustomerList: FC<CustomerListProps> = ({ selectedCustomerId }) => {
  return (
    <div className="border bg-background overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-foreground">Customers</h2>
      </div>
      <Suspense fallback={<Skeleton lines={10} />}>
        <CustomerListData selectedCustomerId={selectedCustomerId} />
      </Suspense>
    </div>
  );
};

export default CustomerList;

type CustomerListDataProps = {
  selectedCustomerId?: string;
};

export const CustomerListData: FC<CustomerListDataProps> = async ({ selectedCustomerId }) => {
  const actionResult = await getCustomers();

  if (!actionResult?.data) {
    return <div>No customers found</div>;
  }

  const customers = actionResult.data;

  return (
    <div className="divide-y">
      {customers.map((customer) => (
        <CustomerListItem key={customer.id} customer={customer} selectedCustomerId={selectedCustomerId} />
      ))}
    </div>
  );
};
