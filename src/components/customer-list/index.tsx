'use server';
import { CustomerListItem } from './custome-list-item';
import { getCustomers } from './customer-list.action';

const CustomerList = async ({ selectedCustomerId }: { selectedCustomerId?: string }) => {
  const actionResult = await getCustomers();

  if (!actionResult?.data) {
    return <div>No customers found</div>;
  }

  const customers = actionResult.data;

  return (
    <div className="border bg-background overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-foreground">Customers</h2>
      </div>
      <div className="divide-y">
        {customers.map((customer) => (
          <CustomerListItem key={customer.id} customer={customer} selectedCustomerId={selectedCustomerId} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
