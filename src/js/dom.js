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
    card.append(title, created, body, actionSection);
    return card;
};
