/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

    if(mobileNav.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


window.addEventListener("scroll", () => {
    const header = document.getElementById("glassHeader");

    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* =========================
   MOBILE CATEGORIES DROPDOWN
========================= */

const mobileDropBtn = document.getElementById("mobileDropBtn");
const mobileDropdown = document.getElementById("mobileDropdown");

mobileDropBtn.addEventListener("click", () => {

    mobileDropdown.classList.toggle("active");

    const icon = mobileDropBtn.querySelector("i");

    if(mobileDropdown.classList.contains("active")){
        icon.style.transform = "rotate(180deg)";
    }else{
        icon.style.transform = "rotate(0deg)";
    }

});

/* =========================
   CLOSE MENU WHEN LINK CLICKED
========================= */

document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

/* =========================
   CLOSE MENU ON WINDOW RESIZE
========================= */

window.addEventListener("resize", () => {

    if(window.innerWidth > 900){

        mobileNav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});
