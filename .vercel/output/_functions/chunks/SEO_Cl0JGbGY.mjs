import { e as createAstro, c as createComponent, m as maybeRenderHead, f as renderScript, r as renderTemplate, b as addAttribute, d as renderComponent, F as Fragment, g as renderSlot, k as createTransitionScope, a as renderHead } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */
import { s as siteConfig } from './config_DVbK4BqA.mjs';

const $$Astro$3 = createAstro("https://example.com");
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${maybeRenderHead()}<button class="theme-toggle" type="button" aria-label="Toggle theme" title="Toggle theme" data-astro-cid-x3pjskd3> <svg class="icon icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <circle cx="12" cy="12" r="5" data-astro-cid-x3pjskd3></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-x3pjskd3></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-x3pjskd3></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-x3pjskd3></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-x3pjskd3></line> </svg> <svg class="icon icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-x3pjskd3></path> </svg> </button>  ${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ThemeToggle.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/laila/MyNewPortfolio/case/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = Object.entries(siteConfig.social).filter(([_, url]) => url).map(([platform, url]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1),
    url
  }));
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <span class="copyright" data-astro-cid-sz7xmlte>© ${currentYear} ${siteConfig.author.name}</span> ${socialLinks.length > 0 && renderTemplate`<div class="footer-social" data-astro-cid-sz7xmlte> ${socialLinks.map((link, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> ${link.platform} </a> ${index < socialLinks.length - 1 && renderTemplate`<span class="separator" data-astro-cid-sz7xmlte>·</span>`}` })}`)} </div>`} </div> </footer> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Chatbot = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="cb-wrapper" data-astro-cid-rniuooyg> <button id="cb-toggle" class="cb-toggle" aria-label="Open chat" data-astro-cid-rniuooyg> <svg id="cb-icon-open" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-rniuooyg> <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" data-astro-cid-rniuooyg></path> </svg> <svg id="cb-icon-close" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:none" data-astro-cid-rniuooyg> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rniuooyg></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rniuooyg></line> </svg> <span class="cb-unread" id="cb-unread" style="display:none" data-astro-cid-rniuooyg></span> </button> <div id="cb-window" class="cb-window" aria-hidden="true" data-astro-cid-rniuooyg> <div class="cb-header" data-astro-cid-rniuooyg> <div class="cb-header-avatar" data-astro-cid-rniuooyg>
L
<span class="cb-online-dot" data-astro-cid-rniuooyg></span> </div> <div class="cb-header-meta" data-astro-cid-rniuooyg> <div class="cb-header-name" data-astro-cid-rniuooyg>Loui's Assistant</div> <div class="cb-header-status" id="cb-status" data-astro-cid-rniuooyg>online</div> </div> <button id="cb-close" class="cb-header-close" aria-label="Close" data-astro-cid-rniuooyg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rniuooyg> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rniuooyg></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rniuooyg></line> </svg> </button> </div> <div id="cb-messages" class="cb-messages" data-astro-cid-rniuooyg> <div class="cb-date-chip" data-astro-cid-rniuooyg>Today</div> <div class="cb-row cb-row-in" data-astro-cid-rniuooyg> <div class="cb-bub cb-bub-in" data-astro-cid-rniuooyg>
Hi! \u{1F44B} I'm Loui's AI assistant. Ask me anything about his skills, projects, or experience!
<span class="cb-time" data-astro-cid-rniuooyg>now</span> </div> </div> </div> <div id="cb-typing" class="cb-typing-row" style="display:none" data-astro-cid-rniuooyg> <div class="cb-typing-pill" data-astro-cid-rniuooyg> <span data-astro-cid-rniuooyg></span><span data-astro-cid-rniuooyg></span><span data-astro-cid-rniuooyg></span> </div> </div> <div class="cb-input-bar" data-astro-cid-rniuooyg> <input id="cb-input" class="cb-input" type="text" placeholder="Message..." autocomplete="off" data-astro-cid-rniuooyg> <button id="cb-send" class="cb-send" aria-label="Send" data-astro-cid-rniuooyg> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-rniuooyg> <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" data-astro-cid-rniuooyg></path> </svg> </button> </div> </div> </div>  <script>
  // Initialize chatbot when DOM is ready
  (function() {
    const toggleBtn = document.getElementById('cb-toggle');
    const cbWindow  = document.getElementById('cb-window');
    const closeBtn  = document.getElementById('cb-close');
    const sendBtn   = document.getElementById('cb-send');
    const inputEl   = document.getElementById('cb-input');
    const msgsEl    = document.getElementById('cb-messages');
    const typingEl  = document.getElementById('cb-typing');
    const statusEl  = document.getElementById('cb-status');
    const unreadEl  = document.getElementById('cb-unread');
    const iconOpen  = document.getElementById('cb-icon-open');
    const iconClose = document.getElementById('cb-icon-close');

    // Guard: essential elements must exist
    if (!toggleBtn || !cbWindow || !sendBtn || !inputEl) return;

    let isOpen = false;
    let ownerPollInterval = null;

    function nowTime() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function openChat() {
      isOpen = true;
      cbWindow.classList.add('open');
      cbWindow.setAttribute('aria-hidden', 'false');
      iconOpen.style.display  = 'none';
      iconClose.style.display = 'block';
      unreadEl.style.display  = 'none';
      setTimeout(() => inputEl.focus(), 230);
    }
    function closeChat() {
      isOpen = false;
      cbWindow.classList.remove('open');
      cbWindow.setAttribute('aria-hidden', 'true');
      iconOpen.style.display  = 'block';
      iconClose.style.display = 'none';
    }

    toggleBtn.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);

    // role: 'in' = AI | 'out' = user | 'owner' = Loui (blue)
    function addBubble(text, role) {
      const row = document.createElement('div');
      row.className = \`cb-row \${role === 'out' ? 'cb-row-out' : 'cb-row-in'}\`;

      const bub = document.createElement('div');
      bub.className = \`cb-bub \${
        role === 'out'   ? 'cb-bub-out'   :
        role === 'owner' ? 'cb-bub-owner' :
        'cb-bub-in'
      }\`;

      if (role === 'owner') {
        const label = document.createElement('span');
        label.className = 'cb-owner-label';
        label.textContent = 'Loui';
        bub.appendChild(label);
      }

      const textNode = document.createElement('span');
      textNode.innerHTML = text.replace(/\\n/g, '<br>');
      bub.appendChild(textNode);

      const time = document.createElement('span');
      time.className = 'cb-time';
      time.textContent = nowTime();
      bub.appendChild(time);

      row.appendChild(bub);
      msgsEl.appendChild(row);
      msgsEl.scrollTop = msgsEl.scrollHeight;

      if (!isOpen && role !== 'out') {
        unreadEl.style.display = 'block';
      }
    }

    function setTyping(show) {
      typingEl.style.display = show ? 'block' : 'none';
      sendBtn.disabled = show;
      statusEl.textContent = show ? 'typing...' : 'online';
      statusEl.classList.toggle('typing', show);
      if (show) msgsEl.scrollTop = msgsEl.scrollHeight;
    }

    // Start persistent polling for Loui's replies (runs as long as page is open)
    function startOwnerPoll(sessionId) {
      if (ownerPollInterval) clearInterval(ownerPollInterval);
      ownerPollInterval = setInterval(async () => {
        try {
          const res = await fetch(\`/api/reply?sessionId=\${sessionId}\`);
          const data = await res.json();
          if (data.reply) {
            addBubble(data.reply, 'owner');
          }
        } catch (_) {}
      }, 3000);
    }

    // Persistent session ID for this browser tab
    const sessionId = sessionStorage.getItem('chatSessionId') || crypto.randomUUID();
    sessionStorage.setItem('chatSessionId', sessionId);

    // Start polling for owner replies immediately on page load
    startOwnerPoll(sessionId);

    async function sendMessage() {
      const text = inputEl.value.trim();
      if (!text || sendBtn.disabled) return;

      addBubble(text, 'out');
      inputEl.value = '';
      setTyping(true);

      try {
        // Step 1: Send message to server + notify Loui on Telegram
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, sessionId }),
        });

        // Step 2: AI replies immediately \u2014 no waiting for Loui
        const res = await fetch('/api/ai-fallback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
        });
        const data = await res.json();
        setTyping(false);
        addBubble(data.reply || "Sorry, I'm having trouble right now.", 'in');

        // Loui's reply will appear automatically via the background poll (startOwnerPoll)

      } catch (err) {
        setTyping(false);
        addBubble("Sorry, I'm having trouble connecting right now.", 'in');
        console.error('ChatBot error:', err);
      }
    }

    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  })();
<\/script>`], ["", `<div class="cb-wrapper" data-astro-cid-rniuooyg> <button id="cb-toggle" class="cb-toggle" aria-label="Open chat" data-astro-cid-rniuooyg> <svg id="cb-icon-open" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-rniuooyg> <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" data-astro-cid-rniuooyg></path> </svg> <svg id="cb-icon-close" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:none" data-astro-cid-rniuooyg> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rniuooyg></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rniuooyg></line> </svg> <span class="cb-unread" id="cb-unread" style="display:none" data-astro-cid-rniuooyg></span> </button> <div id="cb-window" class="cb-window" aria-hidden="true" data-astro-cid-rniuooyg> <div class="cb-header" data-astro-cid-rniuooyg> <div class="cb-header-avatar" data-astro-cid-rniuooyg>
L
<span class="cb-online-dot" data-astro-cid-rniuooyg></span> </div> <div class="cb-header-meta" data-astro-cid-rniuooyg> <div class="cb-header-name" data-astro-cid-rniuooyg>Loui's Assistant</div> <div class="cb-header-status" id="cb-status" data-astro-cid-rniuooyg>online</div> </div> <button id="cb-close" class="cb-header-close" aria-label="Close" data-astro-cid-rniuooyg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rniuooyg> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rniuooyg></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rniuooyg></line> </svg> </button> </div> <div id="cb-messages" class="cb-messages" data-astro-cid-rniuooyg> <div class="cb-date-chip" data-astro-cid-rniuooyg>Today</div> <div class="cb-row cb-row-in" data-astro-cid-rniuooyg> <div class="cb-bub cb-bub-in" data-astro-cid-rniuooyg>
Hi! \u{1F44B} I'm Loui's AI assistant. Ask me anything about his skills, projects, or experience!
<span class="cb-time" data-astro-cid-rniuooyg>now</span> </div> </div> </div> <div id="cb-typing" class="cb-typing-row" style="display:none" data-astro-cid-rniuooyg> <div class="cb-typing-pill" data-astro-cid-rniuooyg> <span data-astro-cid-rniuooyg></span><span data-astro-cid-rniuooyg></span><span data-astro-cid-rniuooyg></span> </div> </div> <div class="cb-input-bar" data-astro-cid-rniuooyg> <input id="cb-input" class="cb-input" type="text" placeholder="Message..." autocomplete="off" data-astro-cid-rniuooyg> <button id="cb-send" class="cb-send" aria-label="Send" data-astro-cid-rniuooyg> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-rniuooyg> <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" data-astro-cid-rniuooyg></path> </svg> </button> </div> </div> </div>  <script>
  // Initialize chatbot when DOM is ready
  (function() {
    const toggleBtn = document.getElementById('cb-toggle');
    const cbWindow  = document.getElementById('cb-window');
    const closeBtn  = document.getElementById('cb-close');
    const sendBtn   = document.getElementById('cb-send');
    const inputEl   = document.getElementById('cb-input');
    const msgsEl    = document.getElementById('cb-messages');
    const typingEl  = document.getElementById('cb-typing');
    const statusEl  = document.getElementById('cb-status');
    const unreadEl  = document.getElementById('cb-unread');
    const iconOpen  = document.getElementById('cb-icon-open');
    const iconClose = document.getElementById('cb-icon-close');

    // Guard: essential elements must exist
    if (!toggleBtn || !cbWindow || !sendBtn || !inputEl) return;

    let isOpen = false;
    let ownerPollInterval = null;

    function nowTime() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function openChat() {
      isOpen = true;
      cbWindow.classList.add('open');
      cbWindow.setAttribute('aria-hidden', 'false');
      iconOpen.style.display  = 'none';
      iconClose.style.display = 'block';
      unreadEl.style.display  = 'none';
      setTimeout(() => inputEl.focus(), 230);
    }
    function closeChat() {
      isOpen = false;
      cbWindow.classList.remove('open');
      cbWindow.setAttribute('aria-hidden', 'true');
      iconOpen.style.display  = 'block';
      iconClose.style.display = 'none';
    }

    toggleBtn.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);

    // role: 'in' = AI | 'out' = user | 'owner' = Loui (blue)
    function addBubble(text, role) {
      const row = document.createElement('div');
      row.className = \\\`cb-row \\\${role === 'out' ? 'cb-row-out' : 'cb-row-in'}\\\`;

      const bub = document.createElement('div');
      bub.className = \\\`cb-bub \\\${
        role === 'out'   ? 'cb-bub-out'   :
        role === 'owner' ? 'cb-bub-owner' :
        'cb-bub-in'
      }\\\`;

      if (role === 'owner') {
        const label = document.createElement('span');
        label.className = 'cb-owner-label';
        label.textContent = 'Loui';
        bub.appendChild(label);
      }

      const textNode = document.createElement('span');
      textNode.innerHTML = text.replace(/\\\\n/g, '<br>');
      bub.appendChild(textNode);

      const time = document.createElement('span');
      time.className = 'cb-time';
      time.textContent = nowTime();
      bub.appendChild(time);

      row.appendChild(bub);
      msgsEl.appendChild(row);
      msgsEl.scrollTop = msgsEl.scrollHeight;

      if (!isOpen && role !== 'out') {
        unreadEl.style.display = 'block';
      }
    }

    function setTyping(show) {
      typingEl.style.display = show ? 'block' : 'none';
      sendBtn.disabled = show;
      statusEl.textContent = show ? 'typing...' : 'online';
      statusEl.classList.toggle('typing', show);
      if (show) msgsEl.scrollTop = msgsEl.scrollHeight;
    }

    // Start persistent polling for Loui's replies (runs as long as page is open)
    function startOwnerPoll(sessionId) {
      if (ownerPollInterval) clearInterval(ownerPollInterval);
      ownerPollInterval = setInterval(async () => {
        try {
          const res = await fetch(\\\`/api/reply?sessionId=\\\${sessionId}\\\`);
          const data = await res.json();
          if (data.reply) {
            addBubble(data.reply, 'owner');
          }
        } catch (_) {}
      }, 3000);
    }

    // Persistent session ID for this browser tab
    const sessionId = sessionStorage.getItem('chatSessionId') || crypto.randomUUID();
    sessionStorage.setItem('chatSessionId', sessionId);

    // Start polling for owner replies immediately on page load
    startOwnerPoll(sessionId);

    async function sendMessage() {
      const text = inputEl.value.trim();
      if (!text || sendBtn.disabled) return;

      addBubble(text, 'out');
      inputEl.value = '';
      setTyping(true);

      try {
        // Step 1: Send message to server + notify Loui on Telegram
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, sessionId }),
        });

        // Step 2: AI replies immediately \u2014 no waiting for Loui
        const res = await fetch('/api/ai-fallback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
        });
        const data = await res.json();
        setTyping(false);
        addBubble(data.reply || "Sorry, I'm having trouble right now.", 'in');

        // Loui's reply will appear automatically via the background poll (startOwnerPoll)

      } catch (err) {
        setTyping(false);
        addBubble("Sorry, I'm having trouble connecting right now.", 'in');
        console.error('ChatBot error:', err);
      }
    }

    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  })();
<\/script>`])), maybeRenderHead());
}, "C:/Users/laila/MyNewPortfolio/case/src/components/Chatbot.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate(_a || (_a = __template(["<html", ' data-theme="dark" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO tags injected via slot -->", '<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#0a0a0a">', "<!-- Prevent flash of wrong theme --><script>\n      (function() {\n        const stored = localStorage.getItem('theme');\n        const theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n        document.documentElement.setAttribute('data-theme', theme);\n      })();\n    <\/script><!-- Preserve theme during View Transitions --><script>\n      document.addEventListener('astro:before-swap', (e) => {\n        const theme = document.documentElement.getAttribute('data-theme');\n        e.newDocument.documentElement.setAttribute('data-theme', theme);\n      });\n    <\/script>", '</head> <body data-astro-cid-37fxchfa> <header class="site-header" data-astro-cid-37fxchfa', '> <div style="display:flex; justify-content:flex-end; padding:0.75rem 1.5rem; border-bottom:1px solid var(--color-border); background:var(--color-bg);" data-astro-cid-37fxchfa> ', " </div> </header> <main data-astro-cid-37fxchfa> ", " </main> ", " ", " ", " </body> </html>"])), addAttribute(siteConfig.language, "lang"), addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["head"]), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-37fxchfa": true }), renderHead(), addAttribute(createTransitionScope($$result, "4hoqgnvm"), "data-astro-transition-persist"), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Chatbot", $$Chatbot, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/laila/MyNewPortfolio/case/src/layouts/BaseLayout.astro", "self");

const $$Astro = createAstro("https://example.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description = siteConfig.description,
    type = "website",
    image,
    publishDate,
    updatedDate,
    canonicalURL,
    noSuffix = false
  } = Astro2.props;
  const fullTitle = noSuffix ? title : title ? `${title} | ${siteConfig.author.name}` : siteConfig.title;
  const currentURL = canonicalURL || Astro2.url.href;
  const siteURL = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;
  const defaultImage = `${siteURL}og-image.png`;
  const ogImage = image || defaultImage;
  const absoluteImageURL = ogImage.startsWith("http") ? ogImage : `${siteURL}${ogImage.replace(/^\//, "")}`;
  const twitterHandle = siteConfig.social.twitter ? `@${siteConfig.social.twitter.split("/").pop()}` : void 0;
  return renderTemplate`<!-- Page Title --><title>${fullTitle}</title><!-- Meta Description --><meta name="description"${addAttribute(description, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(currentURL, "href")}><!-- Author --><meta name="author"${addAttribute(siteConfig.author.name, "content")}><!-- Open Graph Tags --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(currentURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(absoluteImageURL, "content")}><meta property="og:site_name"${addAttribute(siteConfig.title, "content")}><!-- Article-specific Open Graph tags -->${type === "article" && publishDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(publishDate.toISOString(), "content")}>${updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedDate.toISOString(), "content")}>`}` })}`}<!-- Twitter Card Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"${addAttribute(currentURL, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(absoluteImageURL, "content")}>${twitterHandle && renderTemplate`<meta name="twitter:site"${addAttribute(twitterHandle, "content")}>`}${twitterHandle && renderTemplate`<meta name="twitter:creator"${addAttribute(twitterHandle, "content")}>`}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/SEO.astro", void 0);

export { $$BaseLayout as $, $$SEO as a };
