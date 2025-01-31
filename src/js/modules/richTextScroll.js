const cleanText = (text) => {
  return text.replace(/^(stap\s+\d+:?\s*)/i, '').trim().toLowerCase();
};

const smoothScroll = (linkText, richTextElement) => {
  const cleanedLinkText = cleanText(linkText);
  const headings = richTextElement.querySelectorAll('h1, h2, h3, h4, h5, h6');

  for (const heading of headings) {
    const cleanedHeadingText = cleanText(heading.textContent || '');
    if (cleanedHeadingText.includes(cleanedLinkText)) {
      heading.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
  }
  return false;
};

export const initRichTextScroll = () => {
  const richTextElement = document.querySelector('.w-richtext');
  if (!richTextElement) return;

  const list = richTextElement.querySelector('ul, ol');
  if (!list?.querySelector('a')) return;

  // Add click event listeners to list links (table of contents)
  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      const linkText = this.textContent?.trim() || '';
      if (smoothScroll(linkText, richTextElement)) {
        e.preventDefault();
      }
    });
  });

  // Add click event listener for other links in the rich text
  richTextElement.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A' && !list.contains(target)) {
      const linkText = target.textContent?.trim() || '';
      const href = target.getAttribute('href');

      if (href?.startsWith('#')) {
        if (smoothScroll(linkText, richTextElement)) {
          e.preventDefault();
        }
      }
    }
  });
}; 