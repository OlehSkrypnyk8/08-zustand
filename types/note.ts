export interface Note {
  readonly id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: NoteTag;
}

export interface CreateNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export type NoteTag = "Todo" | "Personal" | "Meeting" | "Shopping" | "Work";

export const NOTE_TAGS: NoteTag[] = [
  "Todo",
  "Personal",
  "Meeting",
  "Shopping",
  "Work",
];
