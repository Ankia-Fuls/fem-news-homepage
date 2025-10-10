# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of completed project](./design/Completed%20Frontend%20Mentor%20News%20homepage.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/Ankia-Fuls/fem-news-homepage)
- Live Site URL: [GitHub Pages](https://ankia-fuls.github.io/fem-news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- SASS Styling

### What I learned

I learned how to create a hamburger menu in an accessibile way. I used aria-expanded on the button used to control the menu in mobile form and set the menu as role="dialog" and labelled them both with the same invisible title to link them. I then used JS to set the open or close state for the expanded, and set up CSS for the menu based on if the menu was open or closed. The code to change the visibility is shown below. Note that a translate animation was used to make the menu slide in from the side, so the translation is set. For prefers reduced motion, the animation is changed to a fade in.

```css
.navbar__menu {
  z-index: 1;

  @media only screen and (max-width: $width-lower) {
      position: fixed; 
      padding: 1.5rem;
      background-color: var(--off-white);

      width: 70vw;
      height: 100vh;
      top: 0;
      right: 0;

      translate: 100vw 0; 
      transition: translate 0.5s ease-in-out;

      color: var(--very-dark-blue)
  }

  @media only screen and (max-width: $width-lower) and (prefers-reduced-motion) {
      translate: 0;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
  }
}
.navbar__open[aria-expanded="true"] {
  +.navbar__menu {
      translate: 0;
  }

  @media (prefers-reduced-motion) {
      opacity: 1;
  }
}
```

I used the inert attribute to make sure that the screenreaders and tabbing order could only focus on what needed to be shown based on the state of the website. If the menu was closed, the menu is set as inert to prevent access, and when the menu is open, the main page is set as inert to prevent actions being taken there while in the menu. This also helps to limit the focus of the screenreaders and other tools to what should be shown, making it more understandable to those technologies. 

The code below shows how the inert was set for the menu items based on the size of the screen.

```js
const media = window.matchMedia("(width<850px)");

function setupTopNav(e) {
    if (e.matches) {
        //is mobile
        navbarMenu.setAttribute("inert", "");
        navbarMenu.style.transition = "none";       
    }
    else {
        //desktop
        navbarMenu.removeAttribute("inert");
    }
}
```
This is run on load and then an event listener is added to media to trigger this function every time the screen changes sizes. The transition style is set to none to override the css styling which causes a sliding transition until the open button is clicked, otherwise the transition happens briefly when the screen moves from desktop to mobile which is irritating. The code for the open and close buttons are shown below.

```js
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
```
Focus is returned to the buttons on open and close for easier access, and the style is changed to make sure the transition works as desired.


### Continued development

I would like to learn more about creating accessibile websites and features such as these. I want to learn more about the proper use of inert.

### Useful resources

- [Coder Coder YouTube Video](https://www.youtube.com/watch?v=pBv7igaxfQE) - This video helped explain how to create an accessible hamburger menu, I would highly recommend the video.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)

## Acknowledgments

The main implementation of the hamburger menu and how to make it accessible is based on the video by Coder Coder listed in useful resources. This includes the JS and the CSS and HTML which is used to switch between the displays and the menus.
