import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
// import { Ukraine } from '../lib/flatpickrUaLocale.js';

export default function setDatepicker() {
  const $inputs = $('.js-date-input');
  if (!$inputs.length) return;

  $inputs.each((i, input) => {
    const type = input.getAttribute('data-type');
       

    const options = {      
      date: {
        'locale': Russian,
        disableMobile: 'true'
      }
    };

    const picker = flatpickr(input, options[type]);
  });

}
