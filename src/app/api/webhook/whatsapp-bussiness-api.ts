import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log('POST');
  console.log(body);
  return NextResponse.json({ message: 'Webhook received' });
};

export const GET = async () => {
  console.log('GET');
  return NextResponse.json({ message: 'Webhook received' });
};
