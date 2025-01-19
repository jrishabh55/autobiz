import { Customer, Message } from '@/lib/db';
import ChatBottombar from './chat-bottombar';
import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';
import { sendMessage } from '@/app/dashboard/messages/[customerId]/_actions';

interface ChatProps {
  messages?: Message[];
  selectedCustomer: Customer;
  isMobile: boolean;
}
export function Chat({ messages, selectedCustomer, isMobile }: ChatProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedCustomer={selectedCustomer} />

      <ChatList messages={messages} selectedCustomer={selectedCustomer} sendMessage={sendMessage} isMobile={isMobile} />

      <ChatBottombar isMobile={isMobile} />
    </div>
  );
}
