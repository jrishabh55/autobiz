import { SignOutButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.onboardingComplete === true) {
    redirect('/');
  }

  return (
    <main className="container mx-auto flex flex-1 flex-col p-8">
      <header className="flex flex-row justify-end">
        <SignOutButton>
          <Button variant="outline">Logout</Button>
        </SignOutButton>
      </header>
      {children}
    </main>
  );
}
