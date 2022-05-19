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
    // section.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    // * Scroll alternativo
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
    // console.log(href, section);
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
