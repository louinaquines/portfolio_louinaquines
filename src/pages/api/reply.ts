export const prerender = false;

import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export const GET: APIRoute = async ({ url }) => {
  const sessionId = url.searchParams.get('sessionId');

  if (!sessionId) {
    return new Response(JSON.stringify({ reply: null }), { status: 400 });
  }

  const reply = await redis.get<string>(`reply:${sessionId}`);

  if (reply) {
    // Clean up after reading so it doesn't get sent twice
    await redis.del(`reply:${sessionId}`);
    return new Response(JSON.stringify({ reply, source: 'owner' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ reply: null }), {
    headers: { 'Content-Type': 'application/json' },
  });
};