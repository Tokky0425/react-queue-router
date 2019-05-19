import {closeMenu} from './menuHandler'

export const enterAnimation = ({release}) => {
  const ttl = document.querySelector('.example02__ttl')
  const character = document.querySelector('.example02__character')
  const imgEle = character.querySelector('img')
  const content = document.querySelector('.example02__content')
  const footer = document.querySelector('.footer')

  footer.style.opacity = 1

  const func = () => {
    imgEle.removeEventListener('animationend', func)
    release() // This will be called when the animation ends
  }
  imgEle.addEventListener('animationend', func)

  character.classList.add('is-entering') // Fire CSS animation by adding class
  ttl.classList.add('is-visible')
  content.classList.add('is-visible')
}

export const leaveAnimation = ({release}) => {
  closeMenu()
  const ttl = document.querySelector('.example02__ttl')
  const character = document.querySelector('.example02__character')
  const content = document.querySelector('.example02__content')
  const footer = document.querySelector('.footer')

  const func = () => {
    character.removeEventListener('animationend', func)
    release() // This will be called when the animation ends
  }
  character.addEventListener('animationend', func)

  character.classList.add('is-leaving') // Fire CSS animation by adding class
  ttl.classList.remove('is-visible')
  content.classList.remove('is-visible')
  footer.style.opacity = 0
}
