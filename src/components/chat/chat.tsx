import { Customer, Message } from '@/lib/db';
import ChatContainer from './chat-container';
import ChatTopbar from './chat-topbar';

interface ChatProps {
  messages?: Message[];
  selectedCustomer: Customer;
  isMobile: boolean;
}
export function Chat({ messages, selectedCustomer, isMobile }: ChatProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full overflow-hidden">
      <ChatTopbar selectedCustomer={selectedCustomer} />

      <ChatContainer selectedCustomer={selectedCustomer} messages={messages ?? []} isMobile={isMobile} />
    </div>
  );
}
