import initAnimationScroll from "./animationScroll";

export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do obj da classe aos callbacks

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // move a tooltip com base no mouse

  onMouseMove({ pageY, pageX }) {
    this.tooltipBox.style.top = `${pageY + 10}px`;
    pageX > window.innerWidth / 2
      ? (this.tooltipBox.style.left = `${pageX - 190}px`)
      : (this.tooltipBox.style.left = `${pageX + 10}px`);
  }

  // remove a tooltipBox do DOM quando o mouse sai do elemento

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltipBox e adiciona ao body

  createTooltipBox = (el) => {
    const tooltipBox = document.createElement("div");
    const textTooltip = el.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  };

  // cria a tooltipBox e adiciona os eventos de mousemove e mouseleave 

  onMouseOver({ currentTarget }) {
    // cria a tooltipBox e coloca uma propriedade

    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adiciona os eventos de mouseOver em cada tooltip do seu site

  tooltipsEvent() {
    this.tooltips.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver)
    );
  }
  init() {
    this.tooltips.length ? this.tooltipsEvent() : null;
    return this;
  }
}
