import { throttle } from 'throttle-debounce';
import { $WIN, FIXED } from '../constants';

class Header {
  constructor() {
    this.$header = $('.js-header');
    this.$hero = $('.hero');
    this.headerHeight = this.$header.outerHeight(true);
    this.lastScrollTop = 0;
  };

  init() {
    if (!this.$header.length) return;

    $WIN.on('scroll', this._toggleHeader.bind(this));
  };

  show() {
    this.$header.addClass(FIXED);
    this.$hero.css({ paddingTop: this.headerHeight + 'px' });
  };

  hide() {
    this.$header.removeClass(FIXED);
    this.$hero.css({ paddingTop: '' });
  };

  _toggleHeader(e) {
    // const st = window.pageYOffset || document.documentElement.scrollTop;

    // if (window.pageYOffset > this.headerHeight && st > this.lastScrollTop) {
    if (window.pageYOffset > this.headerHeight) {
      this.show();
    } else {
      this.hide();
    };

    // this.lastScrollTop = st <= 0 ? 0 : st;
  };
};

export default function toggleHeaderOnScroll() {
  const header = new Header();
  header.init();
};
