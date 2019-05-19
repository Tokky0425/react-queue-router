export const toggleMenu = () => {
  const btn = document.querySelector('.header__menu-btn')
  if (btn.classList.contains('is-open')) {
    closeMenu()
  } else {
    openMenu()
  }
}

export const openMenu = () => {
  const btn = document.querySelector('.header__menu-btn')
  const nav = document.querySelector('.nav')
  btn.classList.add('is-open')
  nav.classList.add('is-open')
}

export const closeMenu = () => {
  const btn = document.querySelector('.header__menu-btn')
  const nav = document.querySelector('.nav')
  btn.classList.remove('is-open')
  nav.classList.remove('is-open')
}
