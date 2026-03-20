import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as addAttribute, F as Fragment } from '../../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../../chunks/SEO_Cl0JGbGY.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_DNM7clt9.mjs';
import { $ as $$BackLink, a as $$ScrollToTop } from '../../chunks/BackLink_BMRIQQeU.mjs';
import { $ as $$RelatedContent } from '../../chunks/RelatedContent_CibQOE2f.mjs';
import 'clsx';
/* empty css                                     */
import { a as getEntry, r as renderEntry, g as getCollection } from '../../chunks/_astro_content_Bmk3BJ6x.mjs';
import { f as formatReadingTime, c as calculateReadingTime } from '../../chunks/readingTime_DLKHYMxC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$ImpactMetrics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImpactMetrics;
  const { metrics } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="impact-metrics" data-astro-cid-llilynjk> ${metrics.map((metric) => renderTemplate`<li class="metric-item" data-astro-cid-llilynjk> <div class="metric-value" data-astro-cid-llilynjk>${metric.value}</div> <div class="metric-label" data-astro-cid-llilynjk>${metric.label}</div> </li>`)} </ul> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ImpactMetrics.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.id }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const project = await getEntry("projects", slug);
  if (!project) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(project);
  const {
    title,
    role,
    year,
    duration,
    teamSize,
    outcomeSummary,
    overview,
    problem,
    constraints,
    approach,
    keyDecisions,
    techStack,
    impact,
    learnings,
    relatedProjects,
    relatedDecisions,
    status
  } = project.data;
  const statusConfig = {
    completed: { label: "Completed", class: "status--completed" },
    ongoing: { label: "Ongoing", class: "status--ongoing" },
    archived: { label: "Archived", class: "status--archived" }
  };
  const statusInfo = statusConfig[status || "completed"];
  const allText = [
    overview,
    problem,
    approach,
    ...constraints,
    ...keyDecisions.map((d) => `${d.decision} ${d.reasoning} ${d.alternatives?.join(" ") || ""}`),
    impact.qualitative,
    ...learnings,
    project.body || ""
  ].join(" ");
  const readingTime = formatReadingTime(calculateReadingTime(allText));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-ovxcmftc": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "type": "Project", "data": {
    title,
    outcomeSummary,
    problem,
    impact: impact.qualitative,
    techStack,
    year
  }, "data-astro-cid-ovxcmftc": true })} ${maybeRenderHead()}<main class="case-study" data-astro-cid-ovxcmftc> <!-- Case Study Header --> <header class="case-study-header" data-astro-cid-ovxcmftc> <div class="header-badges" data-astro-cid-ovxcmftc> ${status && status !== "completed" && renderTemplate`<span${addAttribute(["status-badge", statusInfo.class], "class:list")} data-astro-cid-ovxcmftc> ${statusInfo.label} </span>`} </div> <h1 data-astro-cid-ovxcmftc>${title}</h1> <div class="case-study-meta" data-astro-cid-ovxcmftc> <span class="meta-item" data-astro-cid-ovxcmftc>${role}</span> <span class="meta-separator" data-astro-cid-ovxcmftc>·</span> <span class="meta-item" data-astro-cid-ovxcmftc>${year}</span> ${duration && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ovxcmftc": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-separator" data-astro-cid-ovxcmftc>·</span> <span class="meta-item" data-astro-cid-ovxcmftc>${duration}</span> ` })}`} ${teamSize && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ovxcmftc": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-separator" data-astro-cid-ovxcmftc>·</span> <span class="meta-item" data-astro-cid-ovxcmftc>${teamSize} ${teamSize === 1 ? "person" : "people"}</span> ` })}`} <span class="meta-separator" data-astro-cid-ovxcmftc>·</span> <span class="meta-item" data-astro-cid-ovxcmftc>${readingTime}</span> </div> <p class="outcome-summary" data-astro-cid-ovxcmftc>${outcomeSummary}</p> </header> <!-- Overview Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Overview</h2> <p data-astro-cid-ovxcmftc>${overview}</p> </section> <!-- Problem Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Problem</h2> <p data-astro-cid-ovxcmftc>${problem}</p> </section> <!-- Constraints Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Constraints</h2> <ul class="constraints-list" data-astro-cid-ovxcmftc> ${constraints.map((constraint) => renderTemplate`<li data-astro-cid-ovxcmftc>${constraint}</li>`)} </ul> </section> <!-- Approach Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Approach</h2> <p data-astro-cid-ovxcmftc>${approach}</p> </section> <!-- Key Decisions Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Key Decisions</h2> <div class="decisions-list" data-astro-cid-ovxcmftc> ${keyDecisions.map((decision) => renderTemplate`<div class="decision-item" data-astro-cid-ovxcmftc> <h3 class="decision-title" data-astro-cid-ovxcmftc>${decision.decision}</h3> <div class="decision-reasoning" data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Reasoning:</strong> <p data-astro-cid-ovxcmftc>${decision.reasoning}</p> </div> ${decision.alternatives && decision.alternatives.length > 0 && renderTemplate`<div class="decision-alternatives" data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Alternatives considered:</strong> <ul data-astro-cid-ovxcmftc> ${decision.alternatives.map((alt) => renderTemplate`<li data-astro-cid-ovxcmftc>${alt}</li>`)} </ul> </div>`} </div>`)} </div> </section> <!-- Tech Stack Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Tech Stack</h2> <ul class="tech-stack-list" data-astro-cid-ovxcmftc> ${techStack.map((tech) => renderTemplate`<li data-astro-cid-ovxcmftc>${tech}</li>`)} </ul> </section> <!-- Result/Impact Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Result & Impact</h2>  ${impact.metrics && impact.metrics.length > 0 && renderTemplate`${renderComponent($$result2, "ImpactMetrics", $$ImpactMetrics, { "metrics": impact.metrics, "data-astro-cid-ovxcmftc": true })}`} <p class="impact-qualitative" data-astro-cid-ovxcmftc>${impact.qualitative}</p> </section> <!-- Learnings Section --> <section class="case-study-section" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Learnings</h2> <ul class="learnings-list" data-astro-cid-ovxcmftc> ${learnings.map((learning) => renderTemplate`<li data-astro-cid-ovxcmftc>${learning}</li>`)} </ul> </section> <!-- Additional MDX Content (if any) --> ${Content && renderTemplate`<section class="case-study-content" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-ovxcmftc": true })} </section>`} <!-- Related Content --> ${renderComponent($$result2, "RelatedContent", $$RelatedContent, { "relatedProjects": relatedProjects, "relatedDecisions": relatedDecisions, "data-astro-cid-ovxcmftc": true })} ${renderComponent($$result2, "BackLink", $$BackLink, { "href": "/projects", "text": "All projects", "data-astro-cid-ovxcmftc": true })} </main> ${renderComponent($$result2, "ScrollToTop", $$ScrollToTop, { "data-astro-cid-ovxcmftc": true })}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": `${title} - Case Study`, "description": outcomeSummary, "type": "article", "data-astro-cid-ovxcmftc": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
