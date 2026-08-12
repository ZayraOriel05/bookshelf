import Link from "next/link";
import { BookOpen, Home, Library, BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#332D2A]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        {/* Main content */}
        <section className="flex-1 px-6 pb-28 pt-10 md:px-10 lg:px-16">
          <header className="mb-10">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9B8F87]">
              Your reading journal
            </p>

            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              Welcome back.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#756B65]">
              Keep track of what you're reading, what you've loved, and where
              your reading life is taking you.
            </p>
          </header>

          {/* Empty dashboard placeholder */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Reading goal"
              description="Your yearly reading progress will appear here."
              className="bg-[#F5DCE5]"
            />

            <DashboardCard
              title="Currently reading"
              description="Books you're reading right now will appear here."
              className="bg-[#DDE8F5]"
            />

            <DashboardCard
              title="This month"
              description="Your monthly reading activity will appear here."
              className="bg-[#E4EFD9]"
            />
          </div>

          <div className="mt-8 rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />

              <h2 className="font-serif text-2xl">Your reading world</h2>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#756B65]">
              This space will eventually become your personalized reading
              dashboard, including your books, progress, activity, goals,
              statistics, and monthly Wrapped.
            </p>
          </div>
        </section>

        {/* Bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-[#FBF8F2]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
            <NavItem href="/" label="Home" icon={Home} active />

            <NavItem href="/library" label="Library" icon={Library} />

            <NavItem href="/tracking" label="Tracking" icon={BarChart3} />
          </div>
        </nav>
      </div>
    </main>
  );
}

type DashboardCardProps = {
  title: string;
  description: string;
  className?: string;
};

function DashboardCard({
  title,
  description,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`min-h-48 rounded-3xl p-6 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <h2 className="font-serif text-2xl">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-[#665D58]">{description}</p>
    </div>
  );
}

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  active?: boolean;
};

function NavItem({ href, label, icon: Icon, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex min-w-20 flex-col items-center gap-1 rounded-2xl px-4 py-2 text-xs transition ${
        active
          ? "bg-[#EFE7DD] text-[#332D2A]"
          : "text-[#8B817A] hover:bg-[#F1ECE5]"
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />

      <span>{label}</span>
    </Link>
  );
}
