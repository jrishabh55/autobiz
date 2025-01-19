import { ChatLayout } from '@/components/chat/chat-layout';
import { getCustomers } from '@/components/customer-list/customer-list.action';

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const customersActionResult = await getCustomers();
  const customers = customersActionResult?.data ?? [];

  return (
    <div className="flex grow flex-row">
      <ChatLayout navCollapsedSize={8} customers={customers}>
        {children}
      </ChatLayout>
    </div>
  );
}
