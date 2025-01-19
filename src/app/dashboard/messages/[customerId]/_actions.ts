'use server';

import { db } from '@/lib/db';
import { messages } from '@/lib/db/schema';
import { actionClient } from '@/src/lib/safe-action';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export const getMessages = actionClient.schema(z.object({ customerId: z.string() })).action(async ({ parsedInput }) => {
  const { customerId } = parsedInput;
  const _messages = await db.query.messages.findMany({
    where: eq(messages.customerId, customerId),
  });
  return _messages;
});

export const sendMessage = actionClient
  .schema(z.object({ message: z.string(), to: z.string() }))
  .action(async ({ parsedInput }) => {
    const { message, to } = parsedInput;
    console.log('message', message);
    console.log('to', to);
    return { message, to };
  });
