const mobileMenu = document.querySelector('#mobile-menu');
const mobileBar = document.querySelector('.mobile-bar');


mobileBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileBar.classList.toggle('active');
})