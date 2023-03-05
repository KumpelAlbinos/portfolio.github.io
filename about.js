


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

var typed = new Typed(".multiple-text",{
    strings: ["Junior Frontend Developer", "n Ambitious person", "",],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
})



