import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoBiz',
  description: 'Manage your customer communications efficiently',
};

export default async function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to <span className="text-primary">AutoBiz</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">Manage your customer communications efficiently</p>
        <Button asChild className="mt-4">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
