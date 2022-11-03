import {PLATFORMS} from './platforms';

export const iosChecker = () => {
  return PLATFORMS.includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
};
