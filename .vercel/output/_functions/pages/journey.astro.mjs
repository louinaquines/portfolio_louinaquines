import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, r as renderTemplate, d as renderComponent, F as Fragment, g as renderSlot } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
/* empty css                                   */
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$TimelineEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimelineEntry;
  const { date, title, type, description, skills, hasContent = false } = Astro2.props;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long"
  }).format(date);
  const typeLabels = {
    milestone: "Milestone",
    learning: "Learning",
    transition: "Transition"
  };
  const entryId = `journey-${date.getTime()}`;
  return renderTemplate`${maybeRenderHead()}<article class="timeline-entry" data-astro-cid-vytfprel> <div class="timeline-marker" data-astro-cid-vytfprel> <div class="timeline-dot"${addAttribute(type, "data-type")} data-astro-cid-vytfprel></div> <div class="timeline-line" data-astro-cid-vytfprel></div> </div> <div class="timeline-content" data-astro-cid-vytfprel> <div class="timeline-header" data-astro-cid-vytfprel> <time class="timeline-date"${addAttribute(date.toISOString(), "datetime")} data-astro-cid-vytfprel> ${formattedDate} </time> <span class="timeline-type"${addAttribute(type, "data-type")} data-astro-cid-vytfprel> ${typeLabels[type]} </span> </div> <h3 class="timeline-title" data-astro-cid-vytfprel>${title}</h3> <p class="timeline-description" data-astro-cid-vytfprel>${description}</p> ${skills && skills.length > 0 && renderTemplate`<div class="timeline-skills" data-astro-cid-vytfprel> <span class="skills-label" data-astro-cid-vytfprel>Skills:</span> <ul class="skills-list" data-astro-cid-vytfprel> ${skills.map((skill) => renderTemplate`<li class="skill-tag" data-astro-cid-vytfprel>${skill}</li>`)} </ul> </div>`} ${hasContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vytfprel": true }, { "default": ($$result2) => renderTemplate` <button class="expand-toggle" aria-expanded="false"${addAttribute(entryId, "aria-controls")} type="button" data-astro-cid-vytfprel> <span class="expand-text" data-astro-cid-vytfprel>Read more</span> <svg class="expand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-vytfprel> <polyline points="6 9 12 15 18 9" data-astro-cid-vytfprel></polyline> </svg> </button> <div${addAttribute(entryId, "id")} class="timeline-body" aria-hidden="true" data-astro-cid-vytfprel> <div class="timeline-body-content prose" data-astro-cid-vytfprel> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`} </div> </article>  ${renderScript($$result, "C:/Users/laila/MyNewPortfolio/case/src/components/TimelineEntry.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/TimelineEntry.astro", void 0);

const $$Journey = createComponent(async ($$result, $$props, $$slots) => {
  const allJourneyEntries = await getCollection("journey");
  const sortedJourneyEntries = allJourneyEntries.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  const entriesWithContent = await Promise.all(
    sortedJourneyEntries.map(async (entry) => {
      const { Content } = await renderEntry(entry);
      const hasContent = Boolean(entry.body && entry.body.trim().length > 0);
      return { entry, Content, hasContent };
    })
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-4362f7na": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container" data-astro-cid-4362f7na> <header class="page-header" data-astro-cid-4362f7na> <h1 class="page-title" data-astro-cid-4362f7na>${pagesConfig.journey.heading}</h1> <p class="page-intro" data-astro-cid-4362f7na> ${pagesConfig.journey.intro} </p> </header> ${entriesWithContent.length > 0 ? renderTemplate`<div class="journey-timeline" data-astro-cid-4362f7na> ${entriesWithContent.map(({ entry, Content, hasContent }) => renderTemplate`${renderComponent($$result2, "TimelineEntry", $$TimelineEntry, { "date": entry.data.date, "title": entry.data.title, "type": entry.data.type, "description": entry.data.description, "skills": entry.data.skills, "hasContent": hasContent, "data-astro-cid-4362f7na": true }, { "default": async ($$result3) => renderTemplate`${hasContent && renderTemplate`${renderComponent($$result3, "Content", Content, { "data-astro-cid-4362f7na": true })}`}` })}`)} </div>` : renderTemplate`<p class="empty-state" data-astro-cid-4362f7na>No journey entries yet.</p>`} </main>  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.journey.title, "description": pagesConfig.journey.description, "type": "website", "data-astro-cid-4362f7na": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/journey.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/journey.astro";
const $$url = "/journey";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Journey,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
