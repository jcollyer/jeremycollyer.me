import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="mx-auto max-w-4xl px-8 py-24 sm:px-12 sm:py-32 text-center">
      <div className="flex items-center justify-center gap-5">
        <img
          src="/logo.png"
          alt="Jeremy Collyer logo"
          className="h-10 w-auto"
        />
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Jeremy Collyer
        </h1>
        <img
          src="/portfolio-photo.png"
          alt="Portrait of Jeremy Collyer"
          className="h-16 w-16 rounded-2xl object-cover shadow-sm"
        />
      </div>

      <p className="mt-6 text-lg text-ink">
        Staff Software Engineer · Enterprise AI &amp; Product Engineering
      </p>

      <p className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-stone">
        I build products that remove friction by combining thoughtful
        engineering, strong product instincts, and AI.
      </p>

      <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink">
        With more than a decade shipping customer-facing platforms, I care about
        the craft beneath the surface — the architecture, the details, and the
        human-in-the-loop experiences that make complex software feel
        effortless. The work I'm proudest of simplifies difficult workflows and
        helps people do their best work.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link
          to="/work"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/85"
        >
          View my work
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-sand px-6 py-3 text-sm font-medium text-stone transition-colors hover:bg-sand/40"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default Home
