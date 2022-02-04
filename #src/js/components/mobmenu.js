import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export function mobmenu() {
    const burgerBtn = document.querySelector('.header__burger_btn');
    const closeBtn = document.querySelector('.mobmenu__close');

    const menu = document.querySelector('.mobmenu');

    burgerBtn.addEventListener('click', (e) => {
        menu.classList.add('active');
        // document.body.classList.add('no-scroll');
        disablePageScroll(document.body);
    });

    closeBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
        // document.body.classList.remove('no-scroll');
        enablePageScroll(document.body);
    });
}