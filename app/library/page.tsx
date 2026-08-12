import { BookOpen, Plus, Search } from "lucide-react";

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
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white/60 px-6 py-20 text-center ring-1 ring-black/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE8F5]">
              <BookOpen className="h-7 w-7" strokeWidth={1.8} />
            </div>

            <h2 className="mt-6 font-serif text-2xl">
              Your shelves are waiting.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#756B65]">
              Add your first book and start building your reading world.
            </p>

            <button
              type="button"
              className="mt-6 rounded-full bg-[#332D2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Add your first book
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
