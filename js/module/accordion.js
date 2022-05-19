export default function initAccordion() {
  const acordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  acordionList[0].classList.add("active");
  acordionList[0].nextElementSibling.classList.add("active");
  if (acordionList.length) {
    const handleAccordion = ({ target }) => {
      // acordionList.forEach((item) => {
      //   item.classList.remove("active");
      //   item.nextElementSibling.classList.remove("active");
      // })
      target.classList.toggle("active");
      target.nextElementSibling.classList.toggle("active");
    };

    acordionList.forEach((item) => {
      item.addEventListener("click", handleAccordion);
    });
  }
}
