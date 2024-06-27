//Create two variables - one for the hamburger and one for the off screen menu

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

//Add an event listener to the ham menu for clicks. When we get a click, we want to toggle the active class on both the ham menu and off screen menu. 

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});