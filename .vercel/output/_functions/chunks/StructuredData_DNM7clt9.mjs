import { e as createAstro, c as createComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_ZuFn58mt.mjs';
import 'piccolore';
import 'clsx';
import { s as siteConfig } from './config_DVbK4BqA.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const { type, data = {} } = Astro2.props;
  const siteURL = siteConfig.url.endsWith("/") ? siteConfig.url.slice(0, -1) : siteConfig.url;
  const socialLinks = Object.values(siteConfig.social).filter(Boolean);
  function generateStructuredData(type2, data2) {
    const baseContext = "https://schema.org";
    switch (type2) {
      case "WebSite":
        return {
          "@context": baseContext,
          "@type": "WebSite",
          name: data2.name || siteConfig.title,
          description: data2.description || siteConfig.description,
          url: data2.url || siteURL,
          inLanguage: siteConfig.language,
          author: {
            "@type": "Person",
            name: siteConfig.author.name,
            jobTitle: siteConfig.author.title,
            url: siteURL
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteURL}/writing?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };
      case "Project":
        return {
          "@context": baseContext,
          "@type": "CreativeWork",
          name: data2.title,
          description: data2.description || data2.outcomeSummary,
          author: {
            "@type": "Person",
            name: data2.authorName || siteConfig.author.name
          },
          dateCreated: data2.year ? `${data2.year}-01-01` : void 0,
          keywords: data2.techStack?.join(", "),
          about: data2.problem,
          result: data2.impact
        };
      case "Article":
        return {
          "@context": baseContext,
          "@type": "Article",
          headline: data2.title,
          description: data2.description,
          author: {
            "@type": "Person",
            name: data2.authorName || siteConfig.author.name,
            url: siteURL
          },
          datePublished: data2.publishDate?.toISOString(),
          dateModified: data2.updatedDate?.toISOString() || data2.publishDate?.toISOString(),
          image: data2.image || `${siteURL}/og-image.png`,
          publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteURL
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data2.url || Astro2.url.href
          },
          keywords: data2.tags?.join(", "),
          inLanguage: siteConfig.language
        };
      case "Person":
        return {
          "@context": baseContext,
          "@type": "Person",
          name: data2.name || siteConfig.author.name,
          jobTitle: data2.jobTitle || siteConfig.author.title,
          description: data2.description || siteConfig.author.bio,
          url: data2.url || siteURL,
          sameAs: data2.socialLinks || socialLinks,
          email: data2.email || siteConfig.author.email,
          image: data2.image,
          knowsAbout: data2.skills || []
        };
      case "BreadcrumbList":
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          itemListElement: data2.items?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.startsWith("http") ? item.url : `${siteURL}${item.url}`
          }))
        };
      default:
        return null;
    }
  }
  const structuredData = generateStructuredData(type, data);
  function cleanObject(obj) {
    if (obj === null || obj === void 0) return null;
    if (typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(cleanObject).filter((item) => item !== void 0);
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== void 0 && value !== null) {
        cleaned[key] = cleanObject(value);
      }
    }
    return cleaned;
  }
  const cleanedData = cleanObject(structuredData);
  return renderTemplate`${cleanedData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(cleanedData, null, 2)))}`;
}, "C:/Users/laila/MyNewPortfolio/case/src/components/StructuredData.astro", void 0);

export { $$StructuredData as $ };
