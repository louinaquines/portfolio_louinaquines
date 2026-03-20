import { e as createAstro, c as createComponent, m as maybeRenderHead, f as renderScript, r as renderTemplate, b as addAttribute } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://example.com");
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollToTop;
  return renderTemplate`${maybeRenderHead()}<button class="scroll-to-top" type="button" aria-label="Scroll to top" title="Scroll to top" data-astro-cid-73562bqz> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-73562bqz> <polyline points="18 15 12 9 6 15" data-astro-cid-73562bqz></polyline> </svg> </button>  ${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/components/ScrollToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ScrollToTop.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BackLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackLink;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="back-link-container" data-astro-cid-c4cqltiy> <a${addAttribute(href, "href")} class="back-link" data-astro-cid-c4cqltiy> <svg class="back-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-c4cqltiy> <path d="M9.70711 17.2929C10.0976 17.6834 10.0976 18.3166 9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L5.41421 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L5.41422 13L9.70711 17.2929Z" data-astro-cid-c4cqltiy></path> </svg> ${text} </a> </div> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/BackLink.astro", void 0);

export { $$BackLink as $, $$ScrollToTop as a };
