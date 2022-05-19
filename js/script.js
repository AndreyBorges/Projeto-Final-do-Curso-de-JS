import Scroll from "./module/scrollSuave.js";
import Accordion from "./module/accordion.js";
import initTabNavegation from "./module/tabNavegation.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdown from "./module/dropDown.js";
import initMenuMobile from "./module/menuMobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFetchAnimais from "./module/fetchAnimais.js";
import initFetchBtc from "./module/fetchBtc.js";
import initAnimationScroll from "./module/animationScroll.js";

const ScrollSuave = new Scroll('[data-menu="suave"] a[href^="#"]');
const AccordionList = new Accordion("[data-anime='accordion'] dt");


ScrollSuave.init();
AccordionList.init();
initTabNavegation();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBtc();
initAnimationScroll();