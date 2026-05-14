import { createFileRoute } from '@tanstack/react-router'
import { Award, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Certifications,
})

function CertificationBadge({ issuer }: { issuer: string }) {
  const isDicoding = issuer === 'Dicoding'
  return (
    <div
      className={[
        'flex size-10 shrink-0 items-center justify-center rounded-lg',
        isDicoding ? 'bg-[#4D47C3]' : 'bg-[#1F70C1]',
      ].join(' ')}
      aria-hidden
    >
      <Award className="size-5 text-white" strokeWidth={2} />
    </div>
  )
}

const certifications = [
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    link: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding',
    link: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/',
  },
  {
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding',
    link: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/',
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'IBM',
    link: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/',
  },
  {
    title: 'Build an AI Agent',
    issuer: 'IBM',
    link: 'https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/',
  },
]

function Certifications() {
  return (
    <div className="min-h-screen px-10 py-16 lg:px-16 lg:py-20 max-w-5xl">
      <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-10">
        Certifications & Courses
      </h2>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-all duration-200"
          >
            <CertificationBadge issuer={cert.issuer} />
            <div className="flex-1 min-w-0">
              <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
            </div>
            <ExternalLink
              size={16}
              className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
            />
          </a>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://www.linkedin.com/in/aditya-nugraha-a8725b2a5/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group"
        >
          View all certifications on LinkedIn
          <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}
