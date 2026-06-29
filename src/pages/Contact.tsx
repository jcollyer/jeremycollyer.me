const links = [
  {
    label: 'Email',
    value: 'collyerdesign@gmail.com',
    href: 'mailto:collyerdesign@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeremy-collyer',
    href: 'https://www.linkedin.com/in/jeremy-collyer/',
  },
  {
    label: 'GitHub',
    value: 'github.com/jcollyer',
    href: 'https://github.com/jcollyer',
  },
]

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone/70">
        I'm always happy to talk about product, engineering, and AI. Reach out
        through any of these.
      </p>

      <ul className="mt-10 divide-y divide-sand rounded-2xl border border-sand">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
              className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-sand/30"
            >
              <span className="text-sm font-medium uppercase tracking-wide text-stone/60">
                {link.label}
              </span>
              <span className="text-right text-stone">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
