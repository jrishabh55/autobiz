import { MainNavigation } from '@/components/main-nav';

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
