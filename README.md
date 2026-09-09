# Muhammad Hamza — Senior Software Engineer portfolio

A performance-first portfolio built from the AUTON Framer template direction supplied by Muhammad Hamza. The visual structure, dark palette, oversized editorial typography, portrait layering, floating navigation and interaction rhythm follow that reference, while the code and portfolio content are original.

## Stack

- Next.js 16 / React 19 / TypeScript
- Plain CSS design system (no runtime CSS framework)
- Browser-native CSS animations and `requestAnimationFrame`
- Static export for low hosting/runtime overhead
- Reduced-motion and coarse-pointer fallbacks

The implementation intentionally avoids a large animation library. Motion is limited mainly to `transform` and `opacity` so it stays compositor-friendly.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js writes the static site to `out/`.

### Vercel

Import the repository into Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final domain when one is available.

### Docker

```bash
docker build -t muhammad-hamza-portfolio .
docker run --rm -p 8080:80 muhammad-hamza-portfolio
```

Open `http://localhost:8080`.

## Routes

- `/`
- `/work/fightbook`
- `/work/takafo`
- `/work/justworks`
- `/work/dfe-npq`
- `/work/spsg`

## Public-safe content

The case studies intentionally avoid private dashboards, internal API routes, credentials, candidate information and confidential screenshots. Only public project URLs and the engineering facts supplied for the portfolio are used.

## Replace later

See `CUSTOMIZE.md` for the portrait, resume, domain and contact details.

## QA note

The source was syntax-transpiled file-by-file and the static CSS/HTML preview was checked in the build environment. Package installation from the npm registry timed out in this sandbox, so a full `next build` could not be executed here. Run `npm install && npm run build` after download to perform the final dependency/runtime check.
