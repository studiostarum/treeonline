export const initFooterYear = () => {
  const yearElements = document.getElementsByClassName('footer5_credit-year');
  if (yearElements.length === 0) return;

  const currentYear = new Date().getFullYear().toString();
  Array.from(yearElements).forEach(element => {
    element.textContent = currentYear;
  });
}; 