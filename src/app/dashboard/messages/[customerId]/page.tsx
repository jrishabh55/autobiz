import { ChatLayout } from '@/components/chat/chat-layout';

export default async function Home() {
  return (
    <div className="w-full h-full">
      <ChatLayout navCollapsedSize={8} />
    </div>
  );
}
