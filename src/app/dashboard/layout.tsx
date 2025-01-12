import { MainNavigation } from '@/components/main-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-auto flex flex-col">
      <MainNavigation />
      <main className="flex grow flex-col items-center justify-center p-8">{children}</main>
    </main>
  );
}
