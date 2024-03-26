class Footer extends HTMLElement {
  static observedAttributes = ["text"];
  constructor() {
    super();
    this._text = this.getAttribute("text");
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>${this._text}</p>
    `;
  }
}

customElements.define("my-footer", Footer);
