import anime from "animejs";

class AppBrand extends HTMLElement {
  constructor() {
    super();
    this.classList.add("nav-brand");
    this.setAttribute("id", "nav-brand");
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="title">Notefy | </h1>
    <p class="tagline">Your daily note</p>
    `;

    anime({
      targets: ".title",
      easing: "easeInOutExpo",
      elasticity: 800,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
    });

    anime({
      targets: ".tagline",
      easing: "easeInOutExpo",
      elasticity: 800,
      opacity: [0, 1],
      delay: 400,
      scale: [0, 1],
      translateX: [-200, 0],
      duration: 1500,
      color: ["#FFF", "#70798c"],
    });
  }
}

customElements.define("nav-brand", AppBrand);
