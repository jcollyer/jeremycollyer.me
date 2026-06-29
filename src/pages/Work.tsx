// NOTE: Cape.ai details come from your resume. PostPilot and Ensemble are
// scaffolded with placeholder copy — edit the `summary` and `highlights`
// fields below to match your actual role and impact at each.
const experience = [
  {
    company: 'PostPilot',
    role: 'Staff Software Engineer', // EDIT: your title
    period: '2025 — Present', // EDIT: dates
    location: 'Remote',
    summary:
      'Building AI-powered product experiences that remove friction for customers and teams.', // EDIT
    highlights: [
      'Add a key accomplishment or area of ownership here.',
      'Add another highlight — impact, scale, or technical leadership.',
    ],
  },
  {
    company: 'Ensemble',
    role: 'Staff Software Engineer', // EDIT: your title
    period: '2024 — 2025', // EDIT: dates
    location: 'Remote',
    summary:
      'Shaped product and platform engineering across customer-facing surfaces.', // EDIT
    highlights: [
      'Add a key accomplishment or area of ownership here.',
      'Add another highlight — impact, scale, or technical leadership.',
    ],
  },
  {
    company: 'Cape.ai',
    role: 'Staff Software Engineer',
    period: '2023 — Present',
    location: 'Remote',
    summary:
      'Enterprise AI platform helping financial institutions automate complex compliance and risk operations.',
    highlights: [
      'Architected AI-powered workflows combining LLMs, OCR, RAG, vector search, ontology modeling, and verifiable citations — reducing SOC analysis by 10x.',
      'Built high-performance chat interfaces and workflow runners using Server-Sent Events for smooth, real-time streaming LLM responses.',
      'Directed AI chat, workflow automation, reporting, dashboards, graph visualization, search, and onboarding as the company’s sole Front-End Engineer.',
      'Extended ownership into Python/FastAPI development while owning frontend architecture, testing strategy, CI/CD, and engineering standards.',
    ],
  },
]

function Work() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
          Work
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          A look at my most recent experience building AI-powered products and
          customer-facing platforms.
        </p>
      </header>

      <ol className="mt-12 space-y-6">
        {experience.map((job) => (
          <li
            key={job.company}
            className="rounded-2xl border border-sand bg-sand/15 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-xl font-semibold text-stone">
                {job.company}
              </h2>
              <span className="text-sm text-ink">{job.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-stone">
              {job.role} · {job.location}
            </p>
            <p className="mt-4 leading-relaxed text-ink">{job.summary}</p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((point, i) => (
                <li key={i} className="flex gap-3 text-ink">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone/50"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Work
