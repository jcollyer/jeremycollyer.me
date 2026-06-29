import { NavLink, Outlet } from 'react-router-dom'
import logo from '/logo.png'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone">
      <header className="sticky top-0 z-20 border-b border-sand/70 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Jeremy Collyer logo" className="h-8 w-auto" />
            <span className="text-sm font-semibold tracking-wide text-stone">
              Jeremy Collyer
            </span>
          </NavLink>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      'rounded-full px-3 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'bg-sand text-stone font-medium'
                        : 'text-stone/70 hover:text-stone hover:bg-sand/40',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-sand/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-stone/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Jeremy Collyer</span>
          <span>Sacramento, CA · Staff Software Engineer</span>
        </div>
      </footer>
    </div>
  )
}

export default App
