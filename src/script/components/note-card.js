import moment from "moment";
import { deleteNote } from "../utils/delete-note";
import { archiveNote } from "../utils/archive-note";
import { unarchiveNote } from "../utils/unarchive-note";

export const NoteCard = (note) => {
  const noteWrapper = document.createElement("article");
  const noteTitle = document.createElement("h1");
  const noteCreated = document.createElement("span");
  const noteBody = document.createElement("p");
  const actionWrapper = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const archiveBtn = document.createElement("button");
  const unarchiveBtn = document.createElement("button");

  noteWrapper.classList.add("note-card");
  noteTitle.classList.add("note-title");
  noteCreated.classList.add("note-created");
  noteBody.classList.add("note-body");
  actionWrapper.classList.add("note-action-wrapper");
  deleteBtn.classList.add("note-delete-btn");
  archiveBtn.classList.add("note-archive-btn");
  unarchiveBtn.classList.add("note-unarchive-btn");

  noteTitle.innerHTML = note.title;
  noteCreated.innerHTML = moment(note.createdAt).fromNow();
  noteBody.innerHTML = note.body;
  deleteBtn.innerHTML = "Delete";
  archiveBtn.innerHTML = "Archive";
  unarchiveBtn.innerHTML = "Unarchive";

  note.archived
    ? actionWrapper.append(unarchiveBtn, deleteBtn)
    : actionWrapper.append(archiveBtn, deleteBtn);

  noteWrapper.append(noteTitle, noteCreated, noteBody, actionWrapper);

  deleteBtn.addEventListener("click", () => {
    deleteNote(note.id).then();
  });

  archiveBtn.addEventListener("click", () => {
    archiveNote(note.id).then();
  });

  unarchiveBtn.addEventListener("click", () => {
    unarchiveNote(note.id).then();
  });
  return noteWrapper;
};
