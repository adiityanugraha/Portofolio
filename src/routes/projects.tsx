import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const highlights = allProjects.filter((p) => p.highlight === true)
  const other = allProjects.filter((p) => !p.highlight)

  return (
    <div className="min-h-screen px-8 py-16 lg:px-14 lg:py-20 max-w-5xl">
      <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-10">
        Projects
      </h2>

      {highlights.length > 0 ? (
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="size-4 text-primary shrink-0" aria-hidden />
            <h3 className="text-sm font-semibold text-foreground tracking-tight">
              Highlight projects
            </h3>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
            {highlights.map((project) => (
              <li key={project._meta.path}>
                <ProjectCard project={project} emphasized />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {other.length > 0 ? (
        <section>
          <h3 className="text-sm font-semibold text-foreground tracking-tight mb-6">
            More projects
          </h3>
          <ul className="grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
            {other.map((project) => (
              <li key={project._meta.path}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {highlights.length === 0 && other.length === 0 ? (
        <p className="text-sm text-muted-foreground">Belum ada proyek yang dipublikasikan.</p>
      ) : null}
    </div>
  )
}

type ProjectItem = (typeof allProjects)[number]

function ProjectCard({
  project,
  emphasized = false,
}: {
  project: ProjectItem
  emphasized?: boolean
}) {
  return (
    <Card
      className={cn(
        'h-full transition-shadow hover:shadow-md',
        emphasized && 'border-primary/25 bg-primary/[0.03]',
      )}
    >
      <CardHeader className="gap-3">
        <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-3 border-t border-border/60 pt-4 mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <Github className="size-4 shrink-0" aria-hidden />
            GitHub
            <ExternalLink className="size-3.5 opacity-70" aria-hidden />
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Live demo
            <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
          </a>
        ) : null}
      </CardFooter>
    </Card>
  )
}
