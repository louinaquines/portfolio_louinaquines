import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Uses = createComponent(async ($$result, $$props, $$slots) => {
  const allUses = await getCollection("uses");
  const sortedUses = allUses.sort((a, b) => a.data.order - b.data.order);
  const groupedByCategory = sortedUses.reduce((acc, entry) => {
    const category = entry.data.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(entry);
    return acc;
  }, {});
  const categoryInfo = {
    tools: { title: "Tools", description: "Software and applications I use daily" },
    stack: { title: "Tech Stack", description: "Technologies and frameworks I work with" },
    environment: { title: "Environment", description: "Hardware and workspace setup" }
  };
  const categoryOrder = ["tools", "stack", "environment"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-xstiyjza": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container" data-astro-cid-xstiyjza> <header class="page-header" data-astro-cid-xstiyjza> <h1 class="page-title" data-astro-cid-xstiyjza>${pagesConfig.uses.heading}</h1> <p class="page-intro" data-astro-cid-xstiyjza> ${pagesConfig.uses.intro} </p> </header> ${categoryOrder.map((categoryKey) => {
    const entries = groupedByCategory[categoryKey];
    if (!entries || entries.length === 0) return null;
    const info = categoryInfo[categoryKey];
    return renderTemplate`<section class="category-section" data-astro-cid-xstiyjza> <div class="category-header" data-astro-cid-xstiyjza> <h2 data-astro-cid-xstiyjza>${info.title}</h2> <p class="category-description" data-astro-cid-xstiyjza>${info.description}</p> </div> <div class="items-list" data-astro-cid-xstiyjza> ${entries.map((entry) => entry.data.items.map((item) => renderTemplate`<div class="item" data-astro-cid-xstiyjza> <h3 class="item-name" data-astro-cid-xstiyjza> ${item.url ? renderTemplate`<a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-xstiyjza> ${item.name} <span class="external-link-icon" aria-hidden="true" data-astro-cid-xstiyjza>↗</span> </a>` : item.name} </h3> <p class="item-description" data-astro-cid-xstiyjza>${item.description}</p> </div>`))} </div> </section>`;
  })} ${sortedUses.length === 0 && renderTemplate`<p class="empty-state" data-astro-cid-xstiyjza>No uses documented yet.</p>`} </main>  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.uses.title, "description": pagesConfig.uses.description, "type": "website", "data-astro-cid-xstiyjza": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/uses.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/uses.astro";
const $$url = "/uses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Uses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
