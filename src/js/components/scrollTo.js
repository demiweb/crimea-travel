import { $DOC, $HTMLBODY } from '../constants';

export default function scrollTo() {
  const btn = 'js-scroll-to-btn';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('href');
    const $target = $(`[data-scroll-to-target="${id}"]`);
    const OFFSET = 118;
    console.log(OFFSET);

    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 1000);
  });
};
