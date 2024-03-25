import "./sass/base.sass";
import "./sass/main.sass";
import "./sass/header.sass";
import "./sass/footer.sass";
import "./sass/scrollbar.sass";
import "./sass/form.sass";
import "./sass/note-card.sass";
import "./sass/loading.sass";

import "./script/utils/index.js";
import "./script/components/index.js";
import "./script/api/services.js";
import { renderNotes } from "./script/utils/render-notes";

document.addEventListener("DOMContentLoaded", () => {
  renderNotes();
});
