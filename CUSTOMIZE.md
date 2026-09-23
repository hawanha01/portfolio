# Quick customization

## Replace the portrait

Replace:

`public/muhammad-hamza-senior-software-engineer.webp`

Keep the same filename (it's also referenced in the Person structured data in `src/app/layout.tsx`), or update both references if you rename it. A transparent PNG/WebP works best because the hero layers the portrait behind the oversized name.

## Replace the resume

Replace:

`public/Muhammad-Hamza-Resume.pdf`

Keep the same filename so the existing download links continue to work.

## Set the real domain

The production domain is `https://muhammad-hamza.me` and is already the default in `src/data/site.ts`. Copy `.env.template` to `.env.local` (or set the same variables in your hosting provider's dashboard) to make it explicit and to add search engine verification codes:

```bash
cp .env.template .env.local
```

`NEXT_PUBLIC_SITE_URL` drives canonical metadata, Open Graph URLs, sitemap and robots output. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` are needed to verify site ownership in Google Search Console and Bing Webmaster Tools — see `.env.template` for how to get each one.

## Update contact details

Primary locations:

- `src/app/page.tsx`
- `src/components/SiteChrome.tsx`
- `src/components/ContactForm.tsx`
- `src/app/layout.tsx`

## Update projects

Edit:

`src/data/projects.ts`

Project cards and dedicated case-study pages read from the same data source.

## Update employment history

Edit:

`src/data/experience.ts`
