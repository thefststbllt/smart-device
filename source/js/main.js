import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {scrollToForm} from './modules/scroll/scroll';
import {addAccordion} from './modules/accordion/accordion';
import {toggleText} from './modules/text-more/text-more';
import {getPhoneMask} from './modules/form-mask/phone-mask';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  scrollToForm();
  addAccordion();
  toggleText();
  getPhoneMask();

  window.addEventListener('load', () => {
    initModals();
  });
});
