import { Metadata } from 'next';

import { CustomerForm } from '@/components/customer-form';
import CustomerList from '@/components/customer-list';

export const metadata: Metadata = {
  title: 'Dashboard - AutoBiz',
  description: 'Manage your customers and messages',
};

export default function DashboardPage() {
  return (
    <div className="container max-w-7xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your customers and messages</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">Add New Customer</h2>
              <p className="text-muted-foreground">Enter customer details to add them to your database</p>
            </div>
            <div className="rounded-lg p-4">
              <CustomerForm />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">Recent Customers</h2>
              <p className="text-muted-foreground">Your most recently added customers</p>
            </div>
            <div className="rounded-lg p-4">
              <CustomerList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
