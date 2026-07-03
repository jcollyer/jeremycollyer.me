import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-6 pb-16 sm:py-24 text-left">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
        <h1 className="whitespace-nowrap text-4xl font-semibold leading-tight tracking-tight text-stone sm:text-5xl">
          Jeremy Collyer
        </h1>
        <img
          src="/portfolio-photo.png"
          alt="Portrait of Jeremy Collyer"
          className="h-16 w-16 rounded-2xl object-cover shadow-sm"
        />
      </div>

      <p className="mt-5 text-base text-ink sm:mt-6 sm:text-lg">
        Staff Software Engineer · Enterprise AI &amp; Product Engineering
      </p>

      <p className="mt-8 text-2xl leading-snug text-stone sm:mt-10 sm:text-3xl sm:leading-relaxed">
        Turning complex technology into products people trust.
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink sm:mt-8">
        I design and build AI-powered products that simplify complex workflows,
        helping companies transform ambitious ideas into software customers
        genuinely enjoy using.
      </p>

      <div className="mt-8 flex flex-wrap justify-start gap-3 sm:mt-12">
        <Link
          to="/work"
          className="rounded-full bg-stone px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone/85"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-sand px-6 py-3 text-sm font-medium text-stone transition-colors hover:bg-sand/40"
        >
          Let's Connect
        </Link>
      </div>
    </section>
  )
}

export default Home
