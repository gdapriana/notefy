import "./web-component.js";
import "./search.js";
import { availableStorage, loadStorage } from "./storage.js";
document.addEventListener("DOMContentLoaded", () => {
    if (availableStorage())
        loadStorage();
});
