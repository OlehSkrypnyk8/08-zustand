"use client";

import css from "./NotePreview.module.css";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import Loading from "@/app/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  id: string;
}

function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;
  if (isError || !note)
    return <div className={css.error}>Error loading note.</div>;

  const dateToShow = note.updatedAt || note.createdAt;

  const formattedDate = new Date(dateToShow).toLocaleString("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Modal onClose={handleClose}>
      <h2 className={css.title}>{note.title}</h2>

      <div className={css.container}>
        <p className={css.content}>{note.content}</p>
        <div className={css.footer}>
          <span className={css.tag}>{note.tag}</span>
        </div>{" "}
        <span className={css.date}>{formattedDate}</span>
      </div>
      <button className={css.backBtn} onClick={handleClose}>
        Back
      </button>
    </Modal>
  );
}

export default NotePreview;
