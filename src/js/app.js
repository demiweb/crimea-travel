import setTouchClassName from './components/setTouchClassName';
import sayHello from './lib/sayHello';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setDatepicker from './components/setDatepicker';
import setSelects from './components/setSelects';
import setAccordion from './components/setAccordion';
import setGrid from './components/setGrid';
import scrollTo from './components/scrollTo';
import toggleHeaderOnScroll from './components/toggleHeaderOnScroll';
import setPopup from './components/setPopup';
import toggleMenu from './components/toggleMenu';

import setTelInput from './components/setTelInput';



$(function() {
  // sayHello();
  setTouchClassName();
  setLazy();
  setSliders();
  setDatepicker();
  setSelects();
  setAccordion();
  setGrid();
  scrollTo();
  toggleHeaderOnScroll();
  setPopup();
  toggleMenu();

  setTelInput();
});
