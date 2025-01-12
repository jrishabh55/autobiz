'use client';

import CodeDisplayBlock from '@/components/code-display-block';
import { Button } from '@/components/ui/button';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';
import { ChatInput } from '@/components/ui/chat/chat-input';
import { ChatMessageList } from '@/components/ui/chat/chat-message-list';
import { Message } from '@/lib/db';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Messages() {
  const [input, setInput] = useState('');
  const queryClient = useQueryClient();
  const customerId = '32c648ca-d674-4cac-8b42-3c9c7713a37b';
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ['messages', customerId],
    staleTime: Number.POSITIVE_INFINITY,
    queryFn: () => fetch(`/api/messages?customerId=${customerId}`).then((res) => res.json()),
    select: (data: { messages: Message[] }) => data.messages,
  });

  const messagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify({ customerId, message: input }),
    });
    const data = await response.json();
    console.log(data);
    queryClient.invalidateQueries({ queryKey: ['messages', customerId] });
    setInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isLoading || !input) return;
      onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  // if (!messages) return <div>No messages found</div>;

  return (
    <main className="flex grow w-full max-w-3xl flex-col items-center mx-auto">
      <div className="flex-1 w-full overflow-y-auto py-6 grow">
        <ChatMessageList>
          {/* Initial Message */}
          {/* Messages */}

          {messages &&
            messages.map((message, index) => (
              <ChatBubble key={index} variant={message.direction == 'outgoing' ? 'sent' : 'received'}>
                <ChatBubbleAvatar src="" fallback={message.direction == 'outgoing' ? '👨🏽' : '🤖'} />
                <ChatBubbleMessage>
                  {message.content.split('```').map((part: string, index: number) => {
                    if (index % 2 === 0) {
                      return (
                        <Markdown key={index} remarkPlugins={[remarkGfm]}>
                          {part}
                        </Markdown>
                      );
                    } else {
                      return (
                        <pre className="whitespace-pre-wrap pt-2" key={index}>
                          <CodeDisplayBlock code={part} lang="" />
                        </pre>
                      );
                    }
                  })}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}
        </ChatMessageList>
      </div>

      {/* Form and Footer fixed at the bottom */}
      <div className="w-full px-4 pb-4">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <ChatInput
            value={input}
            onKeyDown={onKeyDown}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="rounded-lg bg-background border-0 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>

            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>

            <Button disabled={!input || isLoading} type="submit" size="sm" className="ml-auto gap-1.5">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
