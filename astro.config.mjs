// @ts-check
import { defineConfig } from 'astro/config';

// Canonical, OG and sitemap URLs. Set SITE_URL once a custom domain exists;
// until then Vercel's production host is used, so no placeholder domain ships.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({ site });
