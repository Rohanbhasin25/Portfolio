import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const filmProjects = [
  {
    id: "abundance",
    title: "Short Film: Abundance",
    description:
      "Abundance is a 10 minute short exploring themes of attention, dopamine, doomscrolling, distraction, addiction, creativity - the abundance that modern life has to offer.",
    image: "/projects/film/abundance-poster.png",
    category: "film",
    externalLink: "https://www.youtube.com/watch?v=swv-jF8l1rs",
  },
  {
    id: "storytellers",
    title: "Docuseries #1: Storytellers who don't tell stories for a living",
    description:
      "Filmed while travelling in Europe, this film covers common themes from the stories of Jobs, Federer and Marco Pierre White.",
    image: "/projects/film/storytellers-thumbnail.png",
    category: "film",
    externalLink: "https://www.youtube.com/watch?v=IU8wMdiP1D8",
  },
]

export default function FilmProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-times text-5xl text-foreground text-balance">Film</h1>
            <div className="w-24 h-1 bg-foreground"></div>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl">
              I grew obsessed with movies, from Shahrukh to Spielberg, I was obsessed with actions as small as a look,
              camera movements as subtle as David Fincher's and worlds that were as expansive as Ridley Scott's.
            </p>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl">
              Some of my inspirations are Kubrick, Nolan, Arronofsky, PTA, Villeneuve, Bong Joon-ho, Park Chan-wook, Zoya Akhtar, David Fincher, Shekhar Kapur, Cuaron, Abbas Kiarostami, Farah Khan (yes) and Jeffrey Sun.
            </p>
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={filmProjects} category="film" />
        </div>
      </main>
    </div>
  )
}
