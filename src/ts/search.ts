import { notes } from "./storage.js";
import { NoteProps } from "./types";
import { RENDER_NOTES_EVENT } from "./actions.js";
export let searchedNotes: NoteProps[] | null = [];
const input = document.querySelector("#search");

input &&
  input.addEventListener("keyup", (event) => {
    searchedNotes = [];
    let query = getKeyword(event);
    if (query === "" || query === null || query === undefined)
      searchedNotes = [];
    else {
      for (const note of notes) {
        if (
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.body?.toLowerCase().includes(query.toLowerCase())
        ) {
          searchedNotes.push(note);
        }
      }

      if (searchedNotes.length === 0) searchedNotes = null;
    }

    document.dispatchEvent(new Event(RENDER_NOTES_EVENT));
  });

const getKeyword = (e: any): string | null => {
  return e.target.value;
};
