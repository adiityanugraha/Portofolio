import { createFileRoute } from '@tanstack/react-router'
import { Rocket } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen px-8 py-16 lg:px-14 lg:py-20 max-w-3xl">
      <h2 className="text-xs uppercase tracking-widest text-primary font-semibold mb-10">
        Projects
      </h2>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <Rocket size={28} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Projects are currently being prepared. Check back soon to see what's being built.
        </p>
      </div>
    </div>
  )
}
