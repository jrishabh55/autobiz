import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Customer } from '@/lib/db';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const CustomerListItem = ({
  customer,
  selectedCustomerId,
}: {
  customer: Customer;
  selectedCustomerId?: string;
}) => {
  return (
    <div
      className={cn('p-4 cursor-pointer hover:bg-muted', {
        'bg-muted': selectedCustomerId === customer.id,
      })}
    >
      <Link href={`/dashboard/messages/${customer.id}`}>
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={customer.avatar} alt={customer.name} />
            <AvatarFallback>
              {customer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium truncate text-foreground">{customer.name}</p>
            </div>
            <p className="text-sm text-muted-foreground truncate">{customer.email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
