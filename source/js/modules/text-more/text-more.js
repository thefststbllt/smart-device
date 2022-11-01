const aboutContainer = document.querySelector('.about__container');
const buttonAbout = aboutContainer.querySelector('.button--about');
const textParagraphs = aboutContainer.querySelectorAll('p');

const MAX_MOBILE_WIDTH = 767;

export const toggleText = () => {
  const mobileWidth = window.matchMedia(`(max-width: ${MAX_MOBILE_WIDTH}px)`);
  if (mobileWidth.matches) {
    [textParagraphs[1], textParagraphs[2]].forEach(function (p) {
      p.style.display = 'none';
    });
  } else {
    textParagraphs[textParagraphs.length - 1].style.display = 'none';
  }
  buttonAbout.addEventListener('click', () => {
    const checkHiddenParagraphs = () => Array.from(textParagraphs).some((p) => p.style.display !== 'block');
    if (checkHiddenParagraphs() && buttonAbout.textContent !== 'Свернуть') {
      textParagraphs.forEach(function (p) {
        p.style.display = 'block';
      });
      buttonAbout.textContent = 'Свернуть';
    } else if (mobileWidth.matches) {
      [textParagraphs[1], textParagraphs[2]].forEach(function (p) {
        p.style.display = 'none';
      });
      buttonAbout.textContent = 'Подробнее';
    } else {
      textParagraphs[textParagraphs.length - 1].style.display = 'none';
      buttonAbout.textContent = 'Подробнее';
    }
  });
};