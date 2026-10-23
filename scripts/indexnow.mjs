// Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the live sitemap.
// Run after a production deploy is live: npm run indexnow
const HOST = 'revx.website';
const KEY = '2797a5c90e3fdd377db0113b11be7661'; // must match public/<KEY>.txt

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('No URLs found in sitemap');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow ${res.status} for ${urlList.length} URL(s)`, await res.text());
if (!res.ok) process.exit(1);
