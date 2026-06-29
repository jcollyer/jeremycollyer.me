import { Mail } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

// Lucide v1 dropped brand marks, so GitHub/LinkedIn use their official logos.
function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const links: {
  icon: ComponentType<IconProps>
  label: string
  value: string
  href: string
  external: boolean
}[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'collyerdesign@gmail.com',
    href: 'mailto:collyerdesign@gmail.com',
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeremy-collyer',
    href: 'https://www.linkedin.com/in/jeremy-collyer/',
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/jcollyer',
    href: 'https://github.com/jcollyer',
    external: true,
  },
]

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
          Connect
        </h1>
        <p className="mt-6 text-lg font-medium leading-relaxed text-stone">
          Let's build something great.
        </p>
      </header>

      <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink">
        <p>
          Whether you're building an AI product, scaling an engineering team, or
          simply want to talk about product development, I'd love to hear from
          you.
        </p>
        <p>
          I'm always happy to connect with people solving interesting problems,
          exploring new ideas, or building products that make a real difference.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon
          return (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="group flex flex-col rounded-2xl border border-sand p-6 transition-colors hover:bg-sand/30"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone/60">
              <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {link.label}
            </span>
            <span className="mt-3 break-words text-stone transition-colors group-hover:text-accent">
              {link.value}
            </span>
          </a>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
