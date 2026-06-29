import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <img
            src="/logo.png"
            alt="Jeremy Collyer logo"
            className="mb-6 h-10 w-auto"
          />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
            Jeremy Collyer
          </h1>
          <p className="mt-3 text-lg text-stone/70">
            Staff Software Engineer · Enterprise AI &amp; Product Engineering
          </p>

          <p className="mt-8 text-xl leading-relaxed text-stone">
            I build products that remove friction by combining thoughtful
            engineering, strong product instincts, and AI.
          </p>

          <p className="mt-5 max-w-prose leading-relaxed text-stone/80">
            With more than a decade shipping customer-facing platforms, I care
            about the craft beneath the surface — the architecture, the details,
            and the human-in-the-loop experiences that make complex software
            feel effortless. The work I'm proudest of simplifies difficult
            workflows and helps people do their best work.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="rounded-full bg-stone px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone/90"
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
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-sand/60" aria-hidden="true" />
            <img
              src="/portfolio-photo.png"
              alt="Portrait of Jeremy Collyer"
              className="relative w-full max-w-sm rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
