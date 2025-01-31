const showRandomElement = () => {
  const elements = document.querySelectorAll('.next-case_item');
  if (elements.length === 0) return;

  // Generate random number between 0 and the total number of elements - 1
  const randomNum = Math.floor(Math.random() * elements.length);

  // First hide all elements
  elements.forEach(element => {
    element.classList.remove('show');
  });

  // Show random element
  elements[randomNum].classList.add('show');
};

export const initCaseRandomizer = () => {
  showRandomElement();
}; 