import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Info, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { ExpandableChatHeader } from '../ui/chat/expandable-chat';
import { Customer } from '@/lib/db';
import { AvatarFallback } from '@radix-ui/react-avatar';

interface ChatTopbarProps {
  selectedCustomer?: Customer;
}

export const TopbarIcons = [{ icon: Info }];

export default function ChatTopbar({ selectedCustomer }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center border">
          <AvatarImage
            src={selectedCustomer?.avatar}
            alt={selectedCustomer?.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
          <AvatarFallback className="text-xs">{selectedCustomer?.name?.charAt(0) || 'N/A'}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedCustomer?.name}</span>
          {/* <span className="text-xs">Active 2 mins ago</span> */}
        </div>
      </div>

      <div className="flex gap-1">
        <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
          <Info size={20} className="text-muted-foreground" />
        </Link>
      </div>
    </ExpandableChatHeader>
  );
}
