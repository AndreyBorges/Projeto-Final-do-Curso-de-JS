import Scroll from "./module/scrollSuave.js";
import Accordion from "./module/accordion.js";
import TabNavegation from "./module/tabNavegation.js";
import Modal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdown from "./module/dropDown.js";
import initMenuMobile from "./module/menuMobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFetchAnimais from "./module/fetchAnimais.js";
import initFetchBtc from "./module/fetchBtc.js";
import initAnimationScroll from "./module/animationScroll.js";

const scrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
const accordionList = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNavegation("[data-tab='menu'] li","[data-tab='content'] section")
const modalLogin = new Modal ("[data-modal='open']", "[data-modal='close']", ".modalContainer");

scrollSuave.init();
accordionList.init();
tabNav.init();
modalLogin.init()
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBtc();
initAnimationScroll();