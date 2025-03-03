import { Chat } from '@/components/chat/chat';
import { getCustomers } from '@/components/customer-list/customer-list.action';
import Head from 'next/head';
import { redirect } from 'next/navigation';
import { getMessages } from './_actions';

export default async function CustomerChat({ params }: { params: Promise<{ customerId: string }> }) {
  const { customerId } = await params;
  const customersActionResult = await getCustomers();
  const customers = customersActionResult?.data ?? [];
  const customer = customers.find((c) => c.id === customerId);
  if (!customer) {
    return redirect('/messages');
  }

  const messagesActionResult = await getMessages({ customerId });

  const messages = messagesActionResult?.data ?? [];

  return (
    <>
      <Head>
        <title>{customer.name} Messages - AutoBiz</title>
        <meta name="description" content={`Messages with ${customer.name}`} />
      </Head>
      <Chat messages={messages} selectedCustomer={customer} isMobile={false} />
    </>
  );
}
