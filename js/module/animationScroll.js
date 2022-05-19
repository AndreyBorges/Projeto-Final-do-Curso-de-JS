export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    sections[0].classList.add("active");

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        } else if(section.classList.contains("active")) {
          section.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", animaScroll);
  }
}