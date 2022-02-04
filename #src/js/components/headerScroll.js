export function headerScroll(header) {
    const headerEl= document.querySelector(header);
    let lastScroll = 0;
    const defaultOffset = 200;

    if(headerEl) {

        const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;
        const containHide = () => headerEl.classList.contains('hide');

        window.addEventListener('scroll', () => {
        
            if(scrollPos() > lastScroll && !containHide()) {
                //scrolldown
                headerEl.classList.add('hide');
            }
    
            else if (scrollPos() < lastScroll && containHide()) {
                //scroll up
                headerEl.classList.remove('hide');
            }
            
            lastScroll = scrollPos();
        });
    }

    
}