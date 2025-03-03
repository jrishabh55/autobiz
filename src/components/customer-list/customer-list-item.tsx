import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Customer } from '@/lib/db';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

type CustomerListItemProps = {
  customer: Customer;
  selectedCustomerId?: string;
};

export const CustomerListItem: FC<CustomerListItemProps> = ({ customer, selectedCustomerId }) => {
  return (
    <div
      className={cn('p-4 cursor-pointer hover:bg-muted dark:hover:bg-muted-dark', {
        'bg-muted dark:bg-muted-dark': selectedCustomerId === customer.id,
      })}
    >
      <Link href={`/dashboard/messages/${customer.id}`} className="cursor-pointer">
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={customer.avatar} alt={customer.name} />
            <AvatarFallback className={cn('border bg-background text-foreground')}>
              {createAvatarFallback(customer.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium truncate text-foreground dark:text-foreground-dark">{customer.name}</p>
            </div>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark truncate">{customer.email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const createAvatarFallback = (name: string) => {
  return name
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .toUpperCase();
};
