import anime from "animejs";

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("id", "search-note");
    this.classList.add("search-note");
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="icon" src="search.svg" alt="search" >
    <input class="search-input" id="search-input"  placeholder="Search note..." type="text">
    
    `;

    anime({
      targets: ".search-note",
      easing: "easeInOutExpo",
      opacity: [0, 1],
      elasticity: 800,
      translateY: [50, 0],
      duration: 1500,
    });
  }
}

customElements.define("search-note", SearchInput);
