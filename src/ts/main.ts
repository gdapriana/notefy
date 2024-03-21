import "./web-component.js";
import "./search.js";
import { availableStorage, loadDummyData, loadStorage } from "./storage.js";
import { notesData } from "./data-dummy.js";


document.addEventListener("DOMContentLoaded", () => {
  if (availableStorage()) loadStorage();
});
