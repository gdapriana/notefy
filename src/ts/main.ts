import "./web-component.js";
import "./search.js";
import { notesData } from "./data-dummy.js";
import { availableStorage, loadDummyData, loadStorage } from "./storage.js";

loadDummyData(notesData);

document.addEventListener("DOMContentLoaded", () => {
  if (availableStorage()) loadStorage();
});
