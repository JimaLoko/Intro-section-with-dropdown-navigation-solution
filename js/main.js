const dropdowns = document.querySelectorAll('.js-drop');
const tabs = document.querySelectorAll('.js-tab');
const btnMenu = document.querySelector('.menu');
const nav = document.querySelector('nav');

dropdowns.forEach(drop => {
    drop.addEventListener('click', (event) => {
        event.preventDefault()

        if(!drop.nextElementSibling.classList.contains('active')){
            dropdowns.forEach(item => {
                item.nextElementSibling.classList.remove('active')
                item.classList.remove('active')
            })
            drop.nextElementSibling.classList.add('active')
            drop.classList.add('active')
        } else if(drop.nextElementSibling.classList.contains('active')){
            dropdowns.forEach(item => {
                item.nextElementSibling.classList.remove('active')
                item.classList.remove('active')
            })
        }
    })
})

btnMenu.addEventListener('click', () => {
   btnMenu.classList.toggle('active');
   nav.classList.toggle('active');
})