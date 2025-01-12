import ChatTopbar from './chat-topbar';
import { ChatList } from './chat-list';
import React, { useEffect, useState } from 'react';
import ChatBottombar from './chat-bottombar';
import { Message, Customer } from '@/lib/db';

interface ChatProps {
  messages?: Message[];
  selectedCustomer: Customer;
  isMobile: boolean;
}

export function Chat({ messages, selectedCustomer, isMobile }: ChatProps) {
  const sendMessage = (newMessage: Message) => {};

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedCustomer={selectedCustomer} />

      <ChatList messages={messages} selectedCustomer={selectedCustomer} sendMessage={sendMessage} isMobile={isMobile} />

      <ChatBottombar isMobile={isMobile} />
    </div>
  );
}
