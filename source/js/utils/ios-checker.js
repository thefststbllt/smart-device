import {PLATFORMS} from './platforms';

export const iosChecker = () => {
  return PLATFORMS.includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
};
