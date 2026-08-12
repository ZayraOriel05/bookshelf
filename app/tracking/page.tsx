"use client";

import { useReading } from "@/context/ReadingContext";
import { books } from "@/data/books";

function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  }

  if (remainingMinutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

export default function TrackingPage() {
  const { sessions } = useReading();

  const pagesRead = sessions.reduce(
    (total, session) => total + session.pagesRead,
    0,
  );

  const readingMinutes = sessions.reduce(
    (total, session) => total + session.duration,
    0,
  );

  const currentlyReading = books.filter(
    (book) => book.status === "currently-reading",
  );

  const booksFinished = books.filter((book) => book.status === "read");

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#332D2A]">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-[#9B8F87]">
            Your reading
          </p>

          <h1 className="mt-2 font-serif text-5xl">Tracking</h1>

          <p className="mt-4 max-w-xl text-[#756B65]">
            A quiet look at your reading habits, progress, and time spent with
            books.
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
            <p className="text-sm text-[#756B65]">Pages read</p>

            <p className="mt-2 font-serif text-4xl">{pagesRead}</p>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
            <p className="text-sm text-[#756B65]">Reading time</p>

            <p className="mt-2 font-serif text-4xl">
              {formatMinutes(readingMinutes)}
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
            <p className="text-sm text-[#756B65]">Sessions</p>

            <p className="mt-2 font-serif text-4xl">{sessions.length}</p>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-[#9B8F87]">
              Currently reading
            </p>

            <h2 className="mt-1 font-serif text-3xl">Your books</h2>
          </div>

          <div className="mt-5 grid gap-4">
            {currentlyReading.map((book) => (
              <div
                key={book.id}
                className="rounded-3xl bg-white/70 p-5 ring-1 ring-black/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-xl">{book.title}</p>

                    <p className="mt-1 text-sm text-[#756B65]">{book.author}</p>
                  </div>

                  <p className="font-serif text-2xl">{book.progress}%</p>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E6DED5]">
                  <div
                    className="h-full rounded-full bg-[#332D2A]"
                    style={{
                      width: `${book.progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <p className="text-sm uppercase tracking-[0.15em] text-[#9B8F87]">
            Finished
          </p>

          <h2 className="mt-1 font-serif text-3xl">Books completed</h2>

          <p className="mt-3 text-[#756B65]">
            {booksFinished.length} book
            {booksFinished.length === 1 ? "" : "s"} finished.
          </p>
        </section>
      </div>
    </main>
  );
}
