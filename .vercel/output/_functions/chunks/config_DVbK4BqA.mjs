const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
const getEnv = (key, fallback = "") => {
  return Object.assign(__vite_import_meta_env__, { LANG: process.env.LANG })[key] ?? fallback;
};
const siteConfig = {
  /**
   * Site URL (required for sitemap, canonical URLs, OG tags)
   * 
   * Should be the full production URL without trailing slash.
   * Example: 'https://example.com'
   */
  url: getEnv("SITE_URL", "https://example.com"),
  /**
   * Site language (ISO 639-1 code)
   * 
   * Two-letter language code for HTML lang attribute and SEO.
   * Examples: 'en', 'id', 'es', 'fr'
   */
  language: getEnv("SITE_LANGUAGE", "en"),
  /**
   * Site title
   * 
   * Used as fallback when page-specific title is not provided.
   */
  title: getEnv("SITE_TITLE", "Professional Portfolio"),
  /**
   * Site description
   * 
   * Default meta description for SEO and social sharing.
   */
  description: getEnv("SITE_DESCRIPTION", "Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact."),
  /**
   * Author information
   * 
   * Personal details used throughout the site for attribution,
   * contact information, and structured data.
   */
  author: {
    /** Full name */
    name: getEnv("SITE_AUTHOR_NAME", "Loui Naquines"),
    /** Professional title or role */
    title: getEnv("SITE_AUTHOR_TITLE", "Information Technology"),
    /** Short biography or professional summary */
    bio: getEnv("SITE_AUTHOR_BIO", "Engineering leader focused on solving complex technical challenges through thoughtful architecture and pragmatic trade-off analysis."),
    /** Contact email address */
    email: getEnv("SITE_AUTHOR_EMAIL", "hello@example.com"),
    /** Location (optional, empty string to hide) */
    location: getEnv("SITE_AUTHOR_LOCATION", "")
  },
  /**
   * Social media links
   * 
   * Set to empty string to hide a specific platform.
   * Only configured (non-empty) links will be displayed.
   */
  social: {
    /** GitHub profile URL */
    github: getEnv("SOCIAL_GITHUB", ""),
    /** LinkedIn profile URL */
    linkedin: getEnv("SOCIAL_LINKEDIN", ""),
    /** Twitter/X profile URL */
    twitter: getEnv("SOCIAL_TWITTER", ""),
    /** Mastodon profile URL */
    mastodon: getEnv("SOCIAL_MASTODON", ""),
    /** Bluesky profile URL */
    bluesky: getEnv("SOCIAL_BLUESKY", "")
  }};

export { siteConfig as s };
