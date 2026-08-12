"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Library, BarChart3 } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-[#FBF8F2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
        <NavItem href="/" label="Home" icon={Home} active={pathname === "/"} />

        <NavItem
          href="/library"
          label="Library"
          icon={Library}
          active={pathname.startsWith("/library")}
        />

        <NavItem
          href="/tracking"
          label="Tracking"
          icon={BarChart3}
          active={pathname.startsWith("/tracking")}
        />
      </div>
    </nav>
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
