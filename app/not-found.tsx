import type { Metadata } from "next";
import css from "@/app/not-found.module.css";

export const metadata: Metadata = {
  title: "404 – Page Not Found | NoteHub",
  description:
    "404 – The page you are looking for does not exist in the NoteHub application.",

  metadataBase: new URL("https://notehub.app"),

  alternates: {
    canonical: "/404",
  },

  openGraph: {
    title: "404 – Page Not Found | NoteHub",
    description:
      "The page you are trying to access does not exist in the NoteHub application.",
    url: "https://notehub.app/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404 Page",
      },
    ],
    type: "website",
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
