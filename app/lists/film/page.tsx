import { Navigation } from "@/components/navigation"

const favouriteFilms = [
  "Om Shanti Om",
  "The Social Network",
  "Parasite",
  "Jurassic Park",
  "Phantom Thread",
  "Oppenheimer",
  "Good Will Hunting",
  "Midnight in Paris",
  "2001: A Space Odyssey",
  "Eyes Wide Shut",
  "The Dark Knight",
  "Spider-man 2",
  "Zindagi na Milegi Dobara",
  "Schindler's List",
  "The Godfather",
  "Harry Potter and the Prisoner of Azkaban",
  "Lost in Translation",
  "Apocalypse Now",
  "Monsoon Wedding",
  "Black Swan",
  "The Martian",
  "Fight Club",
  "Piku",
  "Incendies",
]

const recentWatches = [
  "The Master",
  "Decision to Leave",
  "Birdman",
  "Clockwork Orange",
  "Don 1 (can't even count)",
  "Frances Ha",
  "Fight Club (9th rewatch)",
  "Dunkirk",
  "Don 2 (7th rewatch)",
  "After Hours",
  "Dil Dhakadne Do (can't count anymore)",
  "Chak de India",
  "Vertigo",
  "Before Sunset",
  "Before Sunrise (3rd rewatch)",
  "Spectre",
  "Gravity",
  "Y tu Mama Tambien",
  "1917",
  "The Namesake",
  "A Real Pain",
  "Malena",
  "Monsoon wedding (2nd time)",
  "Parasite (can't count anymore)",
  "Moneyball (3rd time)",
  "A Rainy Day in New York",
  "Match Point",
  "Cafe Society",
  "Good Will Hunting (lost count)",
  "Mystic River (where's my daughter?!!??)",
  "Enemy",
  "Blue Jasmine",
  "500 days of summer",
  "Barry Lyndon (third time)",
  "Goodfellas",
  "Perfect Blue (inspired the Black Swan)",
  "The Lunchbox (2nd time)",
  "Godfather 1 (6th time)",
  "Memento",
  "Roma",
  "October",
  "The imitation game (prolly the 5th time)",
  "Gladiator (lost count)",
  "The Martian (lost count)",
  "Anora",
  "The Girl with the Dragon Tattoo",
  "Billu",
  "Wall Street",
  "Kapoor and Sons",
  "English Vinglish",
  "Dear Zindagi",
  "Ex Machina",
  "The Substance",
  "Masoom",
  "Incendies",
  "Ye Jawani hai Deewani (lost count)",
  "Fight Club (oh boy)",
  "Piku (again)",
  "Piku",
  "My name is Khan",
  "Her",
  "Padmavat",
  "Incoherence (short)",
  "Vicky Kristina Barcelona",
  "Annie Hall",
  "The Dark Knight (lost count)",
  "Two Lovers",
  "Two Cars, One Night (short)",
  "Days of Heaven",
  "The Big Shave (short)",
  "Coffee and Cigarettes (short)",
  "Phantom thread",
  "Boogie Nights",
  "Memories of Murder",
  "The Neighbour's Window (short)",
  "Juice (short)",
  "American Beauty",
  "Sicario",
  "Punch Drunk Love",
  "Oldboy",
  "Where is the friend's house",
  "Pi",
  "The Whale",
  "Pulp Fiction (lost count)",
  "Django Unchained",
  "Once upon a time in Hollywood",
  "Dil Se",
  "Dune 2",
  "Tamasha (lost count)",
  "Insomnia",
  "Rockstar",
  "The Bear",
  "The Wonderful Story of Henry Sugar",
  "The Royal Tenenbaums",
  "Gone girl (3rd time)",
  "Requiem for a Dream",
  "Grand Budapest Hotel",
  "Psycho",
  "The Matrix",
  "ET",
  "Silver Linings Playbook",
  "Ludo",
  "The Cook (short)",
  "The Big Short",
  "La La Land",
  "Barfi (lost count)",
  "Godfather Part 2",
  "Challengers",
  "Catch me if you can",
  "The Curious Case of Benjamin Button",
  "Kahani",
  "Nocturnal Animals",
  "The Nightcrawler",
  "Get out",
]

export default function FilmListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-times italic text-5xl text-foreground text-balance">Films</h1>
            <div className="w-24 h-1 bg-foreground"></div>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty max-w-3xl">
              I watch a lot of films and think a lot about them. Here are some (in hindsight a lot) of my favourites (in
              no particular order):
            </p>
          </div>

          {/* Favourite Films */}
          <div className="space-y-4">
            <ul className="space-y-2 font-helvetica text-foreground">
              {favouriteFilms.map((film, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{film}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-helvetica text-2xl font-semibold text-foreground">Others</h2>
            <ul className="space-y-2 font-helvetica text-foreground">
              {recentWatches.map((film, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{film}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
