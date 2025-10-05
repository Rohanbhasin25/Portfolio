import { Navigation } from "@/components/navigation"

const booksList = [
  {
    title: "The Aleph and Other Stories",
    author: "Jorge Luis Borges",
    year: "2025",
    status: "Currently Reading",
    notes:
      "Borges is my favourite short-story writer, a true conjurer. Really liked the End and The Two Kings and The Two Labyrinths from this one.",
  },
  {
    title: "Surely You're Joking Mr. Feynman?",
    author: "Richard Feynman",
    year: "2025",
    notes:
      'Always been obsessed with the "polymath", the "renaissance man" archetype and Feynman truly captures that. Utterly funny and insightful, his tales from Cornell, the Manhattan Project and Brazil will always stay with me.',
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: "2025",
    notes:
      "Really liked the parts detailing the obsessive nature with which Frankenstein built his monster. Didn't really like the aftermath and confrontation after that.",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    year: "2025",
    notes: "Harrowing and humbling at once, Frankl details the holocaust with intricacy and insight that inspires.",
  },
  {
    title: "The Internet of Money",
    author: "Andreas M. Antonopoulos",
    year: "2025",
    notes:
      "Really liked how Bitcoin acts as a dumb network like the Internet, and how it can be the new economic frontier. Got inspired to read this after watching some Balaji interviews.",
  },
  {
    title: "The Great Gatsby",
    author: "F Scott Fitzgerald",
    year: "2025",
    notes: "Liked the world building and Gatsby's quest for love but overall didn't find it to be that special",
  },
  {
    title: "We",
    author: "Yevgeny Zamyatin",
    year: "2025",
    notes:
      "Sort of a pre-cursor to 1984, Zamyatin builds a glassy world of perfection, exploring themes of utopia, determinism, control, authority, perfectionism, love, lust and enlightenment",
  },
  {
    title: "The Anthology of Balaji",
    author: "Eric Jorgenson",
    year: "2025",
    notes:
      "Always been a big fan of how bold, and somewhat crazy Balaji's ideas look, specially with the Network State. Jorgenson details his mental models, how he reads, what he reads and his visions to shy away from the dollar and death.",
  },
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson and William Rees-Mogg",
    year: "2025",
    notes: "Maybe the model of nation-states have fallen? Want to re-read to absorb this better.",
  },
  {
    title: "The Defense",
    author: "Vladimir Nabokov",
    year: "2025",
    notes:
      "Luzhin's derangement and obession that blurs line bewteen reality and the chessboard. I find Nabokov a bit hard to read but ultimately its worth getting through. Also really funny at times.",
  },
  {
    title: "Ficciones",
    author: "Jorge Luis Borges",
    year: "2025",
    notes:
      "Probably my favourite short-story or perhaps fictional writing of all time. Borges constructs multiverses, infinite libraries, permanent memory and recursive dreams all in the span of a few pages.",
  },
  {
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    year: "2025",
    notes:
      "Expands on a lot of ideas mentioned in Skin in the Game and Black Swan. My favourites include the Barbell Strategy, Antifragility of Jobs (employee vs taxi driver), the antifragility of information and fame amongst many others. Read twice, want to read again.",
  },
  {
    title: "The Foundation Pit",
    author: "Andrei Platonov",
    year: "2025",
    notes: "Dig deep enough to build a tower symbolising communistic utopia and you dig up a grave",
  },
  {
    title: "Kitchen Confidential",
    author: "Anthony Bourdain",
    year: "2024",
    notes:
      "Finished in one sitting. Bourdain writes with such humour, flair and sincerity, paints a completely different and grittier image of the culinary world.",
  },
  {
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    year: "2024",
    notes:
      "Nature of Asymmetries when there is presence of skin in the game, jobs which embody the idea, Minority Rule, IYI, Ludic Fallacy.",
  },
  {
    title: "Black Swan",
    author: "Nassim Nicholas Taleb",
    year: "2024",
    notes:
      'Loved the Turkey Problem, "history moves in leaps not steps", "all swans are white", verification, the disillusionment of "historical data", trust the surgeon who looks like a bodyguard.',
  },
  {
    title: "A Moveable Feast",
    author: "Ernest Hemingway",
    year: "2024",
    notes:
      "Partly what made me move for a semester abroad, Hemingway's time in Paris is equally a manual to writing well as it is a collection of stories in Paris and encounters with figures such as Stein, Fitzgerald, TS Eliot and others.",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    year: "2024",
    notes:
      "Jobs in India, Calligraphy, ideas of obsession and focus, the Pixar and NeXT years, the 2nd era at Apple with Jony Ive.",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    year: "2024",
    notes: 'Escaping competition, the "benevolence" of monopolies, frontiers of expansion, 0 to 1 vs 1 to N.',
  },
  {
    title: "Hitchcock/Truffaut",
    author: "François Truffaut",
    year: "2024",
    notes: "Collection of interviews of one master conducted by another.",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    year: "2024",
    notes: "Absurdit, funny and nihilistic",
  },
  {
    title: "When Breath becomes Air",
    author: "Paul Kalinithi",
    year: "2024",
    notes:
      "Brilliantly written, devastating, Kalinithi's memoir on his struggle with cancer as an oncologist tells a story of life, meaning and what it is to endure pain like no other",
  },
]

export default function BooksListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-times italic text-5xl text-foreground text-balance">Books</h1>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          {/* Books List */}
          <div className="space-y-6">
            {booksList.map((book, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-condensed text-xl font-semibold text-foreground font-sans">{book.title}</h3>
                    {book.status && (
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-helvetica rounded-full ${
                          book.status === "Currently Reading"
                            ? "bg-foreground text-background"
                            : book.status === "In Progress"
                              ? "bg-muted text-foreground"
                              : "bg-secondary text-foreground"
                        }`}
                      >
                        {book.status}
                      </span>
                    )}
                  </div>
                  <p className="font-helvetica text-muted-foreground">
                    {book.author} • {book.year}
                  </p>
                  <p className="font-helvetica text-foreground leading-relaxed text-pretty">{book.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
