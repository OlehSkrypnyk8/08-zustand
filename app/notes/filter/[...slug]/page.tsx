import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import { fetchNotes } from "@/lib/api";
import { NoteTag } from "@/types/note";

interface FilteredNotesProps {
  params: Promise<{
    slug?: ("all" | NoteTag)[];
  }>;
}

export default async function FilteredNotes({ params }: FilteredNotesProps) {
  const queryClient = new QueryClient();
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const tag = !slug || slug[0] === "all" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes({ tag, page: 1, perPage: 5 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
