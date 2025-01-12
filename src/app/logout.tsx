import { useClerk } from '@clerk/nextjs';

export default async function Logout() {
  const { signOut } = useClerk();
  await signOut({
    redirectUrl: '/',
  });
}
