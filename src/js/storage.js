import { RENDER_NOTES_EVENT } from "./actions.js";
const STORAGE_KEY = "notes";
export const notes = [];
export const availableStorage = () => {
    return typeof Storage !== undefined;
};
export const loadStorage = () => {
    const getNotes = localStorage.getItem(STORAGE_KEY);
    let parsedNotes;
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
        const parsedNotes = JSON.stringify(notes);
        localStorage.setItem(STORAGE_KEY, parsedNotes);
    }
};
export const loadDummyData = (notesDummy) => {
    const parsedNotes = JSON.stringify(notesDummy);
    localStorage.setItem(STORAGE_KEY, parsedNotes);
};
