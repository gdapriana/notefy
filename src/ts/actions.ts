import { notes } from "./storage.js";
import { notesAppsComponent } from "./dom.js";
import { searchedNotes } from "./search.js";
export const RENDER_NOTES_EVENT: string = "render-notes";

const form = document.querySelector("#form");
const formTitle = document.querySelector("#form-title");

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
      for (const note of searchedNotes) {
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

formTitle &&
  formTitle.addEventListener("focus", (e) => {
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
        formTitle.classList.add("invalid")

      } else {
        connectedValidation.innerText = "";
        formTitle.classList.remove("invalid")
      }
    }
  });
