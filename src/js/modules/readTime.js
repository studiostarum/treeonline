export const initReadTime = () => {
  // Try multiple selectors to find the main content
  const contentSelectors = [
    '#content',
    'article',
    '.blog-post-content',
    '.post-content',
    '.article-content',
    'main',
    '.content',
    '[data-content]'
  ];

  let content = null;
  for (const selector of contentSelectors) {
    content = document.querySelector(selector);
    if (content) break;
  }

  // If no specific content area found, try to get all text content from the page
  if (!content) {
    // Exclude navigation, footer, and other non-content areas
    const excludeSelectors = 'nav, header, footer, .nav, .header, .footer, .sidebar, .menu, .navigation';
    const allElements = document.querySelectorAll('*');
    
    let totalText = '';
    for (const element of allElements) {
      // Skip if element is in excluded areas
      if (element.closest(excludeSelectors)) continue;
      
      // Skip if element is a script, style, or other non-content element
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'LINK'].includes(element.tagName)) continue;
      
      // Get text content if it's a text node or has direct text content
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
        const text = element.textContent?.trim();
        if (text && text.length > 10) { // Only count substantial text
          totalText += text + ' ';
        }
      }
    }
    
    if (totalText.length > 100) { // Only proceed if we have substantial content
      const words = totalText.split(/\s+/).filter(word => word.length > 0);
      const numWords = words.length;
      
      // Words per minute
      const readingSpeed = 250;
      const readingTime = Math.ceil(numWords / readingSpeed);
      
      // Try multiple selectors for the reading time element
      const readingTimeSelectors = [
        '#reading-time',
        '.reading-time',
        '[data-reading-time]',
        '.read-time',
        '.time-to-read'
      ];
      
      let readingTimeElement = null;
      for (const selector of readingTimeSelectors) {
        readingTimeElement = document.querySelector(selector);
        if (readingTimeElement) break;
      }
      
      if (readingTimeElement) {
        readingTimeElement.textContent = `${readingTime} ${readingTime === 1 ? 'minuut' : 'minuten'}`;
      } else {
        console.log('Reading time calculated:', readingTime, 'minuten, but no display element found');
      }
      return;
    }
  }

  if (content) {
    const text = content.textContent || content.innerText;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const numWords = words.length;

    // Words per minute
    const readingSpeed = 250;
    const readingTime = Math.ceil(numWords / readingSpeed);

    // Try multiple selectors for the reading time element
    const readingTimeSelectors = [
      '#reading-time',
      '.reading-time',
      '[data-reading-time]',
      '.read-time',
      '.time-to-read'
    ];
    
    let readingTimeElement = null;
    for (const selector of readingTimeSelectors) {
      readingTimeElement = document.querySelector(selector);
      if (readingTimeElement) break;
    }
    
    if (readingTimeElement) {
      readingTimeElement.textContent = `${readingTime} ${readingTime === 1 ? 'minuut' : 'minuten'}`;
    } else {
      console.log('Reading time calculated:', readingTime, 'minuten, but no display element found');
    }
  } else {
    console.log('No content area found for reading time calculation');
  }
};