export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  period: string;
  company: string;
  role: string;
  liveUrl: string;
  liveLabel: string;
  links?: { label: string; url: string }[];
  visual: "fightbook" | "takafo" | "justworks" | "dfe" | "spsg";
  screenshot?: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  overview: string;
  challenge: string;
  contribution: string[];
  outcome: string;
  stack: string[];
  architecture: string[];
};

export const projects: Project[] = [
  {
    slug: "fightbook",
    name: "Fightbook",
    eyebrow: "Combat sports platform",
    summary:
      "A multi-role combat sports platform for fighters, managers, promoters, service providers, fans and admins, taken from the first commit to production.",
    period: "Dec 2024 - Aug 2025",
    company: "Ilsa Interactive",
    role: "Backend Engineer · led technical delivery",
    liveUrl: "https://fightbook.com/",
    liveLabel: "fightbook.com",
    links: [
      { label: "Public site", url: "https://fightbook.com/" },
      { label: "Application", url: "https://app.fightbook.com/" }
    ],
    visual: "fightbook",
    screenshot: "/projects/fightbook.webp",
    metrics: [
      { value: "26K+", label: "real fighter profiles imported" },
      { value: "6-7 mo", label: "from first commit to launch" },
      { value: "6", label: "core platform roles" }
    ],
    tags: ["Architecture", "Backend", "Real-time", "Recommendations", "Identity"],
    overview:
      "Fightbook centralizes fighter profiles, fight opportunities, events, managers, promoters, service providers and fans. The backend had to support multiple combat sports, flexible rules, multi-role users and a large imported fighter dataset without turning routine queries into bottlenecks.",
    challenge:
      "Start with a schema that could grow with the product, support different sports, weight classes and fight formats, let one user operate across multiple roles, and still keep list/search workflows predictable as real data arrived.",
    contribution: [
      "Designed the backend schema from the first commit, including flexible sports, weight classes, fight formats and many-to-many fighter/manager relationships.",
      "Imported roughly 26,000 purchased real fighter profiles and built a one-click profile-claim flow backed by Veriff identity verification.",
      "Implemented role-based authorization and in-session role switching for fans, fighters, managers, promoters, service providers and admins.",
      "Built fight posting, challenge workflows and recommendation logic using sport, weight class, gender, record, location and availability.",
      "Built one-to-one and group chat with Pusher presence, used Knock for product/chat notifications, Firebase for authentication and Loops for email.",
      "Used BullMQ with Redis for asynchronous email and notification work so request paths stayed focused on user-facing work.",
      "Reviewed PRs, helped shape technical tasks and API contracts, and coordinated backend decisions with the frontend team."
    ],
    outcome:
      "The product reached its first production launch in roughly six to seven months, supported launch activity and continued to handle recurring fight postings and live product usage after launch.",
    stack: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "BullMQ",
      "Firebase",
      "Pusher",
      "Knock",
      "Veriff",
      "Loops"
    ],
    architecture: ["Next.js", "NestJS API", "PostgreSQL / TypeORM", "Redis + BullMQ", "Pusher", "Knock", "Firebase", "Veriff", "Loops"]
  },
  {
    slug: "takafo",
    name: "Mubadala Takafo",
    eyebrow: "Enterprise recruitment platform",
    summary:
      "Owned the backend delivery of a VIP referral module for priority recruitment flows, while supporting an existing production platform in parallel.",
    period: "Dec 2025 - Present",
    company: "Aslase",
    role: "Senior Software Engineer",
    liveUrl: "https://mic.takafo.ai/",
    liveLabel: "mic.takafo.ai",
    links: [
      { label: "Recruiter portal", url: "https://mic.takafo.ai/" },
      { label: "Candidate portal", url: "https://mic-cand.takafo.ai/" },
      { label: "Partner portal", url: "https://mic-partner.takafo.ai/" }
    ],
    visual: "takafo",
    screenshot: "/projects/takafo.webp",
    metrics: [
      { value: "~10", label: "new models/tables in the module" },
      { value: "2", label: "delivery phases" },
      { value: "100%", label: "UAT passed before go-live" }
    ],
    tags: ["Enterprise", "Backend", "Recruitment", "Queues", "Production"],
    overview:
      "Takafo is a recruitment platform used across Mubadala-related hiring workflows. My main delivery was a new VIP Referral module for priority referrals originating from senior leadership, government-level channels and close references, with a dedicated recruitment process around them.",
    challenge:
      "VIP referrals could not move through the platform like normal candidates. They needed dedicated actors, priority flags, 24/48-hour follow-up rules, fast-tracked stages, interview integrations and a fallback path to external partners when no internal opportunity matched.",
    contribution: [
      "Designed the module schema with the team software architect and built the backend APIs, with roughly ten new models/tables introduced across the feature.",
      "Implemented VIP referral, VIP recruiter and candidate flows, including direct creation by a referrer or recruiter acting on a referrer's behalf.",
      "Added timed priority flags and notification rules so recruiters could see when a referral needed to move within defined 24/48-hour windows.",
      "Extended the second phase for government referrals and external partner handoff when an internal job was not a fit.",
      "Used Azure Service Bus for scheduled notification work and supported Redis-backed application behavior already present in the platform.",
      "Fixed existing real-time chat issues and Microsoft Teams-linked messaging behavior while the VIP module was being developed.",
      "Worked through business/QA UAT until the module passed all cases before production, reviewed junior PRs during UAT and participated in production releases and support."
    ],
    outcome:
      "The VIP Referral module shipped in two phases after full UAT clearance and now sits alongside the existing recruitment flows while I continue production support and maintenance on the same product.",
    stack: ["TypeScript", "Node.js", "NestJS", "Vue.js", "PostgreSQL", "Prisma", "Redis", "Azure Service Bus", "WebSockets", "Microsoft Teams"],
    architecture: ["Vue portals", "NestJS APIs", "PostgreSQL / Prisma", "Azure Service Bus", "Redis", "Teams integration", "Assessment integrations", "Scheduled notifications"]
  },
  {
    slug: "justworks",
    name: "Justworks",
    screenshot: "/projects/justworks.webp",
    eyebrow: "Payroll forecasting optimization",
    summary:
      "Worked inside an established Rails/PostgreSQL payroll product to bring expensive forecasting operations down from minutes to seconds.",
    period: "2022 · ~6 months",
    company: "Devsinc",
    role: "Associate Software Engineer",
    liveUrl: "https://www.justworks.com/",
    liveLabel: "justworks.com",
    visual: "justworks",
    metrics: [
      { value: "5-10+ min", label: "before optimization" },
      { value: "seconds", label: "after optimization" },
      { value: "~60→︎120 GB", label: "database growth during engagement" }
    ],
    tags: ["Performance", "PostgreSQL", "Rails", "Data cleanup"],
    overview:
      "I joined an existing payroll/forecasting codebase where routine forecast operations could take five to ten minutes or longer. The database was growing quickly and data/model conventions around polymorphic associations had drifted over time.",
    challenge:
      "Improve response time without treating the symptom as a single slow query. The work crossed production data, associations, schema behavior, application code and tests in a large codebase.",
    contribution: [
      "Worked on query and schema-related optimization around payroll forecasting and related payroll flows.",
      "Corrected production polymorphic association data where model names had been stored inconsistently, and updated application code to follow the corrected conventions.",
      "Participated in team design discussions around changing the payroll/invoice association from one-to-many to many-to-many so historical invoices could be reused correctly in later payrolls.",
      "Handled the broad application/test impact of small association changes, where one data-model change could touch more than a hundred files.",
      "Fixed affected unit tests and documented remaining data-cleanup work for the next developer during handoff."
    ],
    outcome:
      "The forecasting/page operation that had taken five to ten minutes or more was brought down to seconds after the optimization and data-association cleanup work.",
    stack: ["Ruby", "Ruby on Rails", "PostgreSQL", "Sidekiq", "RSpec"],
    architecture: ["Rails application", "Payroll domain", "PostgreSQL", "Sidekiq", "Polymorphic associations", "Forecasting queries"]
  },
  {
    slug: "dfe-npq",
    name: "UK DfE NPQ",
    eyebrow: "Government education service",
    summary:
      "Maintained and extended two connected Rails applications supporting National Professional Qualification registration and ECF-side workflows.",
    period: "2023-2024 · ~1 year",
    company: "Devsinc",
    role: "Software Engineer",
    liveUrl: "https://register-national-professional-qualifications.education.gov.uk/",
    liveLabel: "register-national-professional-qualifications.education.gov.uk",
    visual: "dfe",
    screenshot: "/projects/dfe.webp",
    metrics: [
      { value: "2", label: "connected Rails applications" },
      { value: "REST", label: "cross-system synchronization" },
      { value: "Rails 5→\u{FE0E}7", label: "upgrade preparation path" }
    ],
    tags: ["Government", "Rails", "REST", "Background jobs", "Maintenance"],
    overview:
      "The work covered the public NPQ registration service and a separate ECF/provider-side application. The systems had separate databases and synchronized data through REST APIs and background jobs.",
    challenge:
      "Keep a live government service stable while adding new qualification flows across two codebases and preparing an older Rails application for a major framework upgrade.",
    contribution: [
      "Implemented a new mathematics-related qualification/course flow across both the NPQ and ECF applications, including backend and frontend flow changes.",
      "Worked across two separate repositories/databases and maintained REST-based synchronization between them, with background jobs used during sync work.",
      "Handled day-to-day maintenance, new requirements, unit tests and data-fix work when identity/NPQ/ECF records diverged.",
      "Updated older gems and application dependencies so the codebase met Rails 6 requirements before another developer completed the Rails 7 upgrade.",
      "Added database/contracts changes needed by new course behavior and supported data correction work across the connected services."
    ],
    outcome:
      "The new course flow was delivered within the required deadline while the existing registration service continued to be maintained and prepared for the next Rails version.",
    stack: ["Ruby", "Ruby on Rails", "PostgreSQL", "REST APIs", "Background jobs", "RSpec", "Capybara"],
    architecture: ["NPQ registration", "REST API", "ECF/provider app", "Separate PostgreSQL DBs", "Background jobs", "Data synchronization"]
  },
  {
    slug: "spsg",
    name: "SPSG",
    eyebrow: "Legacy platform migration",
    summary:
      "Mapped and migrated an entire legacy MySQL data model into a new NestJS/PostgreSQL platform, covering roughly 23,000 users plus related records.",
    period: "2025 · focused migration engagement",
    company: "Ilsa Interactive",
    role: "Backend Engineer",
    liveUrl: "https://spsgonline.org/",
    liveLabel: "spsgonline.org",
    visual: "spsg",
    screenshot: "/projects/spsg.webp",
    metrics: [
      { value: "23K+", label: "users in the legacy dataset" },
      { value: "MySQL→\u{FE0E}Postgres", label: "database transition" },
      { value: "table-by-table", label: "controlled migration" }
    ],
    tags: ["Migration", "Data", "NestJS", "PostgreSQL", "Legacy"],
    overview:
      "SPSG was moving from an older .NET/MySQL system to a new NestJS/PostgreSQL application. I was the engineer focused on mapping and moving the legacy data into the new schema.",
    challenge:
      "The schemas did not match one-for-one, and legacy records did not always satisfy the validation rules of the new application. The migration needed to preserve as much data as possible without silently hiding failures.",
    contribution: [
      "Mapped the old schema to the new model and wrote migration scripts in the new TypeScript/NestJS system that connected directly to the legacy MySQL database.",
      "Migrated the database table by table, covering roughly 23,000 users plus the wider set of related records rather than only the user table.",
      "Used transactions and rollback behavior where a record needed all-or-nothing validation.",
      "For records that could not satisfy the new validation rules, skipped them deliberately and kept a history of what failed and how many records completed.",
      "Ran and verified the migration in development environments before handoff/cutover work continued."
    ],
    outcome:
      "The migration scripts gave the team a repeatable path from the legacy MySQL model into PostgreSQL while keeping validation failures visible instead of losing them silently.",
    stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "TypeORM", "MySQL", ".NET legacy source"],
    architecture: ["Legacy .NET app", "MySQL", "Migration scripts", "Validation / transactions", "NestJS", "PostgreSQL"]
  }
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
