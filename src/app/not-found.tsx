import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-pad not-found-page">
      <span>404</span>
      <h1>That page is not part of the portfolio.</h1>
      <Link href="/">Return home ↗</Link>
    </main>
  );
}
