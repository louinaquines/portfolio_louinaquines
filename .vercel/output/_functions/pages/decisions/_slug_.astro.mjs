import { e as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$BackLink, a as $$ScrollToTop } from '../../chunks/BackLink_BMRIQQeU.mjs';
import { $ as $$RelatedContent } from '../../chunks/RelatedContent_CibQOE2f.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_Bmk3BJ6x.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const getStaticPaths = async () => {
  const decisions = await getCollection("decisions");
  return decisions.map((decision) => ({
    params: { slug: decision.id },
    props: { decision }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { decision } = Astro2.props;
  const { Content } = await renderEntry(decision);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(decision.data.date);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-nazm5rpk": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="decision-page" data-astro-cid-nazm5rpk> <article class="decision-content" data-astro-cid-nazm5rpk> <header class="decision-header" data-astro-cid-nazm5rpk> <time class="decision-date"${addAttribute(decision.data.date.toISOString(), "datetime")} data-astro-cid-nazm5rpk> ${formattedDate} </time> <h1 class="decision-title" data-astro-cid-nazm5rpk>${decision.data.title}</h1> ${decision.data.tags && decision.data.tags.length > 0 && renderTemplate`<div class="decision-tags" data-astro-cid-nazm5rpk> ${decision.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-nazm5rpk>${tag}</span>`)} </div>`} </header> <section class="decision-section" data-astro-cid-nazm5rpk> <h2 class="section-label" data-astro-cid-nazm5rpk>Context</h2> <p class="section-content" data-astro-cid-nazm5rpk>${decision.data.context}</p> </section> <section class="decision-section decision-made" data-astro-cid-nazm5rpk> <h2 class="section-label" data-astro-cid-nazm5rpk>Decision</h2> <p class="section-content highlight" data-astro-cid-nazm5rpk>${decision.data.decision}</p> </section> <section class="decision-section" data-astro-cid-nazm5rpk> <h2 class="section-label" data-astro-cid-nazm5rpk>Alternatives Considered</h2> <div class="alternatives-list" data-astro-cid-nazm5rpk> ${decision.data.alternatives.map((alt) => renderTemplate`<div class="alternative-item" data-astro-cid-nazm5rpk> <h3 class="alternative-option" data-astro-cid-nazm5rpk>${alt.option}</h3> <div class="alternative-details" data-astro-cid-nazm5rpk> ${alt.pros && alt.pros.length > 0 && renderTemplate`<div class="pros-cons" data-astro-cid-nazm5rpk> <span class="detail-label pros-label" data-astro-cid-nazm5rpk>Pros</span> <ul class="detail-list" data-astro-cid-nazm5rpk> ${alt.pros.map((pro) => renderTemplate`<li data-astro-cid-nazm5rpk>${pro}</li>`)} </ul> </div>`} ${alt.cons && alt.cons.length > 0 && renderTemplate`<div class="pros-cons" data-astro-cid-nazm5rpk> <span class="detail-label cons-label" data-astro-cid-nazm5rpk>Cons</span> <ul class="detail-list" data-astro-cid-nazm5rpk> ${alt.cons.map((con) => renderTemplate`<li data-astro-cid-nazm5rpk>${con}</li>`)} </ul> </div>`} </div> </div>`)} </div> </section> <section class="decision-section" data-astro-cid-nazm5rpk> <h2 class="section-label" data-astro-cid-nazm5rpk>Reasoning</h2> <p class="section-content" data-astro-cid-nazm5rpk>${decision.data.reasoning}</p> </section> ${decision.body && decision.body.trim().length > 0 && renderTemplate`<section class="decision-body prose" data-astro-cid-nazm5rpk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-nazm5rpk": true })} </section>`} ${renderComponent($$result2, "RelatedContent", $$RelatedContent, { "relatedProjects": decision.data.relatedProjects, "relatedDecisions": decision.data.relatedDecisions, "data-astro-cid-nazm5rpk": true })} ${renderComponent($$result2, "BackLink", $$BackLink, { "href": "/decisions", "text": "All decisions", "data-astro-cid-nazm5rpk": true })} </article> </main> ${renderComponent($$result2, "ScrollToTop", $$ScrollToTop, { "data-astro-cid-nazm5rpk": true })}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": `${decision.data.title} - Decision Record`, "description": decision.data.context, "type": "article", "data-astro-cid-nazm5rpk": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/decisions/[slug].astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/decisions/[slug].astro";
const $$url = "/decisions/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
