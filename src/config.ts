/**
 * Site-wide constants. Until the web app is served at revx.website/app (doc/domain_setup.md),
 * buttons link straight to its current deployment. When the /app proxy goes live, change
 * the default to '/app' or set PUBLIC_APP_URL.
 */
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL || 'https://rev-x-dev-build.vercel.app';

export const SITE = {
  name: 'RevX',
  tagline: 'The mechanic at your door.',
  // "RevX" alone is a crossbow and an ad-tech firm in AI answers; always pair it with the category.
  title: 'RevX: AI mechanic and mobile mechanics in San Diego',
  description:
    'RevX is a San Diego car-repair marketplace. Describe the problem, get an AI mechanic\'s read on it, and match with a mobile mechanic who wants the job.',
};
