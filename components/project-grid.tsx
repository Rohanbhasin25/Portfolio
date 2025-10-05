import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  externalLink?: string // Added optional external link property
  achievement?: string // Added optional achievement field
  comingSoon?: boolean // Added comingSoon property to make cards non-clickable
}

interface ProjectGridProps {
  projects: Project[]
  category: string
}

export function ProjectGrid({ projects, category }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => {
        const cardContent = (
          <Card className="border-border bg-background hover:shadow-2xl hover:shadow-foreground/10 transition-all duration-300 shadow-lg shadow-foreground/5 h-full flex flex-col">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="font-times italic text-xl text-foreground group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
                <p className="font-helvetica text-foreground leading-relaxed text-pretty">{project.description}</p>
                {project.achievement && (
                  <p className="font-helvetica text-sm text-foreground/80 leading-relaxed text-pretty pt-2">
                    {project.achievement}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )

        if (project.comingSoon) {
          return (
            <div key={project.id} className="cursor-default">
              {cardContent}
            </div>
          )
        }

        if (project.externalLink) {
          return (
            <a key={project.id} href={project.externalLink} target="_blank" rel="noopener noreferrer" className="group">
              {cardContent}
            </a>
          )
        }

        return (
          <Link key={project.id} href={`/projects/${category}/${project.id}`} className="group">
            {cardContent}
          </Link>
        )
      })}
    </div>
  )
}
