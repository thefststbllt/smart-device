import {MAX_DEVICE_WIDTH} from '../../utils/platforms';

const accordionButtons = document.querySelectorAll('.main-footer__title-wrapper');
const footerLists = document.querySelectorAll('.main-footer__list');

export const addAccordion = () => {
  footerLists.forEach((list) => list.classList.add('main-footer__list--hidden'));
  accordionButtons.forEach((item) => {
    const button = item.querySelector('button');
    button.classList.add('main-footer__element-toggle--closed');
    const toggleAccordion = () => {
      const elementList = item.nextElementSibling;
      button.classList.toggle('main-footer__element-toggle--closed');
      elementList.classList.toggle('main-footer__list--hidden');
    };
    if (window.matchMedia(`(max-width: ${MAX_DEVICE_WIDTH.mobile}px)`).matches) {
      item.addEventListener('click', toggleAccordion);
    } else {
      item.removeEventListener('click', toggleAccordion);
    }
  });
};
