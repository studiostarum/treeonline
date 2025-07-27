export const initReadTime = () => {
  const content = document.querySelector('#content');

  if (content) {
    const text = content.textContent || content.innerText;
    const words = text.split(' ');
    const numWords = words.length;

    // Words per minute
    const readingSpeed = 250;
    const readingTime = Math.ceil(numWords / readingSpeed);

    const readingTimeElement = document.querySelector('#reading-time');
    if (readingTimeElement) {
      readingTimeElement.textContent = `${readingTime} ${readingTime === 1 ? 'minuut' : 'minuten'}`;
    } else {
      console.error("Element with ID 'reading-time' not found.");
    }
  } else {
    console.error("Element with ID 'content' not found.");
  }
};