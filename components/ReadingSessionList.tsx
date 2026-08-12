"use client";

import type { ReadingSession } from "@/data/books";

type ReadingSessionListProps = {
  sessions: ReadingSession[];
};

export default function ReadingSessionList({
  sessions,
}: ReadingSessionListProps) {
  if (sessions.length === 0) {
    return (
      <div className="mt-5 rounded-3xl bg-white/70 p-6 text-center ring-1 ring-black/5">
        <p className="font-serif text-xl">No reading sessions yet</p>

        <p className="mt-2 text-sm text-[#756B65]">
          Your reading activity will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-3">
      {sessions.map((session) => (
        <article
          key={session.id}
          className="rounded-3xl bg-white/70 p-5 ring-1 ring-black/5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-[#9B8F87]">
                {new Date(session.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p className="mt-1 font-serif text-xl">
                Pages {session.startPage} → {session.endPage}
              </p>
            </div>

            <div className="text-right text-sm text-[#756B65]">
              <p>{session.pagesRead} pages</p>
              <p>{session.duration} min</p>
            </div>
          </div>

          {session.note && (
            <p className="mt-4 border-t border-black/5 pt-4 text-sm leading-6 text-[#756B65]">
              “{session.note}”
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
