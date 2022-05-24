# Jeff Lang - May 2022 Projects - Intro section with dropdown navigator by Frontend Mentor

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). 

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

This is the first web-dev project undertaken for my portfolio after re-aquainting myself with the basics of modern dev, taking a number of online classes and completing an online bootcamp. This portfolio piece demonstrates the use of HTML, CSS, and JS to create a standard landing page that utilizes drop down menus, a sliding drawer nav in mobile mode, and media queries to provide responsiveness.

### The challenge

Users can:

- View relevant dropdown menus on desktop and mobile
- Dropdown menus behave differently on mobile and desktop providing a tailored UX depending on device used.
- View optimal layout for a variety of device screen sizes, from 375px to 1440px+ wide.

### Screenshot

![Design preview for the Intro section with dropdown navigation coding challenge](.../images/desktop_preview.jpg)

### Links

- Github Repo: [Github](https://github.com/jefflangtech/intro-section)
- Live Site URL: [Live site](https://jefflangtech.github.io/intro-section/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow (kinda-sorta)
- Good ol' vanilla JS

### What I learned

I started with a mobile-first workflow, and actually created a v1 of this page [First version](https://jefflangtech.github.io/intro-section/index-v1.html), until manipulating the nav got a bit out of control. I rebooted everything and this time began with the HTML structure as it would be most natural, and then manipulated the structure with CSS and media queries to get the mobile features I needed. In the process I dropped 110 lines out of the CSS file.

The HTML structure below illustrates what I'm talking about (simplified from the actual HTML file):

```html
        <div class="nav-container">
            <div class="logo"></div>
            <nav id="nav-menu" class="nav-flex-container"></nav>
            <div class="menu-ctrl"></div>
        </div>
```

I structured this as a container with a logo, a nav element (which would change as the media type dictated), and a button which would appear or not as needed. Within each of these is one or multiple other elements, and many employing flexbox. In a large enough layout the natural structure is horizontal with each primary element inline. And then what I did was to pop the nav element out with absolute positioning when I needed the vertical layout. Still, the nav-container retained an inline and flex display, adding the control button in for the slideout nav, and it was only the nav element that needed to be moved about. The flex-direction and spacing of the nav-container was constant throughout. This taught me to determine, prior to writing any code, what was the most "natural" layout dictated by the design(s), and adjust from there as required by media type.

## Additional learning headaches

- Viewheight (vh) is to be used with caution, especially when considering iOS devices. 
- Speaking of iOS devices, even if I am busting out my brand new iPhone, with the Chrome app installed, it's still using the blink rendering engine (Apple) so it's going to behave like Safari. Have fun with that! (I do love you Apple but whyyyy)
- Safari don't care about overflow:hidden on the body element. I used an encapsulating div just inside the body tag.

### Continued development

- My iPhone layout in landscape is still broken. I will eventually create a layout for phones in landscape mode.
- I have not yet battled "navigating bar intrudes into viewport space" but it seems to be a standard question on stack overflow. Safari on iOS and Chrome on iOS behave a bit differently too.
- In V2 my media query setup was better but I think with time and practice I'll nail down a routine. I feel like this is the difference of many, many lines of code between a good and bad practice.

### Useful resources

- [Responsive navbar tutorial](https://youtu.be/HbBMp6yUXO0) - Kevin Powell did a tutorial for a different Frontend Mentor challenge that was very helpful in laying the groundwork for a responsive nav. Highly recommend.

## Author

- LinkedIn - [Jeff Lang](https://www.linkedin.com/in/jeff-lang-a28b4288/)
- Website - [Jeff Lang](https://jefflangtech.github.io/)
- Frontend Mentor - [@jefflangtech](https://www.frontendmentor.io/profile/jefflangtech)
- Twitter - [@jefflangtech](https://twitter.com/jefflangtech)
