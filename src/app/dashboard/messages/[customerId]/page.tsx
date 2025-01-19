import { Chat } from '@/components/chat/chat';
import { getCustomers } from '@/components/customer-list/customer-list.action';
import { redirect } from 'next/navigation';
import { getMessages } from './_actions';

export default async function CustomerChat({ params }: { params: PromiseLike<{ customerId: string }> }) {
  const { customerId } = await params;
  const customersActionResult = await getCustomers();
  const customers = customersActionResult?.data ?? [];
  const customer = customers.find((c) => c.id === customerId);
  if (!customer) {
    return redirect('/messages');
  }

  const messagesActionResult = await getMessages({ customerId });

  const messages = messagesActionResult?.data ?? [];

  return <Chat messages={messages} selectedCustomer={customer} isMobile={false} />;
}
