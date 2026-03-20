import { Redis } from '@upstash/redis';
import { T as TELEGRAM_BOT_TOKEN, a as TELEGRAM_CHAT_ID } from '../../chunks/server_DpgzFp8_.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const redis = Redis.fromEnv();
const POST = async ({ request }) => {
  try {
    const { message, sessionId } = await request.json();
    if (!message || !sessionId) {
      return new Response(JSON.stringify({ error: "Missing message or sessionId" }), { status: 400 });
    }
    await redis.del(`reply:${sessionId}`);
    await redis.set("active:session", sessionId, { ex: 60 });
    const text = `💬 *New portfolio message!*

${message}

_Reply within 10s or AI responds._
\`Session: ${sessionId.slice(0, 8)}\``;
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "Markdown" })
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("chat.ts error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
