import TweenLite, {Power3} from 'gsap'
import TimelineLite from 'gsap/TimelineLite'
import {closeMenu} from './menuHandler'

export const enterAnimation = ({release}) => {
  const inner = document.querySelector('.example01__inner')
  const cover = document.querySelector('.example01__cover')
  const itemArr = Array.from(cover.querySelectorAll('.example01__cover__item'))
  const footer = document.querySelector('.footer')

  footer.style.opacity = 1

  new TimelineLite()
    .to(cover, .8, {
      opacity: '1'
    })
    .to(inner, 0, {
      opacity: 1,
      onComplete: () => {
        itemArr.forEach((item, index) => {
          TweenLite.to(item, 1, {
            ease: Power3.easeInOut,
            x: '100%',
            delay: index * 0.05,
            onComplete: () => {
              if (index + 1 === itemArr.length) {
                cover.style.display = 'none'
                release() // This will be called when the animation ends
              }
            }
          })
        })
      }
    })
}

export const leaveAnimation = ({release}) => {
  closeMenu()
  const inner = document.querySelector('.example01__inner')
  const footer = document.querySelector('.footer')

  TweenLite.to(inner, .3, {
    opacity: 0,
    onComplete: () => {
      release() // This will be called when the animation ends
    }
  })
  footer.style.opacity = 0
}
