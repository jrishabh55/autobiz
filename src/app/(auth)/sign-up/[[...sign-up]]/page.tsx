import { SignUp } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { featureFlags } from '@/lib/db/schema';

async function isRegistrationEnabled() {
  const [flag] = await db.select().from(featureFlags).where(eq(featureFlags.name, 'enable_registration'));
  return flag?.enabled ?? false;
}

export default async function SignUpPage() {
  const registrationEnabled = await isRegistrationEnabled();

  if (!registrationEnabled) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            rootBox: 'mx-auto w-full max-w-[440px]',
            card: 'shadow-none',
          },
        }}
      />
    </div>
  );
}
