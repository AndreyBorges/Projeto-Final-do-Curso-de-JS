export default function initTabNavegation() {
  const tab = document.querySelectorAll("[data-tab='menu'] li");
  const tabText = document.querySelectorAll("[data-tab='content'] section");
  tabText[0].classList.add("active");

  if (tab.length && tabText.length) {
    const activeTab = (idx) => {
      const direction = tabText[idx].dataset.anime;
      tabText.forEach((item) => {
        item.classList.remove("active", direction);
      });
      tabText[idx].classList.add("active", direction);
    };

    tab.forEach((item, idx) => {
      item.addEventListener("click", () => {
        activeTab(idx);
      });
    });
  }
}