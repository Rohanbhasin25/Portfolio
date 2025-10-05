import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-times italic text-5xl text-foreground text-balance font-extralight tracking-tighter">About</h1>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">
                I was born and raised in New Delhi, which fundamentally shaped my outlook on community, business,{" "}
                <em>mehfil</em> (there's no word quite like this in english), tradition and food (I'm always trying to
                find a butter chicken that's better than my favourite spot). Growing up, I spent hours sketching,
                playing cricket/squash/football/table tennis and reading everything from Enid Blyton, Roald Dahl, JK
                Rowling and Ruskin Bond.
              </p>

              <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">
                I try to design, research and code products people want to use and make films people want to see. A lot
                of my thought goes into storytelling, and broadly, how information is compressed or abstracted, whether
                in the form of code, a novel or language itself. Recently, my musings have been around the definition of
                creativity and whether LLMs are truly capable of it.
              </p>

              <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">
                Although my formal background is in Computer Science, Machine Learning, Statistics or HCI, given my sort
                of autodidact way of learning, I try to dive deep into anything that piques my curiosity. This has been
                trying to (and failing) to learn German, making 2D shooter games, trying to fit a very rudimentary
                assistant on my forearm or charcoal art (my mom's a painter, so I guess I inherited some genes).
              </p>

              <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">
                I love a good debate and conversations that flow seamlessly. One of the greatest pleasures I find in
                life is to talk about things like determinism, randomness, Celebrity PR, Antifragility or Messi in the
                same night (usually after a night out) with my friends.
              </p>

              <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">
                Currently, I'm doing a semester abroad in Metz, France, which is about an hour away from Paris. Here,
                I'm trying to work on my French, a travel docuseries/video essays and some design projects. Before that
                I was in New York, where I interned at Arcesium, a DE Shaw spinoff, helping build products for Private
                Markets and Fixed-Income Trading on top of their data platform. At college, I do some research work at
                our Financial Services Lab, lead the product club and direct short films for our film club, Buzz
                Studios.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
