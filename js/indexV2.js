const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const nav = document.querySelector('#nav-menu')
const accordionControl = document.querySelectorAll('.accordion-ctrl')
const overlay = document.querySelector('#overlay')

// nav.addEventListener('mouseleave', () => {
//     let timeoutID = setTimeout(() => {
//         closeMenuContents()
//     }, '100')
//     nav.addEventListener('mouseover', () => {
//         clearTimeout(timeoutID)
//     })
// })

const onMouseLeaveClose = function(navElement) {
    navElement.addEventListener('mouseleave', () => {
        let timeoutID = setTimeout(() => {
            closeMenuContents()
        }, '100')
        navElement.addEventListener('mouseover', () => {
            clearTimeout(timeoutID)
        })
    })
}

const closeMenuContents = function() {
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

menuOpen.addEventListener('click', () => {
    nav.style.minHeight = document.body.clientHeight + "px"
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = "translateX(0%)"
    overlay.style.display = "block"
})

menuClose.addEventListener('click', () => {
    nav.style.minHeight = null
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = null
    overlay.style.display = null
})

overlay.addEventListener('click', () => {
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = null
    overlay.style.display = null
    closeMenuContents()
})

accordionControl.forEach(control => {
    control.addEventListener('click', function() {
        let menuArrow = control.children[0]
        let content = this.nextElementSibling
        if(content.style.maxHeight) {
            content.style.maxHeight = null
            content.style.opacity = null
            menuArrow.style.transform = null
            // Tests to know which layout is current
            if(nav.style[0]) {
                console.log('Using the vertical nav')
            } else {
                console.log('Using the horizontal nav')
            }
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
            content.style.opacity = 1
            content.style.zIndex = 50
            menuArrow.style.transform = 'rotate(-0.5turn)'
            // Close the menu after mouse-leaving it
            onMouseLeaveClose(control.parentElement)
            // Close any open accordion menus when another one is opened
            accordionControl.forEach(controlElement => {
                if(controlElement !== control && controlElement.nextElementSibling.style.maxHeight) {
                    controlElement.nextElementSibling.style.maxHeight = null
                    controlElement.nextElementSibling.style.opacity = null
                    controlElement.nextElementSibling.style.zIndex = null
                }
            })
        }
    })
})