import type { Metadata } from "next";
import { Suspense } from "react";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import { NoteTag } from "@/types/note";

interface PageProps {
  params: Promise<{
    slug?: ("all" | NoteTag)[];
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = !slug || slug[0] === "all" ? "All" : slug[0];

  const title = `NoteHub ${tag} notes`;
  const description = `Browse ${tag.toLowerCase()} notes in the NoteHub application.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url:
        tag === "All"
          ? "https://notehub.app/notes/filter/all"
          : `https://notehub.app/notes/filter/${tag}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: `NoteHub ${tag} notes`,
        },
      ],
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = !slug || slug[0] === "all" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes({ tag, page: 1, perPage: 5 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {}
      <Suspense fallback={<div>Loading notes...</div>}>
        <NotesClient tag={tag} />
      </Suspense>
    </HydrationBoundary>
  );
}
