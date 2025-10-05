import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const designProjects = [
  {
    id: "canvas-redesign",
    title: "Canvas Redesign",
    description:
      "Students all around the world open Canvas to see a page that lacks any coherence, making it difficult for students to find what they should know.",
    image: "/projects/design/canvas-redesign.png",
    category: "design",
  },
  {
    id: "invokeai",
    title: "InvokeAI",
    description:
      "A modular re-design of InvokeAI's (generative media platform for creative production) prompting experience.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.45.20%E2%80%AFAM-LE27JWMxqGWOaiEjbBhBhjDm59MwyX.png",
    category: "design",
    externalLink: "https://www.figma.com/board/N97cOvOySrmS8ZjvZN0Ojc/Invoke-AI?node-id=0-1&t=jVCjS7yQh4PIQ0rV-1",
  },
  {
    id: "imago",
    title: "Imago",
    description:
      "Inspired from my favourite film references site, shot.cafe, Imago uses design profiles from Cosmos and Pinterest to help filmakers find references in a way as beautiful as the frames themselves.",
    image: "/projects/design/imago.png",
    category: "design",
  },
  {
    id: "knotapi-prd",
    title: "KnotAPI New Feature PRD",
    description: "New feature specs and PRD for KnotAPI (connect cardholders to hundreds of merchants)",
    image: "/projects/design/knotapi-prd.png",
    category: "design",
    externalLink: "https://docs.google.com/document/d/1OQH56KgfFsciTrmU5k78GFY5uoTdxhtz64VklNElizU/edit?usp=sharing",
  },
  {
    id: "cignull",
    title: "Cignull (coming soon)",
    description:
      "I've been building Cignull, a patent-pending JUUL deaddiction casing and app. Working on a radically new interface to help teenagers quite e-cigarrettes.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.44.20%E2%80%AFAM-pmf7RSFqgdY9GDB0rYlQBvBuYkeiCc.png",
    category: "design",
    comingSoon: true,
  },
]

export default function DesignProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-times italic text-5xl text-foreground text-balance">Design and Product</h1>
            <div className="w-24 h-1 bg-foreground"></div>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl">
              I've been designing, coding and managing products for over 4 years. To me great design is downstream of
              the idea to build things I would like to use.
            </p>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl">
              Some of my inspirations to design and build these products comes from Paul Graham's writings, Steve Jobs,
              Edwin H. Land, Dieter Rams, Johny Ive, Christian Dior and Brian Chesky.
            </p>
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={designProjects} category="design" />
        </div>
      </main>
    </div>
  )
}
