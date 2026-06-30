import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '/logo.png'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to reveal the nav chrome once past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-full px-3 py-1.5 text-sm transition-colors',
      isActive
        ? 'bg-sand text-stone font-medium'
        : 'text-ink hover:text-stone hover:bg-sand/40',
    ].join(' ')

  const drawerLink = ({ isActive }: { isActive: boolean }) =>
    [
      'block rounded-xl px-4 py-3 text-lg transition-colors',
      isActive
        ? 'bg-sand text-stone font-medium'
        : 'text-ink hover:text-stone hover:bg-sand/40',
    ].join(' ')

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      <header className="sticky top-0 z-30 px-4 pt-4">
        <nav
          className={[
            'mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-6 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300',
            // Mobile keeps the bar visible; desktop reveals chrome on scroll.
            'border border-sand/70 bg-white/85 shadow-sm backdrop-blur',
            scrolled
              ? ''
              : 'sm:border-transparent sm:bg-transparent sm:shadow-none sm:backdrop-blur-none',
          ].join(' ')}
        >
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="Jeremy Collyer logo" className="h-8 w-auto" />
            <span className="text-sm font-semibold tracking-wide text-stone">
              Jeremy Collyer
            </span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={desktopLink}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-full p-2 text-stone transition-colors hover:bg-sand/40 sm:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={[
          'fixed inset-0 z-40 sm:hidden',
          open ? '' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={[
            'absolute inset-0 bg-black/50 transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={[
            'absolute inset-y-0 left-0 flex w-4/5 max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full',
          ].join(' ')}
        >
          <div className="flex items-center justify-between border-b border-sand/70 px-5 py-4">
            <span className="text-sm font-semibold tracking-wide text-stone">
              Jeremy Collyer
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-stone transition-colors hover:bg-sand/40"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={drawerLink}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-sand/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-ink sm:flex-row">
          <span>© {new Date().getFullYear()} Jeremy Collyer</span>
          <span>Sacramento, CA · Staff Software Engineer</span>
        </div>
      </footer>
    </div>
  )
}

export default App
