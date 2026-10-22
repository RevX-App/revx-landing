/**
 * Site-wide constants. APP_URL comes from PUBLIC_APP_URL (set it in the Vercel
 * project) and stays a placeholder until the public web app URL is final
 * (decision D7 in doc/landing_site_plan.md).
 */
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL || '#app-url-pending';

export const SITE = {
  name: 'RevX',
  tagline: 'The mechanic at your door.',
  // "RevX" alone is a crossbow and an ad-tech firm in AI answers; always pair it with the category.
  title: 'RevX: AI mechanic and mobile mechanics in San Diego',
  description:
    'RevX is a San Diego car-repair marketplace. Describe the problem, get an AI mechanic\'s read on it, and match with a mobile mechanic who wants the job.',
};
