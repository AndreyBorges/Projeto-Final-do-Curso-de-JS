export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector(".modalContainer");

  if (btnClose && btnClose && modalContainer) {
    const handleModalToggle = (ev) => {
      ev.preventDefault();
      modalContainer.classList.toggle("active");
    };

    const outSideClick = ({ target }) => {
      target.closest(".modal")
        ? null
        : modalContainer.classList.remove("active");
    };

    btnOpen.onclick = handleModalToggle;
    btnClose.onclick = handleModalToggle;
    modalContainer.onclick = outSideClick;
  }
}
