function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
        About
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
        <p>
          I'm Jeremy Collyer, a Staff Software Engineer based in Sacramento with
          10+ years building AI-powered products and customer-facing platforms.
        </p>
        <p>
          Most recently I led product engineering for an enterprise AI platform
          that reduced SOC analysis workflows by 10x — combining LLMs with
          thoughtfully designed human-in-the-loop experiences. Across my career
          I've shaped frontend architecture, design systems, and platform
          engineering at companies serving millions of people.
        </p>
        <p>
          The products I'm most proud of are the ones that simplify difficult
          workflows and help people do their best work. I build to remove
          friction — pairing thoughtful engineering with strong product
          instincts and AI.
        </p>
      </div>

      <a
        href="/resume.pdf"
        download
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone/90"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download resume
      </a>
    </section>
  )
}

export default About
