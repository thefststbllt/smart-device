const infoButton = document.querySelector('.main-info__button');
const feedbackForm = document.querySelector('.main-content__feedback');

export const scrollToForm = () => {
  infoButton.addEventListener('click', () => {
    feedbackForm.scrollIntoView({behavior: 'smooth'});
  });
};
