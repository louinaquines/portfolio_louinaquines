import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../chunks/astro/server_ZuFn58mt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SEO } from '../chunks/SEO_Cl0JGbGY.mjs';
import { s as siteConfig } from '../chunks/config_DVbK4BqA.mjs';
import { p as pagesConfig } from '../chunks/pages.config_Bbrruyxx.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = Object.entries(siteConfig.social).filter(([_, url]) => url).map(([platform, url]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1),
    url
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="contact-page" data-astro-cid-uw5kdbxl> <!-- Zone 1: Primary Intent --> <section class="primary-zone" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>${pagesConfig.contact.heading}</h1> <a${addAttribute(`mailto:${siteConfig.author.email}`, "href")} class="email-link" data-astro-cid-uw5kdbxl> ${siteConfig.author.email} </a> <p class="context" data-astro-cid-uw5kdbxl>
I read every email. Expect a reply within a few days.
</p> </section> <!-- Zone 2: Secondary (Social) --> ${socialLinks.length > 0 && renderTemplate`<section class="secondary-zone" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Elsewhere</h2> <div class="social-links" data-astro-cid-uw5kdbxl> ${socialLinks.map((link, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-uw5kdbxl> ${link.platform} </a> ${index < socialLinks.length - 1 && renderTemplate`<span class="separator" data-astro-cid-uw5kdbxl>·</span>`}` })}`)} </div> </section>`} </main>  `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "title": pagesConfig.contact.title, "description": pagesConfig.contact.description, "type": "website", "data-astro-cid-uw5kdbxl": true })}` })}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/pages/contact.astro", void 0);

const $$file = "C:/Users/laila/MyNewPortfolio/case/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
