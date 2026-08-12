"use client";

import type { ReadingSession } from "@/data/books";

type ReadingActivityProps = {
  sessions: ReadingSession[];
};

function getDateKey(date: string) {
  const parsedDate = new Date(date);

  return `${parsedDate.getFullYear()}-${String(
    parsedDate.getMonth() + 1,
  ).padStart(2, "0")}-${String(parsedDate.getDate()).padStart(2, "0")}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getReadingDays(sessions: ReadingSession[]) {
  return new Set(sessions.map((session) => getDateKey(session.date)));
}

function calculateCurrentStreak(sessions: ReadingSession[]) {
  const readingDays = getReadingDays(sessions);

  const today = new Date();

  let streak = 0;

  const currentDate = new Date(today);

  while (true) {
    const key = getDateKey(currentDate.toISOString());

    if (!readingDays.has(key)) {
      break;
    }

    streak += 1;

    currentDate.setDate(currentDate.getDate() - 1);
  }

  return streak;
}

export default function ReadingActivity({ sessions }: ReadingActivityProps) {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = getDaysInMonth(year, month);

  const firstDay = getFirstDayOfMonth(year, month);

  const readingDays = getReadingDays(sessions);

  const currentStreak = calculateCurrentStreak(sessions);

  const monthName = today.toLocaleDateString("en-CA", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <section className="mt-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-[#9B8F87]">
            Reading activity
          </p>

          <h2 className="mt-1 font-serif text-3xl">{monthName}</h2>
        </div>

        <div className="rounded-full bg-white/70 px-4 py-2 text-sm ring-1 ring-black/5">
          🔥 {currentStreak} day
          {currentStreak === 1 ? "" : "s"} streak
        </div>
      </div>

      <div className="mt-5 rounded-3xl bg-white/70 p-5 ring-1 ring-black/5 sm:p-7">
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-[#9B8F87] sm:gap-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-7 gap-2 sm:gap-3">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const dateKey = `${year}-${String(month + 1).padStart(
              2,
              "0",
            )}-${String(day).padStart(2, "0")}`;

            const hasRead = readingDays.has(dateKey);

            const isToday = day === today.getDate();

            return (
              <div
                key={dateKey}
                className={[
                  "flex aspect-square items-center justify-center rounded-2xl text-sm transition",
                  hasRead
                    ? "bg-[#332D2A] text-white"
                    : "bg-[#F1ECE5] text-[#9B8F87]",
                  isToday
                    ? "ring-2 ring-[#9B8F87] ring-offset-2 ring-offset-white/70"
                    : "",
                ].join(" ")}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between text-xs text-[#9B8F87]">
          <span>
            {readingDays.size} reading day
            {readingDays.size === 1 ? "" : "s"} this month
          </span>

          <span>{daysInMonth} days</span>
        </div>
      </div>
    </section>
  );
}
