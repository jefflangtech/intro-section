const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const nav = document.querySelector('#nav-menu')
const accordionControl = document.querySelectorAll('.accordion-ctrl')
const overlay = document.querySelector('#overlay')

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
})

accordionControl.forEach(control => {
    control.addEventListener('click', function() {
        let controlIcon = control.children[0]
        let content = this.nextElementSibling
        if(content.style.maxHeight) {
            content.style.maxHeight = null
            content.style.opacity = 0
            controlIcon.style.transform = 'rotate(0turn)'
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
            content.style.opacity = 1
            controlIcon.style.transform = 'rotate(-0.5turn)'
        }
    })
})