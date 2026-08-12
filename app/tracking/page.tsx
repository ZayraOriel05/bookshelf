import { BarChart3, BookOpen, Clock3 } from "lucide-react";

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#332D2A]">
      <div className="mx-auto min-h-screen max-w-7xl px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <header>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9B8F87]">
            Your reading activity
          </p>

          <h1 className="font-serif text-5xl tracking-tight">Tracking</h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#756B65]">
            See how your reading habits grow over time.
          </p>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <StatCard
            icon={<BookOpen className="h-5 w-5" />}
            label="Books read"
            value="0"
            className="bg-[#F5DCE5]"
          />

          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            label="Reading time"
            value="0h"
            className="bg-[#DDE8F5]"
          />

          <StatCard
            icon={<BarChart3 className="h-5 w-5" />}
            label="This month"
            value="0"
            className="bg-[#E4EFD9]"
          />
        </section>

        <section className="mt-8 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5">
          <h2 className="font-serif text-2xl">Reading activity</h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#756B65]">
            Your reading activity will appear here once you start logging
            reading sessions.
          </p>
        </section>
      </div>
    </main>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
};

function StatCard({ icon, label, value, className = "" }: StatCardProps) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
        {icon}
      </div>

      <p className="mt-6 text-sm text-[#756B65]">{label}</p>

      <p className="mt-1 font-serif text-4xl">{value}</p>
    </div>
  );
}
