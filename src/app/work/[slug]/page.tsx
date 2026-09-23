import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlowText } from "@/components/GlowText";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projectBySlug, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      siteName: "Muhammad Hamza",
      locale: "en_US",
      title: `${project.name} — Muhammad Hamza`,
      description: project.summary,
      images: project.screenshot
        ? [{ url: project.screenshot, alt: `${project.name} — Muhammad Hamza case study` }]
        : [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Muhammad Hamza — Senior Software Engineer" }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Muhammad Hamza`,
      description: project.summary,
      images: [project.screenshot ?? "/og-card.svg"]
    }
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="case-page" id="main-content">
      <section className="section-pad case-hero">
        <Link className="case-back" href="/#work">←&#xFE0E; Back to selected work</Link>
        <div className="case-hero-grid">
          <div>
            <div className="section-label"><span className="green-dot" /> {project.eyebrow}</div>
            <h1>{project.name}</h1>
            <p className="case-summary">{project.summary}</p>
            <div className="project-tags case-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <aside className="case-meta">
            <div><span>Company</span><strong>{project.company}</strong></div>
            <div><span>Role</span><strong>{project.role}</strong></div>
            <div><span>Period</span><strong>{project.period}</strong></div>
            <div className="case-links">
              {(project.links ?? [{ label: "Visit public website", url: project.liveUrl }]).map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗&#xFE0E;</a>
              ))}
            </div>
          </aside>
        </div>
        <ProjectVisual visual={project.visual} name={project.name} hero screenshot={project.screenshot} />
      </section>

      <section className="section-pad case-metrics" aria-label={`${project.name} selected metrics`}>
        {project.metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`} data-reveal>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section-pad case-story">
        <article className="case-story-block" data-reveal>
          <span>01 / Context</span>
          <h2><GlowText text="What I walked into" /></h2>
          <p>{project.overview}</p>
        </article>
        <article className="case-story-block" data-reveal>
          <span>02 / Engineering problem</span>
          <h2><GlowText text="What had to be solved" /></h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      <section className="section-pad case-contribution">
        <div className="section-label" data-reveal><span className="green-dot" /> My contribution</div>
        <h2 className="display-title" data-reveal><GlowText text="THE WORK I OWNED" /></h2>
        <div className="contribution-list">
          {project.contribution.map((item, itemIndex) => (
            <div className="contribution-row" key={item} data-reveal>
              <span>{String(itemIndex + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad architecture-section">
        <div className="section-label" data-reveal><span className="green-dot" /> System view</div>
        <h2 className="display-title" data-reveal><GlowText text="HOW THE PIECES CONNECT" /></h2>
        <div className="architecture-canvas" data-reveal>
          <div className="architecture-line" aria-hidden="true" />
          {project.architecture.map((node, nodeIndex) => (
            <div
              className="architecture-node"
              key={node}
              style={{ "--node-index": nodeIndex } as React.CSSProperties}
            >
              <span>{String(nodeIndex + 1).padStart(2, "0")}</span>
              <strong>{node}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad case-outcome">
        <div className="case-outcome-card" data-reveal>
          <span>Outcome</span>
          <p>{project.outcome}</p>
        </div>
      </section>

      <section className="section-pad case-stack">
        <div className="section-label" data-reveal><span className="green-dot" /> Technology</div>
        <div className="stack-grid" data-reveal>
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      <section className="section-pad next-project">
        <span>Next case study</span>
        <Link href={`/work/${nextProject.slug}`}>
          <strong>{nextProject.name}</strong>
          <span>↗&#xFE0E;</span>
        </Link>
      </section>
    </main>
  );
}
