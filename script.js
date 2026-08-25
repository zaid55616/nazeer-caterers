/* =========================================================
   KGN BIRIYANI POINT
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
    });

});


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================
   HEADER SHADOW ON SCROLL
   ========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* =========================
   SMOOTH NAVIGATION
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});