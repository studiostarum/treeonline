const calculateReadTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const initReadTime = () => {
  const blogContent = document.querySelector('[data-read-time="content"]');
  if (!blogContent) return;

  const text = blogContent.textContent || '';
  const readTime = calculateReadTime(text);
  const readTimeTarget = document.querySelector('[data-read-time="target"]');
  
  if (readTimeTarget) {
    const timeUnit = readTime === 1 ? 'minuut' : 'minuten';
    readTimeTarget.textContent = `${readTime} ${timeUnit}`;
    readTimeTarget.setAttribute('data-read-time', readTime.toString());
  }
}; 