import { throttle } from 'throttle-debounce';
import { $WIN, FIXED } from '../constants';

class Header {
  constructor() {
    this.$header = $('.js-header');
    this.$hero = $('.hero');
    this.headerHeight = this.$header.outerHeight(true);
  };

  init() {
    if (!this.$header.length) return;

    $WIN.on('scroll', this._toggleHeader.bind(this));
  };

  _toggleHeader(e) {
    if (window.pageYOffset > this.headerHeight) {
      this.$header.addClass(FIXED);
      this.$hero.css({ paddingTop: this.headerHeight + 'px' });
    } else {
      this.$header.removeClass(FIXED);
      this.$hero.css({ paddingTop: '' });
    };
  };
};

export default function toggleHeaderOnScroll() {
  const header = new Header();
  header.init();
};
