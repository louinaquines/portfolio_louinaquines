export const prerender = false;

import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server';

const redis = Redis.fromEnv();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const msg = body?.message;

    // Only accept messages from Loui's personal Telegram account
    if (!msg || String(msg.chat?.id) !== String(TELEGRAM_CHAT_ID)) {
      return new Response('Unauthorized', { status: 403 });
    }

    const text: string = msg.text?.trim() || '';

    // Ignore empty messages and commands
    if (!text || text.startsWith('/')) {
      return new Response('ok');
    }

    // Find the active session
    const sessionId = await redis.get<string>('active:session');

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