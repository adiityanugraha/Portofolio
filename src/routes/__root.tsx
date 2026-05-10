import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
  Link,
  useRouterState,
} from '@tanstack/react-router'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Aditya Nugraha — AI & ML Engineer' },
      { name: 'description', content: 'Portfolio of Anak Agung Aryadipa Aditya Nugraha, AI and Machine Learning Engineer' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Certifications' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'mailto:adityanugraha789@gmail.com',
    icon: Mail,
    label: 'Email',
  },
]

function Sidebar({ onClose }: { onClose?: () => void }) {
  const router = useRouterState()
  const pathname = router.location.pathname

  return (
    <aside className="flex flex-col h-full px-10 py-12 justify-between">
      <div>
        {/* Profile photo */}
        <div className="mb-7">
          <img
            src="/profile.jpg"
            alt="Aditya Nugraha"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-primary/40"
          />
        </div>

        {/* Name & title */}
        <h1 className="text-3xl font-bold text-foreground leading-tight mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Anak Agung Aryadipa
          <br />
          Aditya Nugraha
        </h1>
        <p className="text-base font-medium text-primary mb-5 tracking-wide">
          AI and Machine Learning Engineer
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-[240px]">
          Saya berfokus pada pengembangan solusi berbasis data dan AI, termasuk machine learning, computer vision, dan LLM, guna menyelesaikan tantangan nyata. Saya tertarik membangun sistem AI yang terstruktur, dan production-ready.
        </p>

        {/* Navigation */}
        <nav className="space-y-1">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to
            return (
              <Link
                key={to}
                to={to}
                onClick={onClose}
                className={`group flex items-center gap-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span
                  className={`h-px transition-all duration-200 ${
                    isActive
                      ? 'w-10 bg-primary'
                      : 'w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-foreground'
                  }`}
                />
                <span className="tracking-widest text-xs uppercase">{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 mt-8">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </aside>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
          <div>
            <p className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Aditya Nugraha</p>
            <p className="text-xs text-primary">AI & ML Engineer</p>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </div>
        )}

        {/* Desktop layout */}
        <div className="lg:flex min-h-screen">
          {/* Fixed sidebar */}
          <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[380px] lg:border-r lg:border-border">
            <Sidebar />
          </div>

          {/* Main content */}
          <main className="lg:ml-[380px] flex-1 min-h-screen">
            {children}
          </main>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
