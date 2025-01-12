import { useClerk } from '@clerk/nextjs';

export default function Logout() {
  const { signOut } = useClerk();
  signOut({
    redirectUrl: '/',
  });
}
