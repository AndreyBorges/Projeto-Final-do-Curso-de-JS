export default class Accordion {
  constructor(list) {
    this.acordionList = document.querySelectorAll(list);
    this.active = "active";
  }

  // da toggle de classe para o item clicado

  toggleAccordion(item) {
    item.classList.toggle(this.active);
    item.nextElementSibling.classList.toggle(this.active);
  }

  // adiciona o evento de click no elemento

  addAccordion() {
    this.acordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // init function

  init() {
    if (this.acordionList.length) {
      this.toggleAccordion(this.acordionList[0]);
      this.addAccordion();
    }
    return this
  }
}
