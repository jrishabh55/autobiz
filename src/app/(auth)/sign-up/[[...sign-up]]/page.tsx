import { SignUp } from '@clerk/nextjs';

export default async function SignUpPage() {
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
