export function headerBlur(header) {
    const headerEl = document.querySelector(header);

    document.addEventListener('scroll', () =>  {
        if(document.documentElement.scrollTop > 10) {
            headerEl.classList.add('toggle');
        } else {
            headerEl.classList.remove('toggle');
        }
    });
}