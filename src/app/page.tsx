import Link from "next/link";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { recommendations } from "@/data/recommendations";
import { ContactForm } from "@/components/ContactForm";
import { GlowText } from "@/components/GlowText";
import { HeroLetters } from "@/components/HeroLetters";
import { MetricCounter } from "@/components/MetricCounter";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ServiceRows } from "@/components/ServiceRows";

const services = [
  {
    title: "Backend Engineering",
    copy: "NestJS and Node.js services, data models, authentication, background work and APIs built for production.",
    image: "/services/backend.jpg"
  },
  {
    title: "Full-Stack Development",
    copy: "Features carried from database and API contracts through React, Next.js or Vue integration when the product needs end-to-end ownership.",
    image: "/services/fullstack.jpg"
  },
  {
    title: "System Architecture",
    copy: "Schemas, module boundaries, queues and workflows shaped around the actual product instead of abstract patterns.",
    image: "/services/architecture.jpg"
  },
  {
    title: "API & Integration Engineering",
    copy: "REST APIs and third-party integrations including Veriff, Pusher, Knock, Firebase, Microsoft Teams and Azure Service Bus.",
    image: "/services/integration.jpg"
  },
  {
    title: "Performance & Data Engineering",
    copy: "Query work, search, pagination, background processing and high-volume migrations when response time and data volume matter.",
    image: "/services/performance.jpg"
  }
];

const skills = [
  "TypeScript", "Node.js", "NestJS", "PostgreSQL", "React", "Next.js", "Vue.js", "Redis", "Kafka", "BullMQ",
  "Prisma", "TypeORM", "Sequelize", "MongoDB", "MySQL", "Elasticsearch", "Ruby on Rails", "Firebase", "Pusher",
  "Knock", "Veriff", "Azure Service Bus", "Docker", "Jest", "RSpec", "REST APIs", "WebSockets", "System Design"
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-shell section-pad" id="top">
        <div className="hero-frame" data-hero>
          <div className="hero-topline">
            <span className="hero-status"><span className="green-dot" /> Open to opportunities</span>
          </div>

          <div className="hero-portrait-wrap" aria-hidden="true">
            <div className="portrait-halo" />
            <img className="hero-portrait" src="/hero-portrait.jpg" alt="" />
          </div>

          <p className="hero-kicker">Building Production Systems From Architecture to Launch</p>
          <h1 className="hero-name" aria-label="Muhammad Hamza">
            <span><HeroLetters text="MUHAMMAD" /></span>
            <span><HeroLetters text="HAMZA" startIndex={8} /></span>
          </h1>

          <div className="hero-signature">Muhammad Hamza</div>
          <div className="hero-year" aria-hidden="true"><span>20</span><span>26</span></div>

          <div className="hero-bottomline">
            <p>Senior Software Engineer · Lahore, Pakistan</p>
            <div className="hero-actions">
              <a className="text-link" href="#work">Selected work ↘</a>
              <a className="text-link" href="/Muhammad-Hamza-Resume.pdf" download>Resume ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad about-section" id="about">
        <div className="section-label" data-reveal><span className="green-dot" /> About me</div>
        <p className="about-copy" data-reveal>
          <GlowText text="I build backend-heavy products that need to keep working when the data gets messy, the user count grows, or multiple systems have to stay in sync. Over 4+ years I've worked across payroll, UK government education, combat sports, recruitment and legacy migrations. My strongest work is Node.js, NestJS, PostgreSQL, APIs, queues, integrations and the engineering decisions around them. I can also carry features through the frontend when needed." />
        </p>
        <div className="about-foot" data-reveal>
          <span>BS Software Engineering · PUCIT, University of the Punjab · 2018-2022</span>
          <span>Outside work: esports</span>
        </div>
      </section>

      <section className="section-pad stats-section" aria-label="Selected engineering metrics">
        <div className="metric-grid">
          <MetricCounter value="4+" label="Years in software engineering" />
          <MetricCounter value="26K+" label="Real fighter profiles imported" />
          <MetricCounter value="23K+" label="Legacy users migrated" />
          <MetricCounter value="5-10+ min → seconds" label="Payroll forecasting operation" compact />
          <MetricCounter value="~120 GB" label="Production database scale observed" />
        </div>
      </section>

      <section className="section-pad services-section" id="services">
        <div className="section-label" data-reveal><span className="green-dot" /> Services</div>
        <h2 className="display-title" data-reveal><GlowText text="ENGINEERING THAT HOLDS UP IN PRODUCTION" /></h2>
        <ServiceRows services={services} />
      </section>

      <section className="section-pad work-section" id="work">
        <div className="section-label" data-reveal><span className="green-dot" /> Selected work</div>
        <h2 className="display-title" data-reveal><GlowText text="CRAFTED IN PRODUCTION" /></h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`project-card project-card-${index + 1}`}
              data-reveal
              aria-label={`View ${project.name} case study`}
            >
              <div className="project-float">
                <ProjectVisual visual={project.visual} name={project.name} screenshot={project.screenshot} />
              </div>
              <h3 className="project-card-name">{project.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad experience-section" id="experience">
        <div className="section-label" data-reveal><span className="green-dot" /> Experience</div>
        <h2 className="display-title" data-reveal><GlowText text="FROM MAINTAINING SYSTEMS TO LEADING DELIVERY" /></h2>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-row" key={`${item.company}-${item.role}`} data-reveal>
              <div className="experience-index">0{index + 1}</div>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <div className="experience-body">
                <p>{item.body}</p>
                <span>{item.stack}</span>
              </div>
              <div className="experience-time">
                <strong>{item.period}</strong>
                <span>{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad skills-section" id="skills">
        <div className="section-label" data-reveal><span className="green-dot" /> Skills</div>
        <h2 className="display-title" data-reveal><GlowText text="TOOLS I USE TO SHIP THE WORK" /></h2>
        <div className="skill-marquee" data-reveal aria-label="Technology stack">
          <div className="skill-track">
            {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
          </div>
        </div>
        <div className="skill-groups" data-reveal>
          <div><span>Core</span><p>TypeScript · Node.js · NestJS · PostgreSQL · REST APIs</p></div>
          <div><span>Distributed & async</span><p>Kafka · BullMQ · Redis · Azure Service Bus · Sidekiq</p></div>
          <div><span>Full-stack</span><p>React · Next.js · Vue.js · Prisma · TypeORM · Sequelize</p></div>
          <div><span>Reliability</span><p>Jest · RSpec · Capybara · Docker · monitoring · code review</p></div>
        </div>
      </section>

      <section className="section-pad testimonial-section" id="testimonial">
        <div className="section-label" data-reveal><span className="green-dot" /> Recommendations</div>
        <h2 className="display-title" data-reveal><GlowText text="TRUSTED UNDER PRESSURE" /></h2>
        <div className="testimonial-list">
          {recommendations.map((rec) => (
            <div className="testimonial-card" data-reveal key={rec.name}>
              <div className="quote-mark">“</div>
              <blockquote>
                <GlowText text={rec.quote} />
              </blockquote>
              <div className="testimonial-author">
                <img className="author-avatar" src={rec.photo} alt={rec.name} loading="lazy" />
                <div><strong>{rec.name}</strong><span>{rec.title}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad contact-section" id="contact">
        <div className="section-label" data-reveal><span className="green-dot" /> Contact</div>
        <h2 className="contact-title" data-reveal><GlowText text="START A CONVERSATION" /></h2>
        <div className="contact-grid">
          <div className="contact-copy" data-reveal>
            <p>Want to collaborate, discuss a project, or connect about software engineering? Drop me a message and I&apos;ll get back to you.</p>
            <div className="contact-links">
              <a href="mailto:dev.hamza.010@gmail.com"><span>Email</span>dev.hamza.010@gmail.com ↗</a>
              <a href="https://www.linkedin.com/in/hawanha1/" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/hawanha1 ↗</a>
              <span className="contact-location"><span>Location</span>Lahore, Pakistan</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-pad">
        <div><strong>Muhammad Hamza</strong><span>Senior Software Engineer</span></div>
        <p>Backend-heavy systems, built to make it to production.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
