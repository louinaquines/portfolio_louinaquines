import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
import { g as getCollection } from './_astro_content_Bmk3BJ6x.mjs';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$RelatedContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedContent;
  const {
    relatedProjects = [],
    relatedDecisions = [],
    title = "Related"
  } = Astro2.props;
  const allProjects = await getCollection("projects");
  const allDecisions = await getCollection("decisions");
  const projects = relatedProjects.map((slug) => allProjects.find((p) => p.id === slug)).filter((p) => p !== void 0);
  const decisions = relatedDecisions.map((slug) => allDecisions.find((d) => d.id === slug)).filter((d) => d !== void 0);
  const hasRelated = projects.length > 0 || decisions.length > 0;
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short"
    }).format(date);
  }
  return renderTemplate`${hasRelated && renderTemplate`${maybeRenderHead()}<aside class="related-content" data-astro-cid-gggrgnyf><h2 class="related-title" data-astro-cid-gggrgnyf>${title}</h2><div class="related-grid" data-astro-cid-gggrgnyf>${projects.length > 0 && renderTemplate`<div class="related-section" data-astro-cid-gggrgnyf><h3 class="related-section-title" data-astro-cid-gggrgnyf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gggrgnyf><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-astro-cid-gggrgnyf></path></svg>
Case Studies
</h3><ul class="related-list" data-astro-cid-gggrgnyf>${projects.map((project) => renderTemplate`<li data-astro-cid-gggrgnyf><a${addAttribute(`/projects/${project.id}`, "href")} class="related-item" data-astro-cid-gggrgnyf><span class="related-item-meta" data-astro-cid-gggrgnyf>${project.data.role} · ${project.data.year}</span><span class="related-item-title" data-astro-cid-gggrgnyf>${project.data.title}</span></a></li>`)}</ul></div>`}${decisions.length > 0 && renderTemplate`<div class="related-section" data-astro-cid-gggrgnyf><h3 class="related-section-title" data-astro-cid-gggrgnyf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gggrgnyf><circle cx="12" cy="12" r="10" data-astro-cid-gggrgnyf></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" data-astro-cid-gggrgnyf></path><line x1="12" y1="17" x2="12.01" y2="17" data-astro-cid-gggrgnyf></line></svg>
Decisions
</h3><ul class="related-list" data-astro-cid-gggrgnyf>${decisions.map((decision) => renderTemplate`<li data-astro-cid-gggrgnyf><a${addAttribute(`/decisions/${decision.id}`, "href")} class="related-item" data-astro-cid-gggrgnyf><span class="related-item-meta" data-astro-cid-gggrgnyf>${formatDate(decision.data.date)}</span><span class="related-item-title" data-astro-cid-gggrgnyf>${decision.data.title}</span></a></li>`)}</ul></div>`}</div></aside>`}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/RelatedContent.astro", void 0);

export { $$RelatedContent as $ };
