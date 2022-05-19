import OutSideClick from "./outSide.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];
  if (menuBtn) {
    function openMenu() {
      menuList.classList.add("active");
      menuBtn.classList.add("active");
      OutSideClick(menuList, events, () => {
        menuList.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    }
    events.forEach((ev) => menuBtn.addEventListener(ev, openMenu));
  }
}
