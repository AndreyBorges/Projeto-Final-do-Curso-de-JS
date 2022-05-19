export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  const onMouseLeaveTooltip = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeaveTooltip);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    tooltipBox: "",
    element: "",
    handleEvent({ pageY, pageX }) {
      this.tooltipBox.style.top = `${pageY + 10}px`;
      this.tooltipBox.style.left = `${pageX + 10}px`;
    },
  };

  const createTooltipBox = (el) => {
    const tooltipBox = document.createElement("div");
    const textTooltip = el.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  tooltips.forEach((item) => {
    function mouseOverTooltip({ target }) {
      const tooltipBox = createTooltipBox(target);

      onMouseMove.tooltipBox = tooltipBox;
      target.addEventListener("mousemove", onMouseMove);

      onMouseLeaveTooltip.tooltipBox = tooltipBox;
      onMouseLeaveTooltip.element = target;
      target.addEventListener("mouseleave", onMouseLeaveTooltip);
    }
    item.onmouseover = mouseOverTooltip;
  });
}
