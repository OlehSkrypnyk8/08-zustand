import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CreateNote } from "@/types/note";

const initialDraft: CreateNote = {
  title: "",
  content: "",
  tag: "Todo",
};

interface NoteStore {
  draft: CreateNote;
  setDraft: (note: Partial<CreateNote>) => void;
  clearDraft: () => void;
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) =>
        set((state) => ({
          draft: { ...state.draft, ...note },
        })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "note-draft-storage",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
