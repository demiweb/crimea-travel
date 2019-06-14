import slick from 'slick-carousel';
import setLazy from '../components/setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');

    const options = {
      testimonials: {
        slidesToShow: 2,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };

    $(slider).on('init', () => {
      setLazy();
    });

    $(slider).slick(options[name]);
  });
}
