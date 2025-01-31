import { initRichTextScroll } from './modules/richTextScroll.js';
import { initNavbarDropdown } from './modules/navbarDropdown.js';
import { initClipboard } from './modules/clipboard.js';
import { initReadTime } from './modules/readTime.js';
import { initCaseRandomizer } from './modules/caseRandomizer.js';
import { initDropdownBack } from './modules/dropdownBack.js';
import { initFooterYear } from './modules/footerYear.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initRichTextScroll();
  initNavbarDropdown();
  initClipboard();
  initReadTime();
  initCaseRandomizer();
  initDropdownBack();
  initFooterYear();
}); 