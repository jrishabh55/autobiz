import { getUser } from '@/lib/actions/auth';
import { db } from '@/lib/db';
import { messages } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: Promise<{ customerId: string }> }) => {
  const { customerId } = await params;
  if (!customerId || typeof customerId !== 'string') {
    return NextResponse.json({ message: 'Customer ID is required' }, { status: 400 });
  }

  const _messages = await db.query.messages.findMany({
    where: eq(messages.customerId, customerId),
  });

  return NextResponse.json({ messages: _messages });
};

export async function POST(req: NextRequest, { params }: { params: Promise<{ customerId: string }> }) {
  const { customerId } = await params;
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await getUser(userId);
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ message: 'Message is required' }, { status: 400 });
  }

  const newMessage = await db.insert(messages).values({
    customerId: customerId,
    content: message,
    direction: 'outgoing',
    organizationId: user.organizationId,
    userId: user.id,
    status: 'sent',
    id: nanoid(),
  });

  return NextResponse.json({ message: newMessage });
}
