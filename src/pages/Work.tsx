import { ArrowUpRight } from 'lucide-react'

type Project = {
  company: string
  tagline: string
  logo?: string
  logoClass?: string
  url?: string
  problem?: string[]
  overview?: string[]
  intro?: string[]
  built?: { label: string; items: string[] }
  highlights?: string[]
  role: string
  learned?: string
}

const projects: Project[] = [
  {
    company: 'PostPilot',
    tagline: 'AI publishing for creators',
    logo: '/postpilot-logo.png',
    url: 'https://post-pilot.app',
    problem: [
      'As a YouTube creator, I found myself spending more time preparing content than creating it. Existing scheduling tools were either too broad, too expensive, or lacked meaningful AI assistance.',
    ],
    overview: [
      'PostPilot is an AI-powered publishing platform designed to help creators batch weeks of content in minutes. It combines AI-assisted metadata generation, intelligent scheduling, and streamlined publishing workflows into a single experience.',
      'Rather than trying to replace creativity, the goal is to remove repetitive work so creators can focus on making better content.',
    ],
    built: {
      label: 'What I built',
      items: [
        'AI-assisted metadata generation',
        'Intelligent publishing schedules',
        'Multi-platform publishing workflows',
        'Calendar and queue management',
        'Modern React application architecture',
      ],
    },
    role: 'Founder · Product Design · Engineering · AI Integration',
    learned:
      "The best products often come from solving problems you've experienced yourself.",
  },
  {
    company: 'Ensemble',
    tagline: 'AI-assisted language learning',
    logo: '/ensemble-logo.png',
    url: 'https://ensemblelanguage.com',
    problem: [
      'After starting French classes, I tried nearly every flashcard app available. Each solved part of the problem, but none combined collaboration, AI-assisted creation, camera capture, and native mobile into a single experience.',
      'So I started building the one I wanted to use.',
    ],
    overview: [
      'Ensemble is a collaborative learning platform that uses multimodal AI to transform photos into structured flashcards while allowing learners to study together across web and iOS.',
    ],
    built: {
      label: 'What I built',
      items: [
        'AI-assisted flashcard generation',
        'Camera-based card creation',
        'Collaborative study decks',
        'Native iOS application',
        'Web application',
      ],
    },
    role: 'Founder · Product Design · Engineering',
    learned:
      'AI is most valuable when it removes friction without taking control away from the user.',
  },
  {
    company: 'CAPE.AI',
    tagline: 'Enterprise AI for Financial Operations',
    logo: '/cape.svg',
    url: 'https://cape.ai',
    problem: [
      'Financial institutions rely on fragmented workflows to review thousands of pages of documentation across compliance, trust operations, loan servicing, and money movement.',
      "The challenge wasn't simply adding AI.",
      'It was creating AI people could actually trust.',
    ],
    overview: [
      'I helped build an enterprise AI platform that unified complex compliance workflows into a single human-in-the-loop experience. Every AI recommendation included verifiable citations, allowing analysts to move dramatically faster without sacrificing confidence.',
      'One flagship workflow reduced SOC analysis time by 10×.',
    ],
    built: {
      label: 'What I owned',
      items: [
        'AI chat experiences',
        'Workflow Builder',
        'Workflow Runner',
        'Report Generation',
        'Dashboards',
        'Search',
        'Graph Builder',
        'Interactive tables',
        'Onboarding',
        'Settings',
        'Platform architecture',
      ],
    },
    highlights: [
      'Designed human-in-the-loop AI workflows',
      'Architected structured streaming interfaces for LLMs',
      'Introduced reusable AI rendering patterns',
      'Partnered directly with AI engineers on prompt design and structured outputs',
      'Expanded into Python/FastAPI development',
      'Owned frontend architecture across the platform',
    ],
    role: 'Staff Software Engineer',
    learned:
      "Building enterprise AI isn't about making models smarter—it's about designing experiences people trust.",
  },
  {
    company: 'Daily Harvest',
    tagline: 'Modernizing ecommerce at scale',
    logo: '/daily-harvest-logo.png',
    logoClass: 'h-[84px]',
    url: 'https://daily-harvest.com',
    problem: [
      'As Daily Harvest transitioned from Angular to React, engineering velocity, SEO, and platform consistency became increasingly important.',
      'Rather than treating performance as a technical metric, we treated it as a business opportunity.',
    ],
    overview: [
      'I helped modernize the frontend platform across web and React Native while leading a performance initiative that significantly improved Core Web Vitals and organic search performance.',
    ],
    highlights: [
      'Improved Lighthouse scores by 70%',
      'Increased SEO visibility and ecommerce growth',
      'Introduced Storybook and shared component architecture',
      'Improved observability with Datadog',
      'Contributed to React Native architecture',
      'Mentored engineers and guided architectural decisions',
    ],
    role: 'Senior Software Engineer',
    learned:
      "Performance isn't just an engineering metric. It's a product feature with measurable business impact.",
  },
  {
    company: 'iHeartMedia',
    tagline: 'Streaming media at internet scale',
    logo: '/Iheart-Logo.png',
    problem: [
      "Supporting over 120 million listeners, hundreds of radio stations, and one of the world's largest podcast platforms required scalable products, reusable systems, and consistent design.",
    ],
    overview: [
      "I helped modernize iHeart's frontend platform during its migration to React while building customer-facing experiences used by millions every day.",
    ],
    highlights: [
      'Built the global radio player',
      'Built podcast creator tools',
      'Built embeddable podcast player',
      'Designed cross-platform design system',
      'Supported web, mobile, TVs, and connected devices',
      'Mentored engineers and technical initiatives',
    ],
    role: 'Senior Software Engineer',
    learned:
      'At internet scale, consistency and reusable systems create more leverage than individual features.',
  },
  {
    company: 'Gemini',
    tagline: 'Early fintech',
    logo: '/Gemini-logo.png',
    url: 'https://gemini.com',
    intro: [
      "I joined Gemini during a period of rapid growth, helping build secure customer-facing experiences while contributing to the evolution of the company's frontend architecture.",
    ],
    highlights: [
      'Portfolio management',
      'Authentication',
      'Account management',
      'Marketing site',
    ],
    role: 'Software Engineer',
  },
  {
    company: 'GoPro',
    tagline: 'Ecommerce foundations',
    logo: '/Gopro-Logo.png',
    logoClass: 'h-12',
    url: 'https://gopro.com',
    intro: [
      'At GoPro I helped build customer-facing ecommerce experiences while contributing to frontend standards that improved consistency across engineering teams.',
      'It was my first opportunity to experience software at global scale and helped shape how I think about reusable UI, design systems, and product quality.',
    ],
    highlights: [
      'Ecommerce platform',
      'Internal tools',
      'Frontend style guide',
      'Shared UI standards',
    ],
    role: 'Software Engineer',
  },
]

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone/60">
        <span
          className="h-px w-5 bg-accent"
          aria-hidden="true"
        />
        {title}
      </h3>
      <div className="mt-3 space-y-3 leading-relaxed text-ink">{children}</div>
    </div>
  )
}

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function formatUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function Work() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
          Building products that solve real problems.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          From enterprise AI to creator tools, I enjoy building software that
          simplifies difficult workflows and creates meaningful value for
          customers. Whether the challenge is scaling products to millions of
          users or designing trustworthy AI experiences, I focus on turning
          complexity into intuitive products.
        </p>
      </header>

      <div className="mt-16">
        {projects.map((project, index) => (
          <article key={project.company} className="scroll-mt-24">
            {index > 0 && (
              <div className="my-16 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-sand" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
                <span className="h-px flex-1 bg-sand" />
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.company} logo`}
                  className={`w-auto max-w-[200px] object-contain ${
                    project.logoClass ?? 'h-8'
                  }`}
                />
              ) : (
                <span className="text-2xl font-semibold text-stone">
                  {project.company}
                </span>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-stone/70 transition-colors hover:text-stone"
                >
                  <span className="border-b border-accent/60 pb-px group-hover:border-accent">
                    {formatUrl(project.url)}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
            <p className="mt-3 text-lg font-medium text-stone">
              {project.tagline}
            </p>

            <div className="mt-8 space-y-8">
              {project.problem && (
                <Block title="The problem">
                  {project.problem.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Block>
              )}

              {project.overview && (
                <Block title="Overview">
                  {project.overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Block>
              )}

              {project.intro &&
                project.intro.map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink">
                    {p}
                  </p>
                ))}

              {project.built && (
                <Block title={project.built.label}>
                  <PointList items={project.built.items} />
                </Block>
              )}

              {project.highlights && (
                <Block title="Highlights">
                  <PointList items={project.highlights} />
                </Block>
              )}

              {project.learned && (
                <div className="border-l-2 border-accent bg-sand/20 py-4 pl-5 pr-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone/60">
                    What I learned
                  </h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-stone">
                    {project.learned}
                  </p>
                </div>
              )}

              <Block title="Role">
                <p>{project.role}</p>
              </Block>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
