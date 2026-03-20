import { Redis } from '@upstash/redis';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const redis = Redis.fromEnv();
const GET = async ({ url }) => {
  const sessionId = url.searchParams.get("sessionId");
  if (!sessionId) {
    return new Response(JSON.stringify({ reply: null }), { status: 400 });
  }
  const reply = await redis.get(`reply:${sessionId}`);
  if (reply) {
    await redis.del(`reply:${sessionId}`);
    return new Response(JSON.stringify({ reply, source: "owner" }), {
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ reply: null }), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
