import Scroll from "./module/scrollSuave.js";
import Accordion from "./module/accordion.js";
import TabNavegation from "./module/tabNavegation.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import AnimationScroll from "./module/animationScroll.js";
import Dropdown from "./module/dropDown.js";
import MenuMobile from "./module/menuMobile.js";
import Funcionamento from "./module/funcionamento.js";
import fetchAnimais from "./module/fetchAnimais.js";
import fetchBtc from "./module/fetchBtc.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
const accordionList = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNavegation(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
const modalLogin = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  ".modalContainer"
);
const tooltip = new Tooltip("[data-tooltip]");
const animationScroll = new AnimationScroll("[data-anime='scroll']");
const dropdown = new Dropdown("[data-dropdown]");
const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
const funcionamento = new Funcionamento("[data-semana]", "opening", "closed");

scrollSuave.init();
accordionList.init();
tabNav.init();
modalLogin.init();
tooltip.init();
animationScroll.init();
fetchAnimais("./dataAnimais.json", ".gridNumbers");
fetchBtc("https://blockchain.info/ticker", ".btcPreco");
dropdown.init();
menuMobile.init();
funcionamento.init();
