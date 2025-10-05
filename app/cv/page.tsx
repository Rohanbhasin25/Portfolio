import { Navigation } from "@/components/navigation"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-times italic text-5xl text-foreground text-balance font-extralight tracking-tighter">
              CV
            </h1>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Education Section */}
            <section>
              <h2 className="font-times italic text-3xl text-foreground mb-2 font-extralight border-b border-foreground pb-1">
                Education
              </h2>

              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-helvetica text-xl text-foreground">Georgia Institute of Technology</h3>
                  <span className="font-helvetica text-sm text-foreground">Expected Graduation, May 2026</span>
                </div>
                <p className="font-helvetica italic text-foreground">Bachelor of Science in Computer Science</p>
                <p className="font-helvetica text-sm text-foreground">Atlanta, Georgia</p>
                <ul className="list-disc list-inside space-y-2 font-helvetica text-foreground">
                  <li>
                    <strong>GPA:</strong> 3.73/4.0 (Dean's List Award)
                  </li>
                  <li>
                    <strong>Relevant Coursework:</strong> Introduction to OOP, Data Structures, Computer Systems, Linear
                    Algebra, Discrete Mathematics, UI/UX Design, NLP for Financial Markets, Advanced Algorithms,
                    Introduction to AI, Cognitive Science
                  </li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="font-times italic text-3xl text-foreground mb-2 font-extralight border-b border-foreground pb-1">
                Experience
              </h2>

              <div className="space-y-8 mt-6">
                {/* Arcesium */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-helvetica text-xl text-foreground">Arcesium</h3>
                    <span className="font-helvetica text-sm text-foreground">May 2025 – August 2025</span>
                  </div>
                  <p className="font-helvetica italic text-foreground mb-1">Product Manager Intern</p>
                  <p className="font-helvetica text-sm text-foreground mb-3">New York City, New York</p>
                  <ul className="list-disc list-inside space-y-2 font-helvetica text-foreground ml-4">
                    <li>
                      Owned 2 Agular integrations; unified private markets & fixed income data via partnerships with FMI
                      Markets/Axess
                    </li>
                    <li>
                      Shipped <strong>13 data models</strong> and <strong>2 dashboards</strong> with{" "}
                      <strong>50+ semantic validation & data governance rules</strong> & collaborated across{" "}
                      <strong>15+ stakeholders</strong> from pre-sales, infra, product, design, and engineering teams;
                    </li>
                    <li>
                      Wrote the <strong>2026 roadmap & product requirements</strong> with{" "}
                      <strong>10+ feature descriptions & Figma Mockups</strong> based on{" "}
                      <strong>30+ user stories</strong> complied from customer interviews using contextual inquiry;
                    </li>
                    <li>
                      Led product pitches by designing demo flows for LPAC analyst, IR & valuation lead user personas
                    </li>
                    <li>
                      Used Looker, SQL & Tableau to visualise <strong>volatility, depth, yield curves</strong>, and{" "}
                      <strong>volume breakdowns</strong>; reduced <strong>time-to-insight by 900%</strong> by replacing
                      static industry PDFs with interactive dashboards with <strong>4s query latency</strong>.
                    </li>
                  </ul>
                </div>

                <hr className="border-foreground/20" />

                {/* Saviynt */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-helvetica text-xl text-foreground">Saviynt</h3>
                    <span className="font-helvetica text-sm text-foreground">May 2024 – August 2024</span>
                  </div>
                  <p className="font-helvetica italic text-foreground mb-1">Product Manager Intern</p>
                  <p className="font-helvetica text-sm text-foreground mb-3">Atlanta, Georgia</p>
                  <ul className="list-disc list-inside space-y-2 font-helvetica text-foreground ml-4">
                    <li>
                      Led product roadmap for LLM based descriptions & querying feature for <strong>3000+</strong>{" "}
                      undocumented software entitlements
                    </li>
                    <li>
                      Gathered pain-points from User Acceptance Testing (UAT) from <strong>30+ customers</strong>,
                      created a Grading Criteria on AthinaAI to prevent hallucinations; Queried <strong>41,0GB</strong>{" "}
                      comments using SQL for RAG pipeline using PineCone's VectorDB
                    </li>
                    <li>
                      Wrote first <strong>PRD</strong>, used Agile frameworks (Scrum) to run code sprints,
                      retrospectives, & defined success criteria & KPIs
                    </li>
                  </ul>
                </div>

                <hr className="border-foreground/20" />

                {/* Vitrina AI */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-helvetica text-xl text-foreground">
                      Vitrina AI (SRI Ventures funded B2B Entertainment Sourcing Startup)
                    </h3>
                    <span className="font-helvetica text-sm text-foreground">May 2023 – August 2023</span>
                  </div>
                  <p className="font-helvetica italic text-foreground mb-1">Software Engineering Intern</p>
                  <p className="font-helvetica text-sm text-foreground mb-3">Menlo Park, California (Remote)</p>
                  <ul className="list-disc list-inside space-y-2 font-helvetica text-foreground ml-4">
                    <li>
                      Built a Search-Engine for B2B entertainment services sourcing with <strong>TF-IDF</strong> &
                      hosted UI using Flask, React & Azure
                    </li>
                    <li>
                      <strong>Led team of 4</strong> for product UI/UX by adding query history & PDF preview features
                      for 2000+ Talent/Press Releases
                    </li>
                    <li>
                      Added search to PDFs with ElasticSearch & used Word-Embeddings to{" "}
                      <strong>increase search-query speed by 60%</strong>
                    </li>
                  </ul>
                </div>

                <hr className="border-foreground/20" />

                {/* Financial Services Innovation Lab */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-helvetica text-xl text-foreground">
                      Financial Services Innovation Lab at Georgia Institute of Technology
                    </h3>
                    <span className="font-helvetica text-sm text-foreground">August 2023 – Present</span>
                  </div>
                  <p className="font-helvetica italic text-foreground mb-1">Undergraduate Researcher</p>
                  <p className="font-helvetica text-sm text-foreground mb-3">Atlanta, Georgia</p>
                  <ul className="list-disc list-inside space-y-2 font-helvetica text-foreground ml-4">
                    <li>
                      Led construction of a 9-tone dimension dataset (2700+ rows) for Earnings Calls Transcripts to aid
                      portfolio construction
                    </li>
                    <li>
                      Wrote ingestion pipeline using NLTK, visualized violin plots, correlation matrices; Accepted by{" "}
                      <strong>NeurIPS, D&B, 2024</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section>
              <h2 className="font-times italic text-3xl text-foreground mb-2 font-extralight border-b border-foreground pb-1">
                Technical Skills
              </h2>

              <div className="space-y-4 mt-6">
                <div>
                  <p className="font-helvetica text-foreground">
                    <strong>Languages:</strong> Python, Java, C#, HTML, CSS, Swift, SQL, R, Matlab, Javascript, C++, C,
                    Assembly, Node.js
                  </p>
                </div>
                <div>
                  <p className="font-helvetica text-foreground">
                    <strong>Developer Tools:</strong> VS Code, Trello, Figma, Jira, Android Studio, XCode, AWS, RStudio,
                    Docker, Jupyter, Github, Unity
                  </p>
                </div>
                <div>
                  <p className="font-helvetica text-foreground">
                    <strong>Frameworks:</strong> Agile, Matplotlib, Numpy, Tensorflow, Git, React.js, Pandas, MongoDB,
                    Dialogflow, Twilio
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
