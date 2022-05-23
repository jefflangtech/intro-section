const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const nav = document.querySelector('#nav-menu')
const accordionControl = document.querySelectorAll('.accordion-ctrl')
const overlay = document.querySelector('#overlay')


// Helper functions for nav menu functionality
const onMouseLeaveClose = function(navElement) {
    navElement.addEventListener('mouseleave', () => {
        let timeoutID = setTimeout(() => {
            closeNavContents()
        }, '100')
        navElement.addEventListener('mouseover', () => {
            clearTimeout(timeoutID)
        })
    })
}

const openNav = function() {
    nav.style.minHeight = document.body.clientHeight + "px"
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = "translateX(0%)"
    overlay.style.display = "block"
}

const closeNav = function() {
    nav.style.minHeight = null
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = null
    overlay.style.display = null
}

const closeNavContents = function(singleControl) {
    if(singleControl) {
        const menuContent = singleControl.nextElementSibling
        const menuArrow = singleControl.children[0]
        menuContent.style.maxHeight = null
        menuContent.style.opacity = null
        menuContent.style.zIndex = null
        menuArrow.style.transform = null
    } else {
        const menuContents = document.querySelectorAll('.accordion-content')
        const menuArrows = document.querySelectorAll('.menu-arrow')
        menuContents.forEach(content => {
            if(content.style.maxHeight) {
                content.style.maxHeight = null
                content.style.opacity = null
                content.style.zIndex = null
            }
        })
        menuArrows.forEach(arrow => {
            if(arrow.style.transform) {
                arrow.style.transform = null
            }
        })
    }
}

// Event Listeners
menuOpen.addEventListener('click', () => {
    openNav()
})

menuClose.addEventListener('click', () => {
    closeNav()
    closeNavContents()
})

overlay.addEventListener('click', () => {
    closeNav()
    closeNavContents()
})

// Sub-menu show and hide functionality
accordionControl.forEach(control => {
    control.addEventListener('click', function() {
        let menuArrow = this.children[0]
        let content = this.nextElementSibling
        if(content.style.maxHeight) {
            closeNavContents(control)
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
            content.style.opacity = 1
            content.style.zIndex = 50
            menuArrow.style.transform = 'rotate(-0.5turn)'
            // Close the menu after mouse-leaving it, desktop only
            if(!nav.style[0]) {
                onMouseLeaveClose(control.parentElement)
            }
            // Close any open accordion menus when another one is opened
            accordionControl.forEach(controlElement => {
                if(controlElement !== control && controlElement.nextElementSibling.style.maxHeight) {
                    controlElement.nextElementSibling.style.maxHeight = null
                    controlElement.nextElementSibling.style.opacity = null
                    controlElement.nextElementSibling.style.zIndex = null
                    controlElement.children[0].style.transform = null
                }
            })
        }
    })
})