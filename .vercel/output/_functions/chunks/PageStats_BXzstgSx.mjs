import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$PageStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageStats;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="page-stats" data-astro-cid-we66mwgu>${text}</p> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/PageStats.astro", void 0);

export { $$PageStats as $ };
