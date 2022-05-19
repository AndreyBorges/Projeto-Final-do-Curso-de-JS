export default function initNumbers() {
  const dataNumbers = document.querySelectorAll("[data-number]");
  const sectionNumbers = document.querySelector(".numbers");
  const animaNumbers = () => {
    dataNumbers.forEach((number) => {
      const tot = +number.innerText;
      const increment = Math.floor(tot / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        start > tot ? ((number.innerText = tot), clearInterval(timer)) : null;
      }, 25 * Math.random());
    });
  };

  function handleMutation(ev) {
    ev[0].target.classList.contains("active")
      ? (observer.disconnect(), animaNumbers())
      : null;
  }

  const observer = new MutationObserver(handleMutation);

  observer.observe(sectionNumbers, { attributes: true });
}
