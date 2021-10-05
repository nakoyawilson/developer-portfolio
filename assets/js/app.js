// Navbar

const burgerMenu = document.querySelector("#burger-menu"),
    ul = document.querySelector("nav ul"),
    nav = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// Close Menu functionality

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// Copyright Year

const currentYear = document.querySelector(".current-year");
currentYear.innerText = new Date().getFullYear();

// Scroll to top functionality

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});