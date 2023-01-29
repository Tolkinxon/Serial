import clas from '../modules/clas'
import form from '../modules/form'
import loader from '../modules/loader'
import modal from '../modules/modal'
import slider from '../modules/slider'
import tabs from '../modules/tabs'
import timer from '../modules/timer'
import { openModal } from '../modules/modal'

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000)

  clas()
  form(modalTimerId)
  loader()
  modal('[data-modal]', '.modal', modalTimerId)
  slider({
    offerSlide: '.offer__slide',
    offerSliderN: '.offer__slider-next',
    offerSliderP: '.offer__slider-prev',
    totalSelectr: '#total',
    currentSelect: '#current',
    offerSliderW: '.offer__slider-wrapper',
    offerSlideri: '.offer__slider-inner',
    offerSlider: '.offer__slider',
  })
  tabs(
    '.tabheader__items',
    '.tabheader__item',
    '.tabcontent',
    'tabheader__item_active',
  )

  timer('.timer', '2022-12-21')
})
