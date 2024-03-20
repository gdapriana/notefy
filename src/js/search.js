import { notes } from "./storage.js";
import { RENDER_NOTES_EVENT } from "./actions.js";
export let searchedNotes = [];
const input = document.querySelector("#search");
input &&
  input.addEventListener("keyup", (event) => {
    var _a;
    searchedNotes = [];
    let query = getKeyword(event);
    if (query === "" || query === null || query === undefined)
      searchedNotes = [];
    else {
      for (const note of notes) {
        if (
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          ((_a = note.body) === null || _a === void 0
            ? void 0
            : _a.toLowerCase().includes(query.toLowerCase()))
        ) {
          searchedNotes.push(note);
        }
      }
      if (searchedNotes.length === 0) searchedNotes = null;
    }
    document.dispatchEvent(new Event(RENDER_NOTES_EVENT));
  });
const getKeyword = (e) => {
  return e.target.value;
};
