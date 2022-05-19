export default class TabNavegation {
  constructor(list, content) {
    this.tab = document.querySelectorAll(list);
    this.tabText = document.querySelectorAll(content);
    this.active = "active";
  }

  // adiciona a classe ativa para o item clicado de acordo com o index

  activeTab(idx) {
    const direction = this.tabText[idx].dataset.anime;
    this.tabText.forEach((item) => {
      item.classList.remove(this.active, direction);
    });
    this.tabText[idx].classList.add(this.active, direction);
  }

  // adiciona o evento de click no elemento

  addEventTab() {
    this.tab.forEach((item, idx) => {
      item.addEventListener("click", () => this.activeTab(idx));
    });
  }

  // Inicia a navegação de tabs

  init() {
    this.tab && this.tabText
      ? (this.addEventTab(),this.activeTab(0))
      : null;
    return this
  }
}
