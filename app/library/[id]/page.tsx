import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

type BookPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;

  const bookName = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#332D2A]">
      <div className="mx-auto min-h-screen max-w-5xl px-6 pb-28 pt-8 md:px-10 lg:px-16">
        <Link
          href="/library"
          className="inline-flex items-center gap-2 text-sm text-[#756B65] transition hover:text-[#332D2A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Library
        </Link>

        <section className="mt-10 grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
          <div className="aspect-[2/3] rounded-3xl bg-[#E8E0D7] shadow-sm ring-1 ring-black/5">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <BookOpen className="h-12 w-12 text-[#9B8F87]" />

              <p className="mt-4 text-sm text-[#9B8F87]">Book cover</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9B8F87]">
              Your book
            </p>

            <h1 className="mt-3 font-serif text-5xl leading-tight">
              {bookName}
            </h1>

            <p className="mt-3 text-lg text-[#756B65]">
              Book details will appear here.
            </p>

            <div className="mt-8 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
              <p className="text-sm leading-6 text-[#756B65]">
                This page will eventually contain the book's cover, author,
                rating, reading status, progress, notes, reading sessions,
                dates, and personal thoughts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
