import { $DOC, ACTIVE } from '../constants';

export default function toggleMenu() {
  const btn = 'js-burger';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const name = e.currentTarget.getAttribute('data-menu-target');

    const $menu = $(`.js-menu[data-menu="${name}"]`);
    $(e.currentTarget).toggleClass(ACTIVE);
    $menu.slideToggle();
  });
};
