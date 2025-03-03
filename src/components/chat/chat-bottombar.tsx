'use client';
import { EmojiPicker } from '@/components/emoji-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { FileImage, Mic, Paperclip, PlusCircle, SendHorizontal, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import superJSON from 'superjson';
import { Button, buttonVariants } from '../ui/button';

import { sendMessage } from '@/app/dashboard/messages/[customerId]/_actions';
import { ChatInput } from '@/components/ui/chat/chat-input';
import { Customer, Message } from '@/lib/db';

interface ChatBottombarProps {
  isMobile: boolean;
  selectedCustomer: Customer;
  addMessage: (newMessage: Message) => void;
}

export const bottomBarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({ isMobile, selectedCustomer, addMessage }: ChatBottombarProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleThumbsUp = async () => {
    await sendMessage({ message: '👍', customerId: selectedCustomer.id, provider: 'whatsapp' });
    setMessage('');
  };

  const handleSend = async () => {
    if (message.trim()) {
      try {
        const response = await sendMessage({
          message: message,
          customerId: selectedCustomer.id,
          provider: 'whatsapp',
        });
        console.log('🚀 ~ handleSend ~ response:', response);

        if (!response?.data) {
          throw new Error('No response from sendMessage');
        }

        const result = superJSON.parse(response.data) as Message;

        // Check if response is valid and has a result property
        addMessage(result);

        setMessage('');

        if (inputRef.current) {
          inputRef.current.focus();
        }
      } catch (error) {
        console.error('Error sending message:', error);
        // Handle error appropriately (e.g., show a notification)
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + '\n');
    }
  };

  return (
    <div className="px-2 py-4 flex justify-between w-full items-center gap-2">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0')}>
              <PlusCircle size={22} className="text-muted-foreground" />
            </Link>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <Link
                  href="#"
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0')}
                >
                  <Mic size={22} className="text-muted-foreground" />
                </Link>
                {bottomBarIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0')}
                  >
                    <icon.icon size={22} className="text-muted-foreground" />
                  </Link>
                ))}
              </div>
            ) : (
              <Link href="#" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0')}>
                <Mic size={22} className="text-muted-foreground" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {bottomBarIcons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0')}
              >
                <icon.icon size={22} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="w-full relative"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: 'spring',
              bounce: 0.15,
            },
          }}
        >
          <ChatInput
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="rounded-full"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-4 p-0 flex">
            <EmojiPicker
              onChange={(value) => {
                setMessage(message + value);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            />
          </div>
        </motion.div>

        {message.trim() ? (
          <Button className="h-9 w-9 shrink-0" onClick={handleSend} disabled={isLoading} variant="ghost" size="icon">
            <SendHorizontal size={22} className="text-muted-foreground" />
          </Button>
        ) : (
          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleThumbsUp}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <ThumbsUp size={22} className="text-muted-foreground" />
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
}
