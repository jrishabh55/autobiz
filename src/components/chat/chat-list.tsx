import { Message, Customer } from '@/lib/db';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

import { AnimatePresence, motion } from 'framer-motion';
import { ChatMessageList } from '@/components/ui/chat/chat-message-list';
import { Forward, Heart } from 'lucide-react';
import {
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
} from '@/components/ui/chat/chat-bubble';

interface ChatListProps {
  messages?: Message[];
  selectedCustomer: Customer;
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

const getMessageVariant = (messageDirection: string, selectedCustomerName: string) =>
  messageDirection !== selectedCustomerName ? 'sent' : 'received';

export function ChatList({ messages = [], selectedCustomer, sendMessage, isMobile }: ChatListProps) {
  const actionIcons = [
    { icon: DotsVerticalIcon, type: 'More' },
    { icon: Forward, type: 'Like' },
    { icon: Heart, type: 'Share' },
  ];

  return (
    <div className="w-full overflow-y-hidden h-full flex flex-col">
      <ChatMessageList>
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message.direction, selectedCustomer.name);
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: index * 0.05 + 0.2,
                  },
                }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="flex flex-col gap-2 p-4"
              >
                {/* Usage of ChatBubble component */}
                <ChatBubble variant={variant}>
                  <ChatBubbleAvatar src={selectedCustomer.avatar} />
                  <ChatBubbleMessage isLoading={false}>
                    {message.content}
                    {message.createdAt && <ChatBubbleTimestamp timestamp={message.createdAt.toISOString()} />}
                  </ChatBubbleMessage>
                  <ChatBubbleActionWrapper>
                    {actionIcons.map(({ icon: Icon, type }) => (
                      <ChatBubbleAction
                        className="size-7"
                        key={type}
                        icon={<Icon className="size-4" />}
                        onClick={() => console.log('Action ' + type + ' clicked for message ' + index)}
                      />
                    ))}
                  </ChatBubbleActionWrapper>
                </ChatBubble>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>
    </div>
  );
}
