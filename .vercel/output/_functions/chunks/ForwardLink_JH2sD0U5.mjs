import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, g as renderSlot, r as renderTemplate, d as renderComponent } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://example.com");
const $$BaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseCard;
  const { href, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["base-card", className], "class:list")} data-astro-cid-rg77qmqp> ${renderSlot($$result, $$slots["badge"])} <span class="card-meta" data-astro-cid-rg77qmqp>${renderSlot($$result, $$slots["meta"])}</span> <span class="card-title" data-astro-cid-rg77qmqp>${renderSlot($$result, $$slots["title"])}</span> <span class="card-description" data-astro-cid-rg77qmqp>${renderSlot($$result, $$slots["description"])}</span> ${renderSlot($$result, $$slots["tags"])} ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/BaseCard.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ForwardLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ForwardLink;
  const { text, href, variant = "accent", class: className } = Astro2.props;
  const Tag = href ? "a" : "span";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class:list": ["arrow-link", `arrow-link--${variant}`, className], "data-astro-cid-tbd6yk5t": true }, { "default": ($$result2) => renderTemplate`${text}${maybeRenderHead()}<svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-tbd6yk5t> <path d="M15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289C13.9024 5.68342 13.9024 6.31658 14.2929 6.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L14.2929 17.2929C13.9024 17.6834 13.9024 18.3166 14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.7071 5.29289Z" data-astro-cid-tbd6yk5t></path> </svg> ` })} `;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/ForwardLink.astro", void 0);

export { $$BaseCard as $, $$ForwardLink as a };
