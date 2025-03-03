import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Customer } from '@/lib/db';
import { cn } from '@/lib/utils';
import { MoreHorizontal, SquarePen } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CustomerListItem } from '../customer-list/customer-list-item';
import { Avatar, AvatarImage } from '../ui/avatar';

interface SidebarProps {
  isCollapsed: boolean;
  customers: Customer[];
}

export function Sidebar({ isCollapsed, customers }: SidebarProps) {
  const { customerId } = useParams<{ customerId: string }>();

  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-full bg-muted/10 dark:bg-muted/20 gap-4 p-2 data-[collapsed=true]:p-2 "
    >
      {!isCollapsed && (
        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">Chats</p>
            <span className="text-zinc-300">({customers.length})</span>
          </div>

          <div>
            <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
              <MoreHorizontal size={20} />
            </Link>

            <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
              <SquarePen size={20} />
            </Link>
          </div>
        </div>
      )}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {customers.map((customer) =>
          isCollapsed ? (
            <TooltipProvider key={customer.id}>
              <Tooltip key={customer.id} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'icon' }),
                      'h-11 w-11 md:h-16 md:w-16',
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                      'cursor-pointer'
                    )}
                  >
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={customer.avatar}
                        alt={customer.avatar}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                      />
                    </Avatar>{' '}
                    <span className="sr-only">{customer.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {customer.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <CustomerListItem key={customer.id} customer={customer} selectedCustomerId={customerId} />
          )
        )}
      </nav>
    </div>
  );
}
