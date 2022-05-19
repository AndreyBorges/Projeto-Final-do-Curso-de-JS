export default class Modal {
  constructor(open, close, container) {
    this.btnOpen = document.querySelector(open);
    this.btnClose = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.active = "active";

    // bind this ao callback para fazer referencia ao objeto da classe

    this.evToggleModal = this.evToggleModal.bind(this);
    this.outSideClick = this.outSideClick.bind(this);
  }

  // adiciona a classe active ao container quando o modal para abrir o modal e retira a classe para fechar o modal
  handleModalToggle() {
    this.modalContainer.classList.toggle(this.active);
  }

  evToggleModal(ev) {
    ev.preventDefault();
    this.handleModalToggle();
  }

  // fecha o modal ao clicar fora dele

  outSideClick() {
    this.modalContainer.closest(".modal")
      ? null
      : this.modalContainer.classList.remove(this.active);
  }

  // adiciona os eventos nos botoes de abrir e fechar o modal

  eventsModal() {
    this.btnOpen.onclick = this.evToggleModal;
    this.btnClose.onclick = this.evToggleModal;
    this.modalContainer.onclick = this.outSideClick;
  }

  init() {
    if (this.btnOpen && this.btnClose && this.modalContainer) {
      this.eventsModal();
    }
    return this
  }
}
