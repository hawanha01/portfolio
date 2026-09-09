# Quick customization

## Replace the portrait

Replace:

`public/avatar-placeholder.svg`

Keep the same filename, or update the `src` in `src/app/page.tsx`. A transparent PNG/WebP works best because the hero layers the portrait behind the oversized name.

## Replace the resume

Replace:

`public/Muhammad-Hamza-Resume.pdf`

Keep the same filename so the existing download links continue to work.

## Set the real domain

Set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This updates canonical metadata, Open Graph URLs, sitemap and robots output.

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
