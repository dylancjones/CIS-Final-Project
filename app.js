const menu = document.querySelector('#mobile-menu')
const menuLinks =  document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const serviceButtons = document.querySelectorAll('.services__card button');

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = button.querySelector('a').getAttribute('href');
    });
});
