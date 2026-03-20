import { e as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$BaseCard, a as $$ForwardLink } from '../chunks/ForwardLink_JH2sD0U5.mjs';
/* empty css                                 */
import { $ as $$PageStats } from '../chunks/PageStats_BXzstgSx.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, slug, outcomeSummary, role, year, techStack = [], featured = false, status = "completed" } = Astro2.props;
  const displayTech = techStack.slice(0, 4);
  const hasMoreTech = techStack.length > 4;
  const statusConfig = {
    completed: { label: "Completed", class: "status--completed" },
    ongoing: { label: "Ongoing", class: "status--ongoing" },
    archived: { label: "Archived", class: "status--archived" }
  };
  const statusInfo = statusConfig[status];
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "href": `/projects/${slug}`, "class": "project-card", "data-astro-cid-mspuyifq": true }, { "badge": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="card-badges" data-astro-cid-mspuyifq> ${featured && renderTemplate`<span class="featured-badge" data-astro-cid-mspuyifq> <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mspuyifq> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-mspuyifq></polygon> </svg>
Featured
</span>`} ${status !== "completed" && renderTemplate`<span${addAttribute(["status-badge", statusInfo.class], "class:list")} data-astro-cid-mspuyifq> ${statusInfo.label} </span>`} </div>`, "default": ($$result2) => renderTemplate`     ${renderComponent($$result2, "ForwardLink", $$ForwardLink, { "text": "View case study", "data-astro-cid-mspuyifq": true })} `, "description": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "description" }, { "default": ($$result3) => renderTemplate`${outcomeSummary}` })}`, "meta": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "meta" }, { "default": ($$result3) => renderTemplate`${role} · ${year}` })}`, "tags": ($$result2) => renderTemplate`${displayTech.length > 0 && renderTemplate`<div class="tags-list" data-astro-cid-mspuyifq> ${displayTech.map((tech) => renderTemplate`<span class="tag" data-astro-cid-mspuyifq>${tech}</span>`)} ${hasMoreTech && renderTemplate`<span class="tag-more" data-astro-cid-mspuyifq>+${techStack.length - 4}</span>`} </div>`}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${title}` })}` })} `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ProjectCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const sortedProjects = allProjects.sort((a, b) => {
    if (a.data.order !== void 0 && b.data.order !== void 0) {
      return a.data.order - b.data.order;
    }
    if (a.data.order !== void 0) return -1;
    if (b.data.order !== void 0) return 1;
    return b.data.year - a.data.year;
  });
  const totalProjects = sortedProjects.length;
  const featuredCount = sortedProjects.filter((p) => p.data.featured).length;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container"> <header class="page-header"> <h1 class="page-title">${pagesConfig.projects.heading}</h1> <p class="page-intro"> ${pagesConfig.projects.intro} </p> ${renderComponent($$result2, "PageStats", $$PageStats, { "text": `${totalProjects} projects \xB7 ${featuredCount} featured` })} </header> ${sortedProjects.length > 0 ? renderTemplate`<div class="card-list"> ${sortedProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.data.title, "slug": project.id, "outcomeSummary": project.data.outcomeSummary, "role": project.data.role, "year": project.data.year, "techStack": project.data.techStack, "featured": project.data.featured, "status": project.data.status })}`)} </div>` : renderTemplate`<p class="empty-state">No projects available yet.</p>`} </main> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.projects.title, "description": pagesConfig.projects.description, "type": "website" })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
