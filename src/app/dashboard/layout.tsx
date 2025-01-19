import { MainNavigation } from '@/components/main-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - AutoBiz',
  description: 'Manage your customers and messages',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex grow flex-col gap-y-4">
      <MainNavigation />
      <main className="flex grow container mx-auto">
        <div className="grow flex">{children}</div>
      </main>
    </main>
  );
}
