import { e as createAstro, c as createComponent, f as renderScript, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment } from '../../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_DNM7clt9.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$BackLink, a as $$ScrollToTop } from '../../chunks/BackLink_BMRIQQeU.mjs';
import { a as getEntry, r as renderEntry, g as getCollection } from '../../chunks/_astro_content_Bmk3BJ6x.mjs';
import { g as getReadingTime } from '../../chunks/readingTime_DLKHYMxC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const filteredHeadings = headings.filter((h) => h.depth === 2 || h.depth === 3);
  const shouldRender = filteredHeadings.length >= 3;
  return renderTemplate`${shouldRender && renderTemplate`${maybeRenderHead()}<nav class="table-of-contents" aria-label="Table of contents" data-astro-cid-xvrfupwn><button class="toc-toggle" type="button" aria-expanded="false" aria-controls="toc-list" data-astro-cid-xvrfupwn><span class="toc-title" data-astro-cid-xvrfupwn>Table of Contents</span><span class="toc-count" data-astro-cid-xvrfupwn>${filteredHeadings.length} sections</span><svg class="toc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xvrfupwn><polyline points="6 9 12 15 18 9" data-astro-cid-xvrfupwn></polyline></svg></button><ul class="toc-list" id="toc-list" data-astro-cid-xvrfupwn>${filteredHeadings.map((heading) => renderTemplate`<li${addAttribute(`toc-item toc-depth-${heading.depth}`, "class")} data-astro-cid-xvrfupwn><a${addAttribute(`#${heading.slug}`, "href")} class="toc-link" data-astro-cid-xvrfupwn>${heading.text}</a></li>`)}</ul></nav>`}${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/TableOfContents.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const articles = await getCollection("writing", ({ data }) => {
    return data.draft === false;
  });
  return articles.map((article) => ({
    params: { slug: article.id }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const article = await getEntry("writing", slug);
  if (!article) {
    return Astro2.redirect("/404");
  }
  const { Content, headings } = await renderEntry(article);
  const {
    title,
    description,
    publishDate,
    updatedDate,
    tags
  } = article.data;
  const readingTime = getReadingTime(article.body || "");
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-jxnjfbl4": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "type": "Article", "data": {
    title,
    description,
    publishDate,
    updatedDate,
    tags,
    url: Astro2.url.href
  }, "data-astro-cid-jxnjfbl4": true })} ${maybeRenderHead()}<main class="article" data-astro-cid-jxnjfbl4> <!-- Article Header --> <header class="article-header" data-astro-cid-jxnjfbl4> <h1 data-astro-cid-jxnjfbl4>${title}</h1> <div class="article-meta" data-astro-cid-jxnjfbl4> <time class="publish-date"${addAttribute(publishDate.toISOString(), "datetime")} data-astro-cid-jxnjfbl4> ${formatDate(publishDate)} </time> <span class="meta-separator" data-astro-cid-jxnjfbl4>·</span> <span class="reading-time" data-astro-cid-jxnjfbl4>${readingTime}</span> ${updatedDate && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-jxnjfbl4": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-separator" data-astro-cid-jxnjfbl4>·</span> <time class="updated-date"${addAttribute(updatedDate.toISOString(), "datetime")} data-astro-cid-jxnjfbl4>
Updated ${formatDate(updatedDate)} </time> ` })}`} </div> ${tags && tags.length > 0 && renderTemplate`<div class="article-tags" data-astro-cid-jxnjfbl4> ${tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-jxnjfbl4>${tag}</span>`)} </div>`} </header> <!-- Table of Contents (conditionally rendered if 3+ sections) --> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings, "data-astro-cid-jxnjfbl4": true })} <!-- Article Content --> <article class="article-content" data-astro-cid-jxnjfbl4> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-jxnjfbl4": true })} </article> ${renderComponent($$result2, "BackLink", $$BackLink, { "href": "/writing", "text": "All articles", "data-astro-cid-jxnjfbl4": true })} </main> ${renderComponent($$result2, "ScrollToTop", $$ScrollToTop, { "data-astro-cid-jxnjfbl4": true })}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": `${title} - Writing`, "description": description, "type": "article", "publishDate": publishDate, "updatedDate": updatedDate, "data-astro-cid-jxnjfbl4": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/writing/[slug].astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/writing/[slug].astro";
const $$url = "/writing/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
