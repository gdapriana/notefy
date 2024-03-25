import { GET_ARCHIVED_NOTES, GET_NOTES } from "../api/services";
import { suggestionCard } from "../components/suggestion-card";

const searchWrapper = document.querySelector("#search-suggestions");
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
const returnedFunction = debounce(async function (e) {
  searchWrapper.innerHTML = "";
  const notes = await GET_NOTES();
  const archivedNotes = await GET_ARCHIVED_NOTES();
  const mergedNotes = [...notes, ...archivedNotes];

  let query = e.target.value;
  if (query === "" || query === null) {
    searchWrapper.classList.add("hidden");
    searchWrapper.classList.remove("show");
  } else {
    searchWrapper.classList.add("show");
    searchWrapper.classList.remove("hidden");
    for (const note of mergedNotes) {
      if (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      ) {
        const card = suggestionCard(note);
        searchWrapper.append(card);
      }
    }
  }
}, 250);
const searchNoteInput = document.getElementById("search-input");
searchNoteInput.addEventListener("keyup", returnedFunction);
