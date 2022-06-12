const burgerMenu = document.querySelector('.burger__nenu')
const menu = document.querySelector('.menu__list')

if (burgerMenu && menu) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        menu.classList.toggle('active')
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.toggle('active')
            menu.classList.toggle('active')
        })
    })
}

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth', block: 'start'
        })
    })
})