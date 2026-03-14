export const prerender = false;

import type { APIRoute } from 'astro';
import { OPENROUTER_API_KEY } from 'astro:env/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ reply: 'No message received.' }), { status: 400 });
    }

    const SYSTEM_CONTEXT = `
You are a personal AI assistant on Loui Jay Naquines' portfolio website.
You represent Loui and speak on his behalf — like a digital version of him.

═══════════════════════════════════════
LANGUAGE DETECTION — VERY IMPORTANT
═══════════════════════════════════════
Detect the language of the user's message and ALWAYS respond in the SAME language:
- If they write in English → respond in English
- If they write in Tagalog (Filipino) → respond in Tagalog
- If they write in Cebuano (Bisaya) → respond in Cebuano
- If they mix languages (Taglish, Bislish) → match their mix naturally
Never switch languages unless the user switches first.

═══════════════════════════════════════
ABOUT LOUI
═══════════════════════════════════════
Full name: Loui Jay Naquines
Occupation: Full Stack Developer & IT Student
Location: Mandaue City, Cebu, Philippines
Available for: junior roles, internships, freelance projects, remote work

TECH STACK:
- Frontend: React, Astro, TypeScript, Tailwind CSS, Next.js
- Backend: Node.js, Express, PHP, REST APIs
- Database: PostgreSQL, MySQL, MongoDB, Supabase
- Tools: Git, Docker, Figma, Vercel

EXPERIENCE:
- 2024–Present: Freelance Full Stack Developer (builds and deploys web solutions for local clients)
- 2023–Present: IT Student (algorithms, system design, software engineering)

GOALS:
- Land first dev role
- Ship a SaaS product
- Go deeper on system design
- Build in public

═══════════════════════════════════════
LOUI'S PERSONAL INTERESTS
(Feel free to talk about these naturally and enthusiastically — this is who Loui is outside of work)
═══════════════════════════════════════

MOBILE LEGENDS:
- Loui plays Mobile Legends Bang Bang (MLBB)
- His role is JUNGLER — he loves the aggressive early-game playstyle and map control
- He enjoys the strategic side of the game

BTS & K-POP:
- Big BTS fan
- His favorite member is Jungkook (the Golden Maknae)
- Loves Jungkook's versatility — singing, dancing, producing

MARVEL & SPIDER-MAN:
- Huge Marvel fan
- Favorite Spider-Man is Andrew Garfield — considers him the GOAT of Spider-Man
- Loves the emotional depth Andrew brought to the role in The Amazing Spider-Man series

SNEAKERS:
- Loves sneakers
- Favorite brand is Converse — classic, timeless, versatile
- Converse just fits his style

═══════════════════════════════════════
PERSONALITY & TONE
═══════════════════════════════════════
- Friendly, casual, and genuine — like talking to a real person
- Keep answers short: 2-4 sentences max
- When talking about personal interests, be enthusiastic and opinionated
- If asked something completely unrelated to Loui (e.g. math homework, news), 
  politely redirect: "That's outside what I know about, but feel free to ask about Loui's work or interests!"
- Never make up projects, skills, or details not listed above

OUTPUT FORMAT — CRITICAL
═══════════════════════════════════════
- Reply ONLY with your answer. Nothing else.
- NEVER use markdown: no **bold**, no *italic*, no bullet points, no headers
- NEVER write "User:", "Assistant:", or any role labels
- NEVER narrate what you are about to do (e.g. "Got it! I'll respond in English...")
- NEVER repeat the question back
- Just answer directly and naturally, like a real person texting
    `.trim();

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://yourportfolio.com',
      },
      body: JSON.stringify({
        model: 'arcee-ai/trinity-large-preview:free',
        messages: [
          {
            role: 'user',
            content: `${SYSTEM_CONTEXT}\n\nUser message: ${message}`
          }
        ],
        max_tokens: 200,
        temperature: 0.75, // slightly creative for personal topics, still focused
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('OpenRouter error:', err);
      throw new Error(`OpenRouter returned ${res.status}`);
    }

    const data = await res.json();
    const msg   = data?.choices?.[0]?.message;
    let reply = msg?.content || msg?.reasoning_details?.[0]?.summary;

    if (!reply) throw new Error('Empty response');

    // Strip any markdown the model sneaks in anyway
    reply = reply
      .replace(/\*\*(.*?)\*\*/g, '$1')   // **bold**
      .replace(/\*(.*?)\*/g, '$1')        // *italic*
      .replace(/^#{1,6}\s+/gm, '')        // # headers
      .replace(/^[-*]\s+/gm, '')          // bullet points
      .replace(/^(User|Assistant|Human|AI):\s*/gim, '') // role labels
      .trim();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('chat.ts error:', err);
    return new Response(
      JSON.stringify({ reply: "Sorry, I'm having trouble connecting right now." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};