"use client";

import { useState } from "react";

type ReadingSessionFormProps = {
  currentPage: number;
  totalPages: number;
  onCancel: () => void;
  onSubmit: (data: {
    pagesRead: number;
    duration: number;
    note: string;
  }) => void;
};

export default function ReadingSessionForm({
  currentPage,
  totalPages,
  onCancel,
  onSubmit,
}: ReadingSessionFormProps) {
  const [pagesRead, setPagesRead] = useState("");
  const [duration, setDuration] = useState("");
  const [note, setNote] = useState("");

  const maxPages = Math.max(totalPages - currentPage, 0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pages = Number(pagesRead);
    const minutes = Number(duration);

    if (pages <= 0 || minutes <= 0) {
      return;
    }

    const safePages = Math.min(pages, maxPages);

    if (safePages <= 0) {
      return;
    }

    onSubmit({
      pagesRead: safePages,
      duration: minutes,
      note: note.trim(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-2xl">Log reading session</h3>

        <p className="text-sm text-[#9B8F87]">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-[#756B65]">Pages read</span>

          <input
            type="number"
            min="1"
            max={maxPages}
            value={pagesRead}
            onChange={(event) => setPagesRead(event.target.value)}
            placeholder="21"
            className="mt-2 w-full rounded-2xl bg-[#F1ECE5] px-4 py-3 outline-none ring-1 ring-transparent transition focus:ring-[#9B8F87]"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-[#756B65]">Reading time</span>

          <div className="mt-2 flex items-center rounded-2xl bg-[#F1ECE5] px-4 ring-1 ring-transparent focus-within:ring-[#9B8F87]">
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              placeholder="32"
              className="w-full bg-transparent py-3 outline-none"
              required
            />

            <span className="text-sm text-[#9B8F87]">min</span>
          </div>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm text-[#756B65]">Note</span>

        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="How did the reading session feel?"
          rows={3}
          className="mt-2 w-full resize-none rounded-2xl bg-[#F1ECE5] px-4 py-3 outline-none ring-1 ring-transparent transition focus:ring-[#9B8F87]"
        />
      </label>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full px-5 py-2.5 text-sm text-[#756B65] transition hover:bg-[#F1ECE5]"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-full bg-[#332D2A] px-5 py-2.5 text-sm text-white transition hover:opacity-90"
        >
          Log session
        </button>
      </div>
    </form>
  );
}
