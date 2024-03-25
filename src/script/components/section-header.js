import anime from "animejs";

class SectionHeader extends HTMLElement {
  static observedAttributes = ["title", "description", "imageUrl"];

  constructor() {
    super();
    this._title = this.getAttribute("title");
    this._description = this.getAttribute("description");
    this._imageUrl = this.getAttribute("imageUrl");
    this.classList.add("section-header");
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2><img src="${this._imageUrl}" alt="icon" ><span>${this._title}</span></h2>
      <p>${this._description}</p>
    `;

    anime({
      targets: ".section-header h2 span",
      translateX: [-200, 0],
      duration: 1500,
      opacity: [0, 1],
      delay: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".section-header p",
      translateY: [200, 0],
      duration: 1500,
      opacity: [0, 1],
      delay: 1000,
      easing: "easeOutExpo",
    });
  }
}

customElements.define("section-header", SectionHeader);
