import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Hamza — Senior Software Engineer",
    template: "%s — Muhammad Hamza"
  },
  description:
    "Senior Software Engineer in Lahore, Pakistan. Backend-heavy full-stack engineer with 4+ years of experience building production systems with Node.js, NestJS, TypeScript and PostgreSQL.",
  keywords: [
    "Muhammad Hamza",
    "Senior Software Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Lahore"
  ],
  authors: [{ name: "Muhammad Hamza" }],
  creator: "Muhammad Hamza",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Muhammad Hamza — Senior Software Engineer",
    description: "Backend-heavy production engineering across architecture, APIs, databases, integrations and delivery.",
    images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Muhammad Hamza — Senior Software Engineer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza — Senior Software Engineer",
    description: "Backend-heavy production engineering across architecture, APIs, databases, integrations and delivery.",
    images: ["/og-card.svg"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080808"
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Hamza",
  jobTitle: "Senior Software Engineer",
  url: siteUrl,
  email: "mailto:dev.hamza.010@gmail.com",
  sameAs: ["https://www.linkedin.com/in/hawanha1/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Punjab University College of Information Technology"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteChrome />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
