const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const navbarMenu = document.querySelector(".navbar__menu");
const main = document.querySelector("main");

const screenImg = document.querySelector(".header__img");

//screen width
const media = window.matchMedia("(width<500px)");

//inert sets the component inaccessibile to screen readers and tabbing
function setupTopNav(e) {
    if (e.matches) {
        //is mobile
        navbarMenu.setAttribute("inert", "");
        navbarMenu.style.transition = "none";       //adds a style attribute in the tag with transition none to overwrite the transistion in the styles, removing the transition

        screenImg.src = "./assets/images/image-web-3-mobile.jpg";
    }
    else {
        //desktop
        navbarMenu.removeAttribute("inert");
        closeMobileMenu();                          //makes sure that if the screen changes to desktop while the navbar menu is open, it closes

        screenImg.src = "./assets/images/image-web-3-desktop.jpg";
    }
}

function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    navbarMenu.removeAttribute("inert");
    navbarMenu.removeAttribute("style");            //removes the transition style attribute, making the original transition take place again
    main.setAttribute("inert", "");                 //cant focus or access the page below the menu
    btnClose.focus();                               //auto focus on the close button for easier navigation
}

function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    navbarMenu.setAttribute("inert", "");
    main.removeAttribute("inert");

    setTimeout(() => {
        navbarMenu.style.transition = "none";       //remove the transition again after a delay to make sure the transition has completed
    }, 500);

    btnOpen.focus();
}

setupTopNav(media);                 //run once on page load and then when changes between screens
media.addEventListener("change", (e) => {
    setupTopNav(e);
})

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

