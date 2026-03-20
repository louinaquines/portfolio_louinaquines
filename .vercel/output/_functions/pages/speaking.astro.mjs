import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import 'clsx';
/* empty css                                    */
import { $ as $$PageStats } from '../chunks/PageStats_BXzstgSx.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmk3BJ6x.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$TalkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TalkCard;
  const {
    title,
    description,
    event,
    eventUrl,
    date,
    location,
    type,
    slides,
    video,
    duration,
    topics = [],
    featured = false
  } = Astro2.props;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long"
  }).format(date);
  const typeLabels = {
    conference: "Conference",
    meetup: "Meetup",
    podcast: "Podcast",
    workshop: "Workshop",
    webinar: "Webinar"
  };
  return renderTemplate`${maybeRenderHead()}<article class="talk-card" data-astro-cid-demfg3nd> ${featured && renderTemplate`<span class="featured-badge" data-astro-cid-demfg3nd> <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-demfg3nd> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-demfg3nd></polygon> </svg>
Featured
</span>`} <div class="talk-meta" data-astro-cid-demfg3nd> <span class="talk-type"${addAttribute(type, "data-type")} data-astro-cid-demfg3nd>${typeLabels[type]}</span> <span class="talk-date" data-astro-cid-demfg3nd>${formattedDate}</span> </div> <h3 class="talk-title" data-astro-cid-demfg3nd>${title}</h3> <p class="talk-description" data-astro-cid-demfg3nd>${description}</p> <div class="talk-event" data-astro-cid-demfg3nd> ${eventUrl ? renderTemplate`<a${addAttribute(eventUrl, "href")} target="_blank" rel="noopener noreferrer" class="event-link" data-astro-cid-demfg3nd> ${event} <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-demfg3nd> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-demfg3nd></path> <polyline points="15 3 21 3 21 9" data-astro-cid-demfg3nd></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-demfg3nd></line> </svg> </a>` : renderTemplate`<span data-astro-cid-demfg3nd>${event}</span>`} <span class="talk-location" data-astro-cid-demfg3nd>· ${location}</span> ${duration && renderTemplate`<span class="talk-duration" data-astro-cid-demfg3nd>· ${duration}</span>`} </div> ${topics.length > 0 && renderTemplate`<div class="tags-list" data-astro-cid-demfg3nd> ${topics.map((topic) => renderTemplate`<span class="tag" data-astro-cid-demfg3nd>${topic}</span>`)} </div>`} ${(slides || video) && renderTemplate`<div class="talk-links" data-astro-cid-demfg3nd> ${slides && renderTemplate`<a${addAttribute(slides, "href")} target="_blank" rel="noopener noreferrer" class="talk-link" data-astro-cid-demfg3nd> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-demfg3nd> <rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-astro-cid-demfg3nd></rect> <line x1="8" y1="21" x2="16" y2="21" data-astro-cid-demfg3nd></line> <line x1="12" y1="17" x2="12" y2="21" data-astro-cid-demfg3nd></line> </svg>
Slides
</a>`} ${video && renderTemplate`<a${addAttribute(video, "href")} target="_blank" rel="noopener noreferrer" class="talk-link" data-astro-cid-demfg3nd> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-demfg3nd> <polygon points="5 3 19 12 5 21 5 3" data-astro-cid-demfg3nd></polygon> </svg>
Video
</a>`} </div>`} </article> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/TalkCard.astro", void 0);

const $$Speaking = createComponent(async ($$result, $$props, $$slots) => {
  const allTalks = await getCollection("speaking");
  const sortedTalks = allTalks.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  const talksByYear = sortedTalks.reduce((acc, talk) => {
    const year = talk.data.date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(talk);
    return acc;
  }, {});
  const years = Object.keys(talksByYear).map(Number).sort((a, b) => b - a);
  const totalTalks = sortedTalks.length;
  const conferenceCount = sortedTalks.filter((t) => t.data.type === "conference").length;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-kfn7b65q": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="page-container" data-astro-cid-kfn7b65q> <header class="page-header" data-astro-cid-kfn7b65q> <h1 class="page-title" data-astro-cid-kfn7b65q>${pagesConfig.speaking.heading}</h1> <p class="page-intro" data-astro-cid-kfn7b65q> ${pagesConfig.speaking.intro} </p> ${renderComponent($$result2, "PageStats", $$PageStats, { "text": `${totalTalks} talks \xB7 ${conferenceCount} conferences`, "data-astro-cid-kfn7b65q": true })} </header> ${years.length > 0 ? renderTemplate`<div class="talks-by-year" data-astro-cid-kfn7b65q> ${years.map((year) => renderTemplate`<section class="year-section" data-astro-cid-kfn7b65q> <h2 class="year-heading" data-astro-cid-kfn7b65q>${year}</h2> <div class="talks-list" data-astro-cid-kfn7b65q> ${talksByYear[year].map((talk) => renderTemplate`${renderComponent($$result2, "TalkCard", $$TalkCard, { "title": talk.data.title, "description": talk.data.description, "event": talk.data.event, "eventUrl": talk.data.eventUrl, "date": talk.data.date, "location": talk.data.location, "type": talk.data.type, "slides": talk.data.slides, "video": talk.data.video, "duration": talk.data.duration, "topics": talk.data.topics, "featured": talk.data.featured, "data-astro-cid-kfn7b65q": true })}`)} </div> </section>`)} </div>` : renderTemplate`<p class="empty-state" data-astro-cid-kfn7b65q>No speaking engagements yet.</p>`} </main>  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.speaking.title, "description": pagesConfig.speaking.description, "type": "website", "data-astro-cid-kfn7b65q": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/speaking.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/speaking.astro";
const $$url = "/speaking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Speaking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
