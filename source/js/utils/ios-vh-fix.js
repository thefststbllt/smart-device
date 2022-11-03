import {iosChecker} from './ios-checker';

const iosVhFix = () => {
  const viewHeight = window.innerHeight * 0.01;
  if (!(window.MSInputMethodContext && document.documentMode)) {
    if (iosChecker()) {
      document.documentElement.style.setProperty('--vh', `${viewHeight}px`);

      window.addEventListener('resize', function () {
        document.documentElement.style.setProperty('--vh', `${viewHeight}px`);
      });
    }
  }
};

export {iosVhFix};
