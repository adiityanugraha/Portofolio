import { createFileRoute } from '@tanstack/react-router'
import { Linkedin, Github, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/',
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'aditya-nugraha-a8725b2a5',
    color: 'hover:text-blue-400',
  },
  {
    href: 'https://github.com/',
    icon: Github,
    label: 'GitHub',
    handle: 'github.com',
    color: 'hover:text-foreground',
  },
  {
    href: 'mailto:adityanugraha789@gmail.com',
    icon: Mail,
    label: 'Email',
    handle: 'adityanugraha789@gmail.com',
    color: 'hover:text-primary',
  },
]

function Contact() {
  return (
    <div className="min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl">
      <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Contact</h2>
      <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-lg">
        Have a question, collaboration idea, or just want to say hello? Feel free to reach out.
      </p>

      {/* Social Links */}
      <div className="space-y-3">
        {socialLinks.map(({ href, icon: Icon, label, handle, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-card transition-all duration-200 text-muted-foreground ${color}`}
          >
            <Icon size={20} className="shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">{label}</p>
              <p className="text-base font-medium text-foreground">{handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
