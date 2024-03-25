import { deleteNote } from "../utils/delete-note";
import { archiveNote } from "../utils/archive-note";
import { unarchiveNote } from "../utils/unarchive-note";

export const suggestionCard = (note) => {
  const wrapper = document.createElement("article");
  const title = document.createElement("h4");
  const body = document.createElement("p");
  const actions = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const archiveBtn = document.createElement("button");
  const unarchiveBtn = document.createElement("button");

  wrapper.classList.add("search-suggestion-card");
  title.classList.add("suggestion-title");
  title.classList.add("line-clamp-1");
  body.classList.add("suggestion-body");
  body.classList.add("line-clamp-1");
  actions.classList.add("suggestion-actions");
  deleteBtn.classList.add("suggestion-delete");
  archiveBtn.classList.add("suggestion-archive");
  unarchiveBtn.classList.add("suggestion-unarchive");

  title.innerHTML = note.title;
  body.innerHTML = note.body;
  deleteBtn.innerHTML = "Delete";
  archiveBtn.innerHTML = "Archive";
  unarchiveBtn.innerHTML = "Unarchive";

  note.archived
    ? actions.append(unarchiveBtn, deleteBtn)
    : actions.append(archiveBtn, deleteBtn);

  deleteBtn.addEventListener("click", () => {
    deleteNote(note.id).then();
  });

  archiveBtn.addEventListener("click", () => {
    archiveNote(note.id).then();
  });

  unarchiveBtn.addEventListener("click", () => {
    unarchiveNote(note.id).then();
  });

  wrapper.append(title, body, actions);
  return wrapper;
};
