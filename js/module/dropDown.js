import OutSideClick from "./outSide.js";

export default class Dropdown {
  constructor(elms, evts) {
    this.dropDownMenus = document.querySelectorAll(elms);
    this.active = "active";

    // define como touchstart ou click como padrão dos events caso não seja passado nenhum

    evts === undefined
      ? (this.events = ["touchstart", "click"])
      : (this.events = evts);
    // bind do dropdown

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  // ativa o drop down menu e adiciona a função que observa o click fora dele

  activeDropdown(ev) {
    ev.preventDefault();
    const currT = ev.currentTarget;
    currT.classList.add(this.active);
    OutSideClick(currT, this.events, () => {
      currT.classList.remove(this.active);
    });
  }

  // adiciona os eventos do dropdown menu

  dropDownEvents() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((eventName) => {
        menu.addEventListener(eventName, this.activeDropdown);
      });
    });
  }
  init() {
    this.dropDownMenus.length ? this.dropDownEvents() : null;
    return this;
  }
}
