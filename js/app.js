let navbar = document.querySelector('.header .navbar' )
const btn = document.querySelector('#menu-buttons')
const closeNavbar = document.querySelector('#close-navbar')

runEventListeners()

function runEventListeners() {
btn.addEventListener("click",add)
closeNavbar.addEventListener("click",active)
}

function add() {
    btn.classList.add('active')
} 
function active() {
    closeNavbar.classList.add('active')
} 
