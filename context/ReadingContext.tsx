"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { ReadingSession } from "@/data/books";

type ReadingContextValue = {
  sessions: ReadingSession[];
  addSession: (session: ReadingSession) => void;
};

const ReadingContext = createContext<ReadingContextValue | null>(null);

type ReadingProviderProps = {
  children: ReactNode;
};

export function ReadingProvider({ children }: ReadingProviderProps) {
  const [sessions, setSessions] = useState<ReadingSession[]>([]);

  function addSession(session: ReadingSession) {
    setSessions((previous) => [session, ...previous]);
  }

  return (
    <ReadingContext.Provider
      value={{
        sessions,
        addSession,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export function useReading() {
  const context = useContext(ReadingContext);

  if (!context) {
    throw new Error("useReading must be used inside ReadingProvider");
  }

  return context;
}
