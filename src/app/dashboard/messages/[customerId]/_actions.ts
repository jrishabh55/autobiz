'use server';

import { db, Message } from '@/lib/db';
import { customers, messages } from '@/lib/db/schema';
import { actionClient } from '@/lib/safe-action';
import { sendWhatsAppMessage } from '@/lib/services/whatsapp';
import { asc, eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import SuperJSON from 'superjson';
import { z } from 'zod';

export const getMessages = actionClient.schema(z.object({ customerId: z.string() })).action(async ({ parsedInput }) => {
  const { customerId } = parsedInput;
  const _messages = await db.query.messages.findMany({
    where: eq(messages.customerId, customerId),
    orderBy: [asc(messages.createdAt)],
  });
  return _messages;
});

export const sendMessage = actionClient
  .schema(z.object({ message: z.string(), customerId: z.string(), provider: z.enum(['whatsapp']) }))
  .action(async ({ parsedInput }) => {
    const { message, customerId } = parsedInput;
    console.log('message', message);
    console.log('customerId', customerId);
    const customer = await db.query.customers.findFirst({
      where: eq(customers.id, customerId),
    });
    if (!customer) {
      throw new Error('Customer not found');
    }

    const sentData = await sendWhatsAppMessage({ message, to: customer.mobile });
    const data = {
      customerId: customerId,
      content: message,
      direction: 'outgoing',
      organizationId: customer.organizationId,
      userId: customer.userId,
      status: 'sent',
      id: sentData.messageId || nanoid(),
    } as Message;

    await db.insert(messages).values(data);
    console.log('🚀 ~ newMessage ~ newMessage:', data);

    return SuperJSON.stringify(data);
  });
