import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {scrollToForm} from './modules/scroll/scroll';
import {addAccordion} from './modules/accordion/accordion';
import {toggleText} from './modules/text-more/text-more';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  scrollToForm();
  addAccordion();
  toggleText();

  window.addEventListener('load', () => {
    initModals();
  });
});
