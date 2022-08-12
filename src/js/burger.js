const menu = document.querySelector('#menu')
const burger = document.querySelector('#burger')

burger.onclick = function() {
    menu.classList.toggle('active')
}