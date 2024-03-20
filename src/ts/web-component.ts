class Brand extends HTMLElement {
  static observedAttributes = ["brand-class", "text", "tagline"];
  private readonly _text: string | null;
  private readonly _tagline: string | null;

  constructor() {
    super();
    this._text = this.getAttribute("text");
    this._tagline = this.getAttribute("tagline");
  }

  connectedCallback() {
    const classValue = this.getAttribute("brand-class");
    if (classValue) {
      this.classList.add(classValue);
    }

    const title = document.createElement("h3");
    const tagline = document.createElement("p");
    title.innerHTML = this._text || "";
    tagline.innerHTML = this._tagline || "";
    title.classList.add("brand-title");
    tagline.classList.add("brand-tagline");
    this.append(title, tagline);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "brand-class") {
      if (oldValue) {
        this.classList.remove(oldValue);
      }
      this.classList.add(newValue);
    }
  }
}
class Footer extends HTMLElement {
  static observedAttributes = ["footer-class", "text"];
  private readonly _text: string | null;

  constructor() {
    super();
    this._text = this.getAttribute("text");
    this.innerHTML = `<p>${this._text}</p>`;
  }

  connectedCallback() {
    const classValue = this.getAttribute("footer-class");
    if (classValue) {
      this.classList.add(classValue);
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "footer-class") {
      if (oldValue) {
        this.classList.remove(oldValue);
      }
      this.classList.add(newValue);
    }
  }
}
class NotesSectionHeader extends HTMLElement {
  static observedAttributes = ["title", "subtitle"];
  private readonly _title: string | null;
  private readonly _subtitle: string | null;

  constructor() {
    super();
    this._title = this.getAttribute("title");
    this._subtitle = this.getAttribute("subtitle");
    this.classList.add("notes-section-header");
  }

  connectedCallback() {
    const h3 = document.createElement("h2");
    const p = document.createElement("p");
    h3.innerHTML = this._title || "";
    p.innerHTML = this._subtitle || "";
    this.append(h3, p);
  }
}

customElements.define("my-brand", Brand);
customElements.define("my-note-section-header", NotesSectionHeader);
customElements.define("my-footer", Footer);
