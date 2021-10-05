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