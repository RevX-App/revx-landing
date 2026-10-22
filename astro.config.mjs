// @ts-check
import { defineConfig } from 'astro/config';

// Canonical, OG and sitemap URLs. revx.website is the production domain; previews
// and local builds also point canonicals there, which is what search engines should see.
const site = process.env.SITE_URL ?? 'https://revx.website';

// Slash-free URLs (/privacy, not /privacy/) so the /app proxy to the web app passes paths through untouched.
export default defineConfig({ site, trailingSlash: 'never', build: { format: 'file' } });
