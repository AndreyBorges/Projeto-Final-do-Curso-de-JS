import Scroll from "./module/scrollSuave.js";
import Accordion from "./module/accordion.js";
import TabNavegation from "./module/tabNavegation.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import initDropdown from "./module/dropDown.js";
import initMenuMobile from "./module/menuMobile.js";
import initFuncionamento from "./module/funcionamento.js";
import fetchAnimais from "./module/fetchAnimais.js";
import fetchBtc from "./module/fetchBtc.js";
import initAnimationScroll from "./module/animationScroll.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
const accordionList = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNavegation("[data-tab='menu'] li","[data-tab='content'] section")
const modalLogin = new Modal ("[data-modal='open']", "[data-modal='close']", ".modalContainer");
const tooltip = new Tooltip("[data-tooltip]");

scrollSuave.init();
accordionList.init();
tabNav.init();
modalLogin.init()
tooltip.init();
fetchAnimais('../../dataAnimais.json','.gridNumbers');
fetchBtc("https://blockchain.info/ticker",'.btcPreco');
initDropdown();
initMenuMobile();
initFuncionamento();
initAnimationScroll();