import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment } from '../../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../../chunks/SEO_Cl0JGbGY.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$BaseCard, a as $$ForwardLink } from '../../chunks/ForwardLink_JH2sD0U5.mjs';
import { $ as $$PageStats } from '../../chunks/PageStats_BXzstgSx.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../../chunks/pages.config_Bbrruyxx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl } = Astro2.props;
  function getPageNumbers(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [];
    if (current <= 3) {
      pages.push(1, 2, 3, 4, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 3, total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
    return pages;
  }
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  function getPageUrl(page) {
    return page === 1 ? baseUrl : `${baseUrl}/${page}`;
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="pagination" aria-label="Pagination" data-astro-cid-d776pwuy>${currentPage > 1 ? renderTemplate`<a${addAttribute(getPageUrl(currentPage - 1), "href")} class="pagination-btn pagination-prev" aria-label="Previous page" data-astro-cid-d776pwuy><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-d776pwuy><polyline points="15 18 9 12 15 6" data-astro-cid-d776pwuy></polyline></svg><span data-astro-cid-d776pwuy>Previous</span></a>` : renderTemplate`<span class="pagination-btn pagination-prev disabled" aria-disabled="true" data-astro-cid-d776pwuy><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-d776pwuy><polyline points="15 18 9 12 15 6" data-astro-cid-d776pwuy></polyline></svg><span data-astro-cid-d776pwuy>Previous</span></span>`}<div class="pagination-numbers" data-astro-cid-d776pwuy>${pageNumbers.map((page) => page === "..." ? renderTemplate`<span class="pagination-ellipsis" data-astro-cid-d776pwuy>...</span>` : renderTemplate`<a${addAttribute(getPageUrl(page), "href")}${addAttribute(`pagination-number ${page === currentPage ? "active" : ""}`, "class")}${addAttribute(page === currentPage ? "page" : void 0, "aria-current")} data-astro-cid-d776pwuy>${page}</a>`)}</div>${currentPage < totalPages ? renderTemplate`<a${addAttribute(getPageUrl(currentPage + 1), "href")} class="pagination-btn pagination-next" aria-label="Next page" data-astro-cid-d776pwuy><span data-astro-cid-d776pwuy>Next</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-d776pwuy><polyline points="9 18 15 12 9 6" data-astro-cid-d776pwuy></polyline></svg></a>` : renderTemplate`<span class="pagination-btn pagination-next disabled" aria-disabled="true" data-astro-cid-d776pwuy><span data-astro-cid-d776pwuy>Next</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-d776pwuy><polyline points="9 18 15 12 9 6" data-astro-cid-d776pwuy></polyline></svg></span>`}</nav>`}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, slug, description, publishDate, tags = [] } = Astro2.props;
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "href": `/writing/${slug}`, "class": "article-card" }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "ForwardLink", $$ForwardLink, { "text": "Read article" })} `, "description": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "description" }, { "default": ($$result3) => renderTemplate`${description}` })}`, "meta": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "meta" }, { "default": ($$result3) => renderTemplate`${formatDate(publishDate)}` })}`, "tags": ($$result2) => renderTemplate`${tags.length > 0 && renderTemplate`${maybeRenderHead()}<div class="tags-list"> ${tags.map((tag) => renderTemplate`<span class="tag">${tag}</span>`)} </div>`}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${title}` })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ArticleCard.astro", void 0);

const $$Astro = createAstro("https://example.com");
const getStaticPaths = async () => {
  const postsPerPage = 5;
  const allArticles = await getCollection("writing", ({ data }) => {
    return data.draft === false;
  });
  const sortedArticles = allArticles.sort((a, b) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
  const totalPages = Math.ceil(sortedArticles.length / postsPerPage);
  return Array.from({ length: totalPages }, (_, i) => {
    const page = i + 1;
    const start = i * postsPerPage;
    const end = start + postsPerPage;
    return {
      params: { page: page === 1 ? void 0 : String(page) },
      props: {
        articles: sortedArticles.slice(start, end),
        currentPage: page,
        totalPages,
        totalArticles: sortedArticles.length
      }
    };
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { articles, currentPage, totalPages, totalArticles } = Astro2.props;
  const postsPerPage = 5;
  const pageTitle = currentPage === 1 ? pagesConfig.writing.title : `${pagesConfig.writing.title} - Page ${currentPage}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container"> <header class="page-header"> <h1 class="page-title">${pagesConfig.writing.heading}</h1> <p class="page-intro"> ${pagesConfig.writing.intro} </p> ${renderComponent($$result2, "PageStats", $$PageStats, { "text": totalPages > 1 ? `Showing ${(currentPage - 1) * postsPerPage + 1}\u2013${Math.min(currentPage * postsPerPage, totalArticles)} of ${totalArticles} articles` : `${totalArticles} articles` })} </header> ${articles.length > 0 ? renderTemplate`<div class="card-list"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": article.data.title, "slug": article.id, "description": article.data.description, "publishDate": article.data.publishDate, "tags": article.data.tags })}`)} </div>` : renderTemplate`<p class="empty-state">No articles published yet.</p>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/writing" })} </main> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pageTitle, "description": pagesConfig.writing.description, "type": "website" })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/writing/[...page].astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/writing/[...page].astro";
const $$url = "/writing/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
