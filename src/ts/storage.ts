import { NoteProps } from "./types";
import { RENDER_NOTES_EVENT } from "./actions.js";

const STORAGE_KEY: string = "notes";
export const notes: NoteProps[] = [];

export const availableStorage = (): boolean => {
  return typeof Storage !== undefined;
};

export const loadStorage = () => {
  const getNotes: string | null = localStorage.getItem(STORAGE_KEY);
  let parsedNotes: NoteProps[] | null;

  if (getNotes !== null) {
    parsedNotes = JSON.parse(getNotes);

    if (parsedNotes) {
      for (const note of parsedNotes) {
        notes.push(note);
      }
    }
  }

  document.dispatchEvent(new Event(RENDER_NOTES_EVENT));
};

export const syncStorage = () => {
  if (availableStorage()) {
    const parsedNotes: string = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, parsedNotes);
  }
};

export const loadDummyData = (notesDummy: NoteProps[]) => {
  const parsedNotes: string = JSON.stringify(notesDummy);
  localStorage.setItem(STORAGE_KEY, parsedNotes);
};
