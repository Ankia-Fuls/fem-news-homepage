const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const media = window.matchMedia("(width<500px)");
const navbarMenu = document.querySelector(".navbar__menu");
const main = document.querySelector("main");

function setupTopNav(e) {
    if (e.matches) {
        //is mobile
        console.log("Mobile");
        navbarMenu.setAttribute("inert", "");
        navbarMenu.style.transition = "none";       //removes the flash of the side nav when going from large to small screen
    }
    else {
        //desktop
        console.log("Desktop");
        navbarMenu.removeAttribute("inert");
        closeMobileMenu();
    }
}

function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    navbarMenu.removeAttribute("inert");
    navbarMenu.removeAttribute("style");
    main.setAttribute("inert", "");
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    navbarMenu.setAttribute("inert", "");
    main.removeAttribute("inert");

    setTimeout(() => {
        navbarMenu.style.transition = "none";
    }, 500);

    btnOpen.focus();
}

setupTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", (e) => {
    setupTopNav(e);
})