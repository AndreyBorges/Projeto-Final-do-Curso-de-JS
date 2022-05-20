export default class AnimationScroll {
  constructor(elms) {
    this.sections = document.querySelectorAll(elms);
    this.windowHalf = window.innerHeight * 0.6;

    // bind do this do anima scroll

    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a distancia do elemento até o topo da pagina

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  // verifica a distancia de cada section de acordo com a posição do scroll do site e adiciona uma class

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("active");
      } else if (item.element.classList.contains("active")) {
        item.element.classList.remove("active");
      }
    });
  }

  init() {
    this.sections.length
      ? (this.getDistance(),
        this.checkDistance(),
        window.addEventListener("scroll", this.checkDistance))
      : null;
    return this;
  }

  // remove o evento de srcoll

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
