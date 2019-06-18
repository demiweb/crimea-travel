import { $DOC, $HTMLBODY, ACTIVE } from '../constants';

export default function scrollTo() {
  const btn = 'js-scroll-to-btn';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('href');
    const $target = $(`[data-scroll-to-target="${id}"]`);
    let OFFSET = 118;
    let $menu, $burger;

    $menu = $(e.currentTarget).closest('.js-menu');
    const name = $menu.data('menu');
    $burger = $(`.js-burger[data-menu-target="${name}"]`);

    // if (window.matchMedia('(max-width: 1199px)').matches) {
      
      
      
    // };

    if (window.matchMedia('(max-width: 767px)').matches) {
      OFFSET = 80;
    };
    if (window.matchMedia('(max-width: 576px)').matches) {
      OFFSET = 60;
    };

    console.log({$menu, $burger});

    $menu.slideUp();
    $burger.removeClass(ACTIVE);

    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 1000);
  });
};
