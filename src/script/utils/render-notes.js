import { GET_ARCHIVED_NOTES, GET_NOTES } from "../api/services";
import { NoteCard } from "../components/note-card";

export const renderNotes = async () => {
  const notes = await GET_NOTES();
  const archivedNotes = await GET_ARCHIVED_NOTES();

  const unarchiveSection = document.querySelector(
    "#output-unarchive-section-wrapper",
  );
  const archiveSection = document.querySelector(
    "#output-archive-section-wrapper",
  );

  unarchiveSection.innerHTML = "";
  archiveSection.innerHTML = "";

  if (notes.length === 0) unarchiveSection.innerHTML = "Empty";
  if (archivedNotes.length === 0) archiveSection.innerHTML = "Empty";

  for (const note of notes) {
    const noteCard = NoteCard(note);
    unarchiveSection.append(noteCard);
  }

  for (const archivedNote of archivedNotes) {
    const noteCard = NoteCard(archivedNote);
    archiveSection.append(noteCard);
  }
};
