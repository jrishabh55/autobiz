import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground w-full">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <Button variant="default">Go back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
