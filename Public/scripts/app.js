let openNav = document.querySelector(".open-icon");
let closeNav = document.querySelector(".close-icon");
let navbar = document.querySelector(".navbar");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
//
//
//
openNav.addEventListener("click", () => {
    navbar.classList.replace("-left-[100%]", "left-0");
    overlay.classList.replace("hidden", "inline-block");
});
closeNav.addEventListener("click", () => {
    navbar.classList.replace("left-0", "-left-[100%]");
    overlay.classList.replace("inline-block", "hidden");
});
overlay.addEventListener("click", () => {
    navbar.classList.replace("left-0", "-left-[100%]");
    overlay.classList.replace("inline-block", "hidden");
});
//
//
//
