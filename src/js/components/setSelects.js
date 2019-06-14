import Select from 'select-custom';

export default function setSelects() {
  const $selects = $('.js-select');

  if (!$selects.length) return;

  $selects.each((i, select) => {
    const name = select.getAttribute('data-type');
    const searchIcon = '<svg height="1em" viewBox="0 0 512 512" width="1.000em" class="icon icon-search"><path d="M497.913 497.913c-18.782 18.782-49.225 18.782-68.008 0l-84.862-84.863c-34.889 22.382-76.13 35.717-120.659 35.717C100.469 448.767 0 348.312 0 224.383S100.469 0 224.384 0c123.931 0 224.384 100.452 224.384 224.383 0 44.514-13.352 85.771-35.718 120.676l84.863 84.863c18.782 18.782 18.782 49.209 0 67.991zM224.384 64.109c-88.511 0-160.274 71.747-160.274 160.273s71.764 160.274 160.274 160.274c88.525 0 160.273-71.748 160.273-160.274S312.909 64.109 224.384 64.109z"/></svg>';

    const options = {
      default: {
        panelItem: {
          item: `${searchIcon}<input type="text" class="js-search"/>`,
          position: 'top'
        }
      }
    };

    const sel = new Select(select, options[name]);
    sel.init();

    const $customSelect = $(select).closest('.custom-select');
    const $searchInput = $customSelect.find('.js-search');

    $searchInput.on('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      const $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');

      $options.each((i, option) => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });
  });
};
