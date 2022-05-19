import OutSideClick from "./outSide.js";

export default function initDropdown() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleDropdown(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add("active");
    OutSideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((eventName) => {
      menu.addEventListener(eventName, handleDropdown);
    });
  });
}
