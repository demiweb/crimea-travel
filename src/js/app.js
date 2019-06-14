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
});
