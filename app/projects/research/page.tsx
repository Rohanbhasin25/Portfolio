import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const researchProjects = [
  {
    id: "subjectiveqa",
    title: "SubjectiveQA",
    description:
      "This paper introduces Subjective-QA, a dataset of 49,446 annotated Earnings Call QAs labeled across six subjective features. It shows how answers, though factual, may lack clarity or relevance and demonstrates strong model performance and generalizability.",
    achievement: "Accepted to NeurIPS D&B Track, 2025.",
    image: "/projects/research/subjectiveqa-thumbnail.png",
    category: "research",
    externalLink: "https://arxiv.org/abs/2410.20651",
  },
  {
    id: "agrammatism-brocas-aphasia",
    title: "Agrammatism in Broca's Aphasia",
    description:
      "This paper presents a Bi-Directional RNN model to detect agrammatism in bilingual speech, enabling early diagnosis and timely therapy in multilingual settings where standard tests may be inaccessible.",
    achievement: "Winner, Gold Medal, Indian National Science and Engineering Fair",
    image: "/projects/research/agrammatism-thumbnail.png",
    category: "research",
    externalLink: "https://github.com/Rohanbhasin25/Agrammatism-Diagnosis-using-LSTM",
  },
]

export default function ResearchProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-times text-5xl text-foreground text-balance">Research</h1>
            <div className="w-24 h-1 bg-foreground"></div>
            <div className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl space-y-4">
              <p>
                I've been involved with the Financial Services and Innovation Lab at Georgia Tech since 2023, working on
                projects such as tonal analysis for Earnings Call Transcripts, Feature extraction from investment memos
                and hawkish/dovish classifications for Central Bank Policies.
              </p>
              <p>
                To me good research is a pre-cursor to focusing on the right problems with the right approach. So, I
                conducted some independent research on topics I've been interested in such as bilingual Broca's Aphasia
                or{" "}
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vQqvfzY_JQhJ6YqL6b0gaBaCFmWkPGKahldNMPambothOlsZG3viPDDx9nA0MC_BA/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "#6f82d1" }}
                >
                  Internet Penetration's Impact on the Indian Economy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={researchProjects} category="research" />
        </div>
      </main>
    </div>
  )
}
