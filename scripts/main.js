const cityButton = document.querySelector('.header__city-button');

cityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?'

cityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    cityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
})

 // модальное окно
 
 const cartModalClose = () => {overlay.classList.remove('cart-overlay-open')}
    
 const basket = document.querySelector('.subheader__cart')
 const overlay = document.querySelector('.cart-overlay')
 const popupButtonClose = document.querySelector('.cart__btn-close')

 basket.addEventListener('click', () => {
    overlay.classList.add('cart-overlay-open')
    disableScroll()  // убираем скролл, если окно активно
})
 overlay.addEventListener('click', event => {
    const target = event.target
    //закрываем окно заказа
    
    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose()
        enableScroll()
    }})

        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape') {
                cartModalClose() //закрываем окно
                document.body.style.cssText = ''
            }})

        // блокировка скролла

        const disableScroll = () => {
        const widthScroll = window.innerWidth - document.body.offsetWidth
        document.body.dbScrollY = window.scrollY
        document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
        `
        }
        const enableScroll = () => {
            document.body.style.cssText = ''
            window.scroll({
                top: document.body.dbScrollY
            })
        }