// const navbar = document.getElementsByClassName('navbar')[0]
// const menu = document.getElementsByClassName('menu')[0]

// navbar.addEventListener('click', () => {
//     menu.classList.toggle('active')
// })


window.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    menuIcon.addEventListener('click', function(){
    menu.classList.toggle('menu_show')})
});

