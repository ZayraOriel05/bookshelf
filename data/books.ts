export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  progress: number;
  currentPage: number;
  totalPages: number;
  status: "want-to-read" | "currently-reading" | "read" | "dnf";
};

export const books: Book[] = [
  {
    id: "night-circus",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg",
    progress: 67,
    currentPage: 259,
    totalPages: 387,
    status: "currently-reading",
  },
  {
    id: "tomorrow-tomorrow",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg",
    progress: 34,
    currentPage: 140,
    totalPages: 416,
    status: "currently-reading",
  },
  {
    id: "evelyn-hugo",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: "https://covers.openlibrary.org/b/isbn/9781501139239-M.jpg",
    progress: 100,
    currentPage: 400,
    totalPages: 400,
    status: "read",
  },
  {
    id: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    cover: "https://covers.openlibrary.org/b/isbn/9781526622440-M.jpg",
    progress: 0,
    currentPage: 0,
    totalPages: 272,
    status: "want-to-read",
  },
];

export function getBookById(id: string) {
  return books.find((book) => book.id === id);
}
