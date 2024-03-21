import { notes, syncStorage } from "./storage.js";
import { dialogModal, notesAppsComponent } from "./dom.js";
import { searchedNotes } from "./search.js";
import { NoteProps } from "./types";
export const RENDER_NOTES_EVENT: string = "render-notes";

const form = document.querySelector("#form");
const formTitle = (document.querySelector("#form-title") as HTMLInputElement);
const formBody = (document.querySelector("#form-body") as HTMLInputElement)

// TODO:Render Book
document.addEventListener(RENDER_NOTES_EVENT, () => {
  const unarchiveSection = document.querySelector("#unarchive-notes");
  const archiveSection = document.querySelector("#archive-notes");

  if (unarchiveSection && archiveSection) {
    unarchiveSection.innerHTML = "";
    archiveSection.innerHTML = "";

    if (searchedNotes === null) {
      archiveSection.append("Not Found");
      unarchiveSection.append("Not Found");
    } else if (searchedNotes.length !== 0) {
      for (const note of searchedNotes.reverse()) {
        const card = notesAppsComponent(note);
        note.archived
          ? archiveSection.append(card)
          : unarchiveSection.append(card);
      }
    } else {
      for (const note of notes) {
        const card = notesAppsComponent(note);
        note.archived
          ? archiveSection.append(card)
          : unarchiveSection.append(card);
      }
    }
  }
});

// TODO: Form Validation
formTitle &&
  formTitle.addEventListener("blur", (e) => {
    const isValid = (
      event: any,
    ): { valid: boolean; message: string; connectedValidationId: string } => {
      return {
        valid: event.target.validity.valid,
        message: event.target.validationMessage,
        connectedValidationId: event.target.getAttribute("aria-describedby"),
      };
    };

    const { valid, message, connectedValidationId } = isValid(e);
    const connectedValidation = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : false;

    if (connectedValidation) {
      if (connectedValidation && message && !valid) {
        connectedValidation.innerText = message;
        formTitle.classList.add("invalid");
      } else {
        connectedValidation.innerText = "";
        formTitle.classList.remove("invalid");
      }
    }
  });

// TODO: Form on Submit (create form)
form &&
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = `note-${new Date().getTime()}`
    const title = formTitle.value
    const body = formBody.value
    const createdAt = new Date().toString()
    const archived = false

    const note: NoteProps = {
      id, title, body, createdAt, archived
    }
    notes.push(note)
    dialogModal({type: "message", title: "Create Note", message: "Note Created Successfully"})
    syncStorage()

    formTitle.value = ""
    formBody.value = ""
    document.dispatchEvent(new Event(RENDER_NOTES_EVENT))
  });

//TODO: Delete note
export const deleteNote = (id: string) => {
  for (let arrayPosition = 0; arrayPosition < notes.length; arrayPosition++) {
    if (notes[arrayPosition].id === id) {
      notes.splice(arrayPosition, 1);
      break;
    }
  }

  if (searchedNotes) {
    for (let arrayPosition = 0; arrayPosition < searchedNotes.length; arrayPosition++) {
      if (searchedNotes[arrayPosition].id === id) {
        searchedNotes.splice(arrayPosition, 1);
        break;
      }
    }
  }

  dialogModal({type: "message", title: "Delete Note", message: "Delete note successfuly"})
  syncStorage()
  document.dispatchEvent(new Event(RENDER_NOTES_EVENT))
}

// TODO: Archive note
export const archiveNote = (id: string) => {
  const target = notes.find((note) => note.id === id)

  if (searchedNotes) {
    const searhTarget = searchedNotes?.find((note) => note.id === id)
    if(searhTarget) searhTarget.archived = true
  }

  if (target) target.archived = true
  syncStorage()
  document.dispatchEvent(new Event(RENDER_NOTES_EVENT))
}

// TODO: Unarchive note
export const unarchiveNote = (id: string) => {
  const target = notes.find((note) => note.id === id)
  if (searchedNotes) {
    const searhTarget = searchedNotes?.find((note) => note.id === id)
    if(searhTarget) searhTarget.archived = false
  }
  if (target) target.archived = false
  syncStorage()
  document.dispatchEvent(new Event(RENDER_NOTES_EVENT))
}