import MessageLoading from '@/components/ui/chat/message-loading';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
      <MessageLoading />
    </div>
  );
}
