import {MAX_DEVICE_WIDTH} from '../../utils/platforms';

const accordionButtons = document.querySelectorAll('.main-footer__title-wrapper');
const footerLists = document.querySelectorAll('.main-footer__list');

export const addAccordion = () => {
  footerLists.forEach((list) => list.classList.add('main-footer__list--hidden'));

  const closeAccordions = () => {
    accordionButtons.forEach((item) => {
      item.querySelector('button').classList.add('main-footer__element-toggle--closed');
    });
    footerLists.forEach((item) => {
      item.classList.add('main-footer__list--hidden');
    });
  };

  accordionButtons.forEach((item) => {
    const button = item.querySelector('button');
    button.classList.add('main-footer__element-toggle--closed');
    const toggleAccordion = () => {
      closeAccordions();
      const elementList = item.nextElementSibling;
      button.classList.remove('main-footer__element-toggle--closed');
      elementList.classList.remove('main-footer__list--hidden');
    };
    if (window.matchMedia(`(max-width: ${MAX_DEVICE_WIDTH.mobile}px)`).matches) {
      item.addEventListener('click', toggleAccordion);
    } else {
      item.removeEventListener('click', toggleAccordion);
    }
  });
};
