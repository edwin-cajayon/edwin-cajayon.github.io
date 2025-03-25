// this will make the logo a burger icon
const menuIcon = document.querySelector('#menu-icon')

const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = function () {
  navLinks.classList.toggle('active')
}

// this will add dark mode theme to the body

const darkModeToggle = document.getElementById('darkModeToggle')
const body = document.body

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode')

  // this will change icon between sun and moon
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
  }
})
