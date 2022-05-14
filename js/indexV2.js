const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const nav = document.querySelector('#nav-menu')
const accordionControl = document.querySelectorAll('.accordion-ctrl')
const overlay = document.querySelector('#overlay')

const closeMenuContents = function() {
    let menuContents = document.querySelectorAll('.accordion-content')
    let menuArrows = document.querySelectorAll('.menu-arrow')
    menuContents.forEach(content => {
        if(content.style.maxHeight) {
            content.style.maxHeight = null
            content.style.opacity = 0
        }
    })
    menuArrows.forEach(arrow => {
        if(arrow.style.transform) {
            arrow.style.transform = 'rotate(0turn)'
        }
    })
}

menuOpen.addEventListener('click', () => {
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = "translateX(0%)"
    overlay.style.display = "block"
})

menuClose.addEventListener('click', () => {
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = "translateX(100%)"
    overlay.style.display = "none"
})

overlay.addEventListener('click', () => {
    menuOpen.classList.toggle('removed')
    menuClose.classList.toggle('removed')
    nav.style.transform = "translateX(100%)"
    overlay.style.display = "none"
    closeMenuContents()
})

accordionControl.forEach(control => {
    control.addEventListener('click', function() {
        let menuArrow = control.children[0]
        let content = this.nextElementSibling
        if(content.style.maxHeight) {
            content.style.maxHeight = null
            content.style.opacity = 0
            menuArrow.style.transform = 'rotate(0turn)'
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
            content.style.opacity = 1
            menuArrow.style.transform = 'rotate(-0.5turn)'
        }
    })
})