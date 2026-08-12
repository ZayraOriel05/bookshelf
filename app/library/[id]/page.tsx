"use client";

import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getBookById } from "@/data/books";
import ProgressSlider from "@/components/ProgressSlider";
import ReadingStatus, {
  type ReadingStatusValue,
} from "@/components/ReadingStatus";
import ReadingSessionForm from "@/components/ReadingSessionForm";
import ReadingSessionList from "@/components/ReadingSessionList";
import type { ReadingSession } from "@/data/books";
import { useReading } from "@/context/ReadingContext";

export default function BookPage() {
  const params = useParams();

  const id = params.id as string;

  const book = getBookById(id);

  const [progress, setProgress] = useState(book?.progress ?? 0);

  const [status, setStatus] = useState<ReadingStatusValue>(
    book?.status ?? "want-to-read",
  );

  const [currentPage, setCurrentPage] = useState(book?.currentPage ?? 0);

  const { sessions, addSession } = useReading();
  const bookSessions = book
    ? sessions.filter((session) => session.bookId === book.id)
    : [];
  const [showSessionForm, setShowSessionForm] = useState(false);

  function handleAddSession(data: {
    pagesRead: number;
    duration: number;
    note: string;
  }) {
    if (!book) return;
    const startPage = currentPage;

    const endPage = Math.min(startPage + data.pagesRead, book.totalPages);

    const actualPagesRead = endPage - startPage;

    const newSession: ReadingSession = {
      id: crypto.randomUUID(),
      bookId: book.id,
      date: new Date().toISOString(),
      startPage,
      endPage,
      pagesRead: actualPagesRead,
      duration: data.duration,
      note: data.note,
    };

    addSession(newSession);

    setCurrentPage(endPage);

    const newProgress = Math.round((endPage / book.totalPages) * 100);

    setProgress(newProgress);

    setShowSessionForm(false);
  }

  if (!book) {
    return (
      <main className="min-h-screen bg-[#F8F3EA] px-6 py-10 text-[#332D2A]">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-sm text-[#756B65]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Library
          </Link>

          <h1 className="mt-10 font-serif text-4xl">Book not found</h1>
        </div>
      </main>
    );
  }

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
          <div className="overflow-hidden rounded-3xl bg-[#E8E0D7] shadow-sm ring-1 ring-black/5">
            <img
              src={book.cover}
              alt={`Cover of ${book.title}`}
              className="aspect-[2/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9B8F87]">
              {book.status === "currently-reading"
                ? "Currently reading"
                : book.status === "read"
                  ? "Read"
                  : "Want to read"}
            </p>

            <h1 className="mt-3 font-serif text-5xl leading-tight">
              {book.title}
            </h1>

            <p className="mt-3 text-lg text-[#756B65]">{book.author}</p>

            <section className="mt-10 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
              <ReadingStatus value={status} onChange={setStatus} />

              <div className="my-6 h-px bg-black/5" />

              <ProgressSlider
                value={progress}
                onChange={(value) => {
                  setProgress(value);

                  const page = Math.round((value / 100) * book.totalPages);

                  setCurrentPage(page);
                }}
              />

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                <div>
                  <p className="text-sm text-[#756B65]">Current page</p>

                  <input
                    type="number"
                    min="0"
                    max={book.totalPages}
                    value={currentPage}
                    onChange={(event) => {
                      const page = Number(event.target.value);

                      const clampedPage = Math.min(
                        Math.max(page, 0),
                        book.totalPages,
                      );

                      setCurrentPage(clampedPage);

                      const newProgress = Math.round(
                        (clampedPage / book.totalPages) * 100,
                      );

                      setProgress(newProgress);
                    }}
                    className="mt-1 w-24 bg-transparent font-serif text-2xl outline-none"
                  />
                </div>

                <div className="text-right">
                  <p className="text-sm text-[#756B65]">Total pages</p>

                  <p className="mt-1 font-serif text-2xl">{book.totalPages}</p>
                </div>
              </div>
            </section>

            <section className="mt-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#9B8F87]">
                    Reading activity
                  </p>

                  <h2 className="mt-1 font-serif text-3xl">Your sessions</h2>
                </div>

                {!showSessionForm && currentPage < book.totalPages && (
                  <button
                    type="button"
                    onClick={() => setShowSessionForm(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#332D2A] px-5 py-3 text-sm text-white transition hover:opacity-90"
                  >
                    <Plus className="h-4 w-4" />
                    Log session
                  </button>
                )}
              </div>

              {showSessionForm && (
                <ReadingSessionForm
                  currentPage={currentPage}
                  totalPages={book.totalPages}
                  onCancel={() => setShowSessionForm(false)}
                  onSubmit={handleAddSession}
                />
              )}

              <ReadingSessionList sessions={bookSessions} />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
