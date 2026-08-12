import { Plus, Search } from "lucide-react";
import BookCard from "@/components/BookCard";

const currentlyReading = [
  {
    id: "night-circus",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg",
    progress: 67,
  },
  {
    id: "tomorrow-tomorrow",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg",
    progress: 34,
  },
];

const books = [
  {
    id: "night-circus",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg",
    progress: 67,
  },
  {
    id: "tomorrow-tomorrow",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg",
  },
  {
    id: "evelyn-hugo",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: "https://covers.openlibrary.org/b/isbn/9781501139239-L.jpg",
  },
  {
    id: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    cover: "https://covers.openlibrary.org/b/isbn/9781526622440-M.jpg",
  },
];

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#332D2A]">
      <div className="mx-auto min-h-screen max-w-7xl px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <header>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9B8F87]">
            Your collection
          </p>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-5xl tracking-tight">Library</h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#756B65]">
                All the books you've read, are reading, or want to read.
              </p>
            </div>

            <button
              type="button"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#332D2A] text-white shadow-sm transition hover:scale-105"
              aria-label="Add a book"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-black/5">
          <Search className="h-5 w-5 text-[#9B8F87]" />

          <input
            type="search"
            placeholder="Search your library..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#A59B94]"
          />
        </div>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Currently reading</h2>

            <span className="text-sm text-[#9B8F87]">
              {currentlyReading.length} books
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentlyReading.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Your shelves</h2>

            <button
              type="button"
              className="text-sm text-[#756B65] hover:text-[#332D2A]"
            >
              View all
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {books.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
