import { c as createComponent, r as renderTemplate, a as renderHead, b as addAttribute } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
import { s as siteConfig } from '../chunks/config_DVbK4BqA.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "404 - Page Not Found";
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', `</title><meta name="robots" content="noindex, nofollow"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><!-- Inline critical styles --><!-- Theme initialization script --><script>
      (function() {
        const stored = localStorage.getItem('theme');
        const theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        document.documentElement.setAttribute('data-theme', theme);
      })();
    <\/script>`, `</head> <body data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <!-- 404 Icon --> <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zetdm5md> <circle cx="12" cy="12" r="10" data-astro-cid-zetdm5md></circle> <line x1="12" y1="8" x2="12" y2="12" data-astro-cid-zetdm5md></line> <line x1="12" y1="16" x2="12.01" y2="16" data-astro-cid-zetdm5md></line> </svg> <div class="error-code" data-astro-cid-zetdm5md>404 Error</div> <h1 data-astro-cid-zetdm5md>Page Not Found</h1> <p class="description" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has been moved. Let's get you back on track.
</p> <a href="/" class="home-button" data-astro-cid-zetdm5md>Back to Home</a> </div> </body></html>`])), addAttribute(siteConfig.language, "lang"), pageTitle, renderHead());
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/404.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
