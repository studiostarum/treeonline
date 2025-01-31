import { getCurrentLanguage, showToast } from '../utils/dom.js';

const translations = {
  en: {
    copied: 'URL copied to clipboard!',
    error: 'Failed to copy URL'
  },
  nl: {
    copied: 'URL gekopieerd naar klembord!',
    error: 'Kon URL niet kopiëren'
  }
};

export const initClipboard = () => {
  const triggers = document.querySelectorAll('[data-copy-to-clipboard="trigger"]');
  const currentLang = getCurrentLanguage();

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url)
        .then(() => {
          console.log('URL copied to clipboard!');
          showToast(translations[currentLang].copied);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          showToast(translations[currentLang].error);
        });
    });
  });
}; 