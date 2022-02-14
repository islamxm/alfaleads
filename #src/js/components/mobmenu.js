import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export function mobmenu() {
    const burgerBtn = document.querySelector('.header__burger_btn');
    const closeBtn = document.querySelector('.mobmenu__close');

    const menu = document.querySelector('.mobmenu');


    if(burgerBtn) {
        burgerBtn.addEventListener('click', (e) => {
            menu.classList.add('active');
            
            disablePageScroll(menu);
        });
    
        closeBtn.addEventListener('click', (e) => {
            menu.classList.remove('active');
            enablePageScroll(menu);
        });
    }

    
}