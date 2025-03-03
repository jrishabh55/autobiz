'use client';
import { Customer, Message } from '@/lib/db';
import { useImmer } from 'use-immer';
import ChatBottombar from './chat-bottombar';
import { ChatList } from './chat-list';

interface ChatContainerProps {
  selectedCustomer: Customer;
  isMobile: boolean;
  messages: Message[];
}

export default function ChatContainer({ selectedCustomer, isMobile, messages: initialMessages }: ChatContainerProps) {
  const [messages, setMessages] = useImmer<Message[]>(initialMessages);

  const addMessage = (newMessage: Message) => {
    setMessages((draft) => {
      draft.push(newMessage);
    });
  };

  return (
    <>
      <ChatList messages={messages} selectedCustomer={selectedCustomer} />
      <ChatBottombar isMobile={isMobile} selectedCustomer={selectedCustomer} addMessage={addMessage} />
    </>
  );
}
