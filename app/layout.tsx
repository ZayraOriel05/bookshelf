import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import { ReadingProvider } from "@/context/ReadingContext";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Your personal reading journal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReadingProvider>
          {children}
        </ReadingProvider>

        <BottomNav />
      </body>
    </html>
  );
}
