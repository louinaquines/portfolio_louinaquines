import { e as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$BaseCard, a as $$ForwardLink } from '../chunks/ForwardLink_JH2sD0U5.mjs';
import { $ as $$PageStats } from '../chunks/PageStats_BXzstgSx.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$DecisionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DecisionCard;
  const { title, slug, context, date, tags = [], maxContextLength = 180 } = Astro2.props;
  function formatDate(date2) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long"
    }).format(date2);
  }
  function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  }
  const truncatedContext = truncate(context, maxContextLength);
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "href": `/decisions/${slug}`, "class": "decision-card" }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "ForwardLink", $$ForwardLink, { "text": "Read decision" })} `, "description": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "description" }, { "default": ($$result3) => renderTemplate`${truncatedContext}` })}`, "meta": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "meta" }, { "default": ($$result3) => renderTemplate`${formatDate(date)}` })}`, "tags": ($$result2) => renderTemplate`${tags.length > 0 && renderTemplate`${maybeRenderHead()}<div class="tags-list"> ${tags.map((tag) => renderTemplate`<span class="tag">${tag}</span>`)} </div>`}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${title}` })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/DecisionCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allDecisions = await getCollection("decisions");
  const sortedDecisions = allDecisions.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  const totalDecisions = sortedDecisions.length;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container"> <header class="page-header"> <h1 class="page-title">${pagesConfig.decisions.heading}</h1> <p class="page-intro"> ${pagesConfig.decisions.intro} </p> ${renderComponent($$result2, "PageStats", $$PageStats, { "text": `${totalDecisions} decisions documented` })} </header> ${sortedDecisions.length > 0 ? renderTemplate`<div class="card-list card-list--compact"> ${sortedDecisions.map((decision) => renderTemplate`${renderComponent($$result2, "DecisionCard", $$DecisionCard, { "title": decision.data.title, "slug": decision.id, "context": decision.data.context, "date": decision.data.date, "tags": decision.data.tags })}`)} </div>` : renderTemplate`<p class="empty-state">No decisions documented yet.</p>`} </main> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.decisions.title, "description": pagesConfig.decisions.description, "type": "website" })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/decisions/index.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/decisions/index.astro";
const $$url = "/decisions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
