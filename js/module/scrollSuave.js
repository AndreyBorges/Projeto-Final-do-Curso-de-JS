export default function initScroll() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(ev) {
    ev.preventDefault();
    const href = ev.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // * Scroll alternativo
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
    // console.log(href, section);
  }

  linksInternos.forEach((link) =>
    link.addEventListener("click", scrollToSection)
  );
}
