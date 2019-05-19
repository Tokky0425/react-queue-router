import {closeMenu} from './menuHandler'

export const enterAnimation = ({release}) => {
  const target = document.querySelector('.page-wrapper')
  const footer = document.querySelector('.footer')
  const func = () => {
    target.removeEventListener('transitionend', func)
    release()
  }
  target.addEventListener('transitionend', func)
  setTimeout(() => {
    target.style.transition = 'all .3s'
    target.style.opacity = 1
    if (footer) {
      footer.style.opacity = 1
    }
  }, 10)
}

export const leaveAnimation = ({release}) => {
  closeMenu()
  const target = document.querySelector('.page-wrapper')
  const footer = document.querySelector('.footer')
  const func = () => {
    target.removeEventListener('transitionend', func)
    release()
  }
  target.addEventListener('transitionend', func)
  setTimeout(() => {
    target.style.transition = 'all .3s'
    target.style.opacity = 0
    if (footer) {
      footer.style.opacity = 0
    }
  }, 10)
}
