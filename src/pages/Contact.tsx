const links = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'collyerdesign@gmail.com',
    href: 'mailto:collyerdesign@gmail.com',
    external: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeremy-collyer',
    href: 'https://www.linkedin.com/in/jeremy-collyer/',
    external: true,
  },
  {
    icon: '💻',
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
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="group flex flex-col rounded-2xl border border-sand p-6 transition-colors hover:bg-sand/30"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone/60">
              <span aria-hidden="true" className="text-base">
                {link.icon}
              </span>
              {link.label}
            </span>
            <span className="mt-3 break-words text-stone transition-colors group-hover:text-accent">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
