import OutSideClick from "./outSide.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, evts) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.active = "active";


    // bind pois tem um evento de callback 

    this.openMenu = this.openMenu.bind(this);


    // define como touchstart ou click como padrão dos events caso não seja passado nenhum

    evts === undefined
      ? (this.events = ["touchstart", "click"])
      : (this.events = evts);
  }

  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuBtn.classList.add(this.active);
    OutSideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuBtn.classList.remove(this.active);
    });
  }

  menuEvents() {
    this.events.forEach((ev) =>
      this.menuBtn.addEventListener(ev, this.openMenu)
    );
  }

  init() {
    this.menuBtn && this.menuList ? this.menuEvents() : null;
    return this;
  }
}
