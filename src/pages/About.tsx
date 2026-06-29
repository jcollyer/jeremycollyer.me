import { Download } from 'lucide-react'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone/60">
        <span className="h-px w-5 bg-accent" aria-hidden="true" />
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink">{children}</div>
    </div>
  )
}

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
          About
        </h1>
        <p className="mt-6 text-lg font-medium leading-relaxed text-stone">
          I build products that solve real problems.
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone/90"
        >
          <Download className="h-4 w-4 text-accent" aria-hidden="true" />
          Download resume
        </a>
      </header>

      <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink">
        <p>
          I'm a Staff Software Engineer who enjoys turning ambitious ideas into
          products people trust.
        </p>
        <p>
          Over the past decade I've worked across enterprise AI, fintech,
          ecommerce, media, and consumer software, always with the same goal:
          making complex technology feel intuitive.
        </p>
        <p>
          Most recently I helped build an enterprise AI platform that reduced SOC
          analysis workflows by 10× through thoughtfully designed
          human-in-the-loop experiences.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        <Block title="How I Think">
          <p>
            The products I'm most proud of all started with the same question:
          </p>
          <div className="border-l-2 border-accent bg-sand/20 py-4 pl-5 pr-4">
            <p className="text-base font-medium leading-relaxed text-stone">
              "Why is this harder than it needs to be?"
            </p>
          </div>
          <p>
            Whether I'm designing enterprise AI workflows, improving ecommerce
            performance, or building creator tools, I enjoy simplifying complex
            problems and creating products that people genuinely enjoy using.
          </p>
        </Block>

        <Block title="Building for Myself">
          <p>
            Many of my side projects started because I became the customer.
          </p>
          <p>
            As a YouTube creator, I built PostPilot to simplify content
            publishing with AI.
          </p>
          <p>
            After starting French lessons, I began building Ensemble because I
            couldn't find a flashcard app that combined AI, collaboration, web,
            and native mobile in one experience.
          </p>
          <p>
            Those projects keep me curious and remind me why I love building
            software.
          </p>
        </Block>

        <Block title="Outside of Work">
          <p>
            When I'm away from my keyboard you'll usually find me flying drones,
            exploring cities with a camera, or learning French with my family.
          </p>
          <p>
            I enjoy projects that combine creativity, thoughtful design, and
            solving interesting problems—whether that's software or something
            entirely different.
          </p>
        </Block>

        <Block title="What I'm Looking For">
          <p>
            I'm excited by teams building ambitious products where engineering,
            product thinking, and AI come together to solve meaningful customer
            problems.
          </p>
        </Block>
      </div>
    </section>
  )
}

export default About
