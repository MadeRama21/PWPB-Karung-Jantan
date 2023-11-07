//NAVIGATION BAR
const menubar = document.querySelector(".menu-bar");
const menunav = document.querySelector(".nav-kiri");
const navLinks = document.querySelectorAll('.nav-kiri a');

menubar.addEventListener("click", () => {
    menunav.classList.toggle("menu-active");
})

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);    
    const windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
});


