import { archiveNote, deleteNote, unarchiveNote } from "./actions.js";
export const notesAppsComponent = (note) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const created = document.createElement("span");
    const body = document.createElement("p");
    const actionSection = document.createElement("div");
    const unarchiveBtn = document.createElement("button");
    const archiveBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    card.classList.add("note");
    title.classList.add("note-title");
    created.classList.add("note-created");
    body.classList.add("note-body");
    actionSection.classList.add("note-action-btn");
    unarchiveBtn.classList.add("note-unarchive-btn");
    archiveBtn.classList.add("note-archive-btn");
    deleteBtn.classList.add("note-delete-btn");
    title.innerHTML = note.title;
    created.innerHTML = `Created ${new Date(note.createdAt).toDateString()}`;
    body.innerHTML = note.body || "";
    archiveBtn.innerHTML = "Archive";
    unarchiveBtn.innerHTML = "Unarchive";
    deleteBtn.innerHTML = "Delete";
    note.archived
        ? actionSection.append(unarchiveBtn, deleteBtn)
        : actionSection.append(archiveBtn, deleteBtn);
    deleteBtn.addEventListener("click", () => {
        dialogModal({ type: "delete", note: note, title: "Delete note" });
    });
    archiveBtn.addEventListener("click", () => {
        dialogModal({ type: "archive", note: note, title: "Archive note" });
    });
    unarchiveBtn.addEventListener("click", () => {
        dialogModal({ type: "unarchive", note: note, title: "Unarchive note" });
    });
    card.append(title, created, body, actionSection);
    return card;
};
export const dialogModal = ({ type, note, message, title }) => {
    const dialogRoot = document.querySelector("#dialog");
    const dialogTitle = document.querySelector("#dialog-title");
    const dialogDesc = document.querySelector("#dialog-description");
    const dialogAction = document.querySelector("#dialog-action-section");
    const dialogYesBtn = document.createElement("button");
    const dialogOkBtn = document.createElement("button");
    const dialogCancelBtn = document.createElement("button");
    dialogYesBtn.classList.add("dialog-yes-btn");
    dialogOkBtn.classList.add("dialog-ok-btn");
    dialogCancelBtn.classList.add("dialog-cancel-btn");
    dialogYesBtn.innerHTML = "Yes";
    dialogOkBtn.innerHTML = "Ok";
    dialogCancelBtn.innerHTML = "Cancel";
    if (dialogTitle !== null)
        dialogTitle.innerHTML = title;
    if (dialogDesc !== null)
        dialogDesc.innerHTML = (type === "message" ? message : `Are you sure to ${type} ${note === null || note === void 0 ? void 0 : note.title}?`);
    if (dialogAction !== null) {
        dialogAction.innerHTML = "";
        if (type === "message")
            dialogAction.append(dialogOkBtn);
        else
            dialogCancelBtn && dialogYesBtn && dialogAction.append(dialogCancelBtn, dialogYesBtn);
    }
    if (dialogRoot !== null) {
        dialogRoot.classList.add("show-dialog");
        dialogRoot.classList.remove("hide-dialog");
    }
    dialogYesBtn.addEventListener("click", () => {
        if (type === "delete" && note)
            deleteNote(note.id);
        if (type === "archive" && note)
            archiveNote(note.id);
        if (type === "unarchive" && note)
            unarchiveNote(note.id);
        if (dialogRoot !== null)
            dialogRoot.classList.add("hide-dialog");
        if (dialogRoot !== null)
            dialogRoot.classList.remove("show-dialog");
        return true;
    });
    dialogCancelBtn.addEventListener("click", () => {
        if (dialogRoot !== null)
            dialogRoot.classList.add("hide-dialog");
        if (dialogRoot !== null)
            dialogRoot.classList.remove("show-dialog");
        return false;
    });
    dialogOkBtn.addEventListener("click", () => {
        if (dialogRoot !== null)
            dialogRoot.classList.add("hide-dialog");
        if (dialogRoot !== null)
            dialogRoot.classList.remove("show-dialog");
    });
};
