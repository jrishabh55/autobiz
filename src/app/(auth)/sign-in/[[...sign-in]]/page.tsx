import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
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
