export const initDropdownBack = () => {
  const backButtons = document.querySelectorAll('[data-menu="trigger"]');
  if (backButtons.length === 0) return;

  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dropdownList = button.closest('[data-menu="parent"]');
      if (!dropdownList?.classList.contains('w--open')) return;

      // Remove the w--open class from dropdown list
      dropdownList.classList.remove('w--open');

      // Also remove w--open from the dropdown toggle
      const toggle = document.querySelector(`[aria-controls="${dropdownList.id}"]`);
      toggle?.classList.remove('w--open');
    });
  });
}; 