import { Redis } from '@upstash/redis';
import { a as TELEGRAM_CHAT_ID, T as TELEGRAM_BOT_TOKEN } from '../../chunks/server_DpgzFp8_.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const redis = Redis.fromEnv();
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const msg = body?.message;
    if (!msg || String(msg.chat?.id) !== String(TELEGRAM_CHAT_ID)) {
      return new Response("Unauthorized", { status: 403 });
    }
    const text = msg.text?.trim() || "";
    if (!text || text.startsWith("/")) {
      return new Response("ok");
    }
    const sessionId = await redis.get("active:session");
    if (!sessionId) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: "⚠️ No active session found. The visitor may have already received an AI reply."
        })
      });
      return new Response("ok");
    }
    await redis.set(`reply:${sessionId}`, text, { ex: 30 });
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: "✅ Your reply has been sent to the visitor!"
      })
    });
    return new Response("ok");
  } catch (err) {
    console.error("telegram-webhook error:", err);
    return new Response("error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
