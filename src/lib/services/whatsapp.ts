'use server';

import { nanoid } from 'nanoid';

interface SendWhatsAppMessageParams {
  to: string;
  message: string;
}

export async function sendWhatsAppMessage({ to, message }: SendWhatsAppMessageParams) {
  const whatsappToken = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!whatsappToken || !phoneNumberId) {
    throw new Error('WhatsApp credentials not configured');
  }

  // Format phone number to remove any non-numeric characters except +
  const formattedNumber = to.replace(/[^\d+]/g, '');

  try {
    const response = await fetch(`https://graph.facebook.com/v22.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${whatsappToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: formattedNumber,
        type: 'text',
        text: {
          body: message,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`WhatsApp API error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return { messageId: data.messages?.[0]?.id || nanoid() };
  } catch (error) {
    console.error('WhatsApp API error:', error);
    // If WhatsApp API fails, still return a unique ID for local message tracking
    return { messageId: nanoid() };
  }
}

export async function getMessageStatus(messageId: string) {
  const whatsappToken = process.env.WHATSAPP_TOKEN;

  if (!whatsappToken) {
    throw new Error('WhatsApp credentials not configured');
  }

  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${messageId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${whatsappToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('WhatsApp status error:', error);
      return 'failed';
    }

    const data = await response.json();
    return data.status || 'sent';
  } catch (error) {
    console.error('Failed to get message status:', error);
    return 'failed';
  }
}
