import IMask from 'imask';

let iMask = IMask;
const phoneInputs = document.getElementsByName('user-phone');

export const getPhoneMask = () => {
  phoneInputs.forEach((input) => {
    input.addEventListener('focus', () => {
      iMask(input, {mask: '+{7}(000)000-00-00'});
    });
  });
};
