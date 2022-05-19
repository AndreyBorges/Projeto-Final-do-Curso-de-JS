export default class Scroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    options === undefined ? (this.options = {behavior: "smooth",block: "start",})
    : this.options = options;

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(ev) {
    ev.preventDefault();
    const href = ev.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
  addLinkEvent() {
    this.linksInternos.forEach((link) =>
      link.addEventListener("click", this.scrollToSection)
    );
  }
  init() {
    this.linksInternos.length ? this.addLinkEvent() : false;
    return this
  }
}
