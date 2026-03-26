export const prerender = false;

import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server';

const redis = Redis.fromEnv();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const msg = body?.message;

    console.log('Telegram webhook received:', JSON.stringify(body));
    console.log('Message from:', msg?.from);
    console.log('Chat ID:', msg?.chat?.id);
    console.log('Expected TELEGRAM_CHAT_ID:', TELEGRAM_CHAT_ID);

    // TRACE LOG: Incoming ID
    console.log("RAW SENDER ID:", msg?.from?.id, "TYPE:", typeof msg?.from?.id);
    
    // TRACE LOG: Configured ID (using process.env directly for comparison)
    console.log("ENV CONFIG ID:", process.env.TELEGRAM_CHAT_ID, "TYPE:", typeof process.env.TELEGRAM_CHAT_ID);

    // Only accept messages from Loui's personal Telegram account
    // Convert both to strings to ensure proper comparison
    const incomingChatId = String(msg?.chat?.id);
    const expectedChatId = String(TELEGRAM_CHAT_ID);
    
    console.log('Comparing chat IDs:', { incoming: incomingChatId, expected: expectedChatId });
    
    if (!msg || incomingChatId !== expectedChatId) {
      console.log('Unauthorized - chat ID mismatch');
      return new Response('Unauthorized', { status: 403 });
    }

    const text: string = msg.text?.trim() || '';
    console.log('Reply text:', text);

    // Ignore empty messages and commands
    if (!text || text.startsWith('/')) {
      return new Response('ok');
    }

    // Find the active session for this chat ID
    const chatIdStr = String(TELEGRAM_CHAT_ID);
    const sessionId = await redis.get<string>(`active:${chatIdStr}`);
    
    // TRACE LOG: Session Check
    const activeSession = await redis.get(`active:${String(msg?.from?.id)}`);
    console.log("FOUND SESSION IN REDIS?:", activeSession);
    
    console.log('Active session ID for chat', chatIdStr, ':', sessionId);

    if (!sessionId) {
      // Notify Loui that no session is active
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: '⚠️ No active session found. The visitor may have already received an AI reply.',
        }),
      });
      return new Response('ok');
    }

    // Write reply to Redis — browser poll in ChatBot.astro will pick it up
    await redis.set(`reply:${sessionId}`, text, { ex: 30 });
    console.log('Reply stored in Redis for session:', sessionId);

    // Confirm to Loui
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: '✅ Your reply has been sent to the visitor!',
      }),
    });

    return new Response('ok');

  } catch (err) {
    console.error('telegram-webhook error:', err);
    return new Response('error', { status: 500 });
  }
};