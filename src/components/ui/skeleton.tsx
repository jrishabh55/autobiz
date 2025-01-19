import { cn } from '@/lib/utils';

function Skeleton({ className, lines = 1, ...props }: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="h-4 bg-primary/10" />
      ))}
    </div>
  );
}

export { Skeleton };
