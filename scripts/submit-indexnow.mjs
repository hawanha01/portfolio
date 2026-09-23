const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://muhammad-hamza.me").replace(/\/$/, "");
const key = "97fe1fb056607357d356f84bdf5a269a";

const sitemapRes = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not fetch sitemap (status ${sitemapRes.status})`);
  process.exit(1);
}
const sitemapXml = await sitemapRes.text();
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0) {
  console.error("No URLs found in sitemap");
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList
  })
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URLs (status ${response.status})`);
  urlList.forEach((url) => console.log(` - ${url}`));
} else {
  console.error(`IndexNow: submission failed (status ${response.status})`);
  console.error(await response.text());
  process.exit(1);
}
