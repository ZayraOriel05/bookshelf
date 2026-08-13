"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import {
  books as initialBooks,
  type Book,
  type ReadingSession,
} from "@/data/books";

type ReadingContextValue = {
  books: Book[];
  sessions: ReadingSession[];
  addSession: (session: ReadingSession) => void;
  updateBookProgress: (bookId: string, currentPage: number) => void;
  updateBookStatus: (bookId: string, status: Book["status"]) => void;
};

const ReadingContext = createContext<ReadingContextValue | null>(null);

type ReadingProviderProps = {
  children: ReactNode;
};

export function ReadingProvider({ children }: ReadingProviderProps) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const [sessions, setSessions] = useState<ReadingSession[]>([]);

  function addSession(session: ReadingSession) {
    setSessions((previous) => [session, ...previous]);
  }

  function updateBookProgress(bookId: string, currentPage: number) {
    setBooks((previous) =>
      previous.map((book) => {
        if (book.id !== bookId) {
          return book;
        }

        const progress = Math.round((currentPage / book.totalPages) * 100);

        return {
          ...book,
          currentPage,
          progress,
        };
      }),
    );
  }

  function updateBookStatus(bookId: string, status: Book["status"]) {
    setBooks((previous) =>
      previous.map((book) => {
        if (book.id !== bookId) {
          return book;
        }

        return {
          ...book,
          status,
        };
      }),
    );
  }

  return (
    <ReadingContext.Provider
      value={{
        books,
        sessions,
        addSession,
        updateBookProgress,
        updateBookStatus,
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
