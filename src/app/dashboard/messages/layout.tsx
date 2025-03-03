import { ChatLayout } from '@/components/chat/chat-layout';
import { getCustomers } from '@/components/customer-list/customer-list.action';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messages - AutoBiz',
  description: 'Manage your messages',
};

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const customersActionResult = await getCustomers();
  const customers = customersActionResult?.data ?? [];

  return (
    <div className="flex grow flex-col overflow-hidden h-[calc(100svh-4.5rem)]">
      <ChatLayout navCollapsedSize={8} customers={customers}>
        {children}
      </ChatLayout>
    </div>
  );
}
