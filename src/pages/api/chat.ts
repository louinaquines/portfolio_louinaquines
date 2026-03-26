export const prerender = false;

import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server';

const redis = Redis.fromEnv();

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, sessionId } = await request.json();

    console.log('Chat API called:', { message, sessionId });
    console.log('Telegram config:', { botToken: TELEGRAM_BOT_TOKEN ? 'set' : 'missing', chatId: TELEGRAM_CHAT_ID ? 'set' : 'missing' });

    if (!message || !sessionId) {
      return new Response(JSON.stringify({ error: 'Missing message or sessionId' }), { status: 400 });
    }

    // Clear any stale reply from a previous message
    await redis.del(`reply:${sessionId}`);

    // Mark this as the active session so the webhook knows where to deliver
    // Store under the chat ID key so we can track the active session for this specific user
    const chatIdStr = String(TELEGRAM_CHAT_ID);
    await redis.set(`active:${chatIdStr}`, sessionId, { ex: 300 });

    // Send Telegram notification to Loui
    const text = `💬 *New portfolio message!*\n\n${message}\n\n_Reply within 10s or AI responds._\n\`Session: ${sessionId.slice(0, 8)}\``;
    
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    console.log('Sending to Telegram URL:', telegramUrl);
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
    });
    
    const telegramResult = await telegramResponse.json();
    console.log('Telegram API response:', telegramResult);

    // Return immediately — browser will poll /api/reply
    return new Response(JSON.stringify({ ok: true, telegram: telegramResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('chat.ts error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
