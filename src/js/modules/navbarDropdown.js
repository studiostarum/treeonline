export const initNavbarDropdown = () => {
  const backLinks = document.querySelectorAll('.navbar-dropdown_link-back');
  if (backLinks.length === 0) return;

  backLinks.forEach(backLink => {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();

      const dropdownList = backLink.closest('.w-dropdown-list');
      if (!dropdownList) return;

      const dropdownToggle = document.querySelector(`[aria-controls="${dropdownList.id}"]`);

      // Remove w--nav-dropdown-list-open class from dropdown list
      dropdownList.classList.remove('w--nav-dropdown-list-open');

      // Remove classes from dropdown toggle
      dropdownToggle?.classList.remove('w--nav-dropdown-toggle-open');

      // Find and update the parent .w-dropdown
      const dropdown = dropdownList.closest('.w-dropdown');
      dropdown?.classList.remove('w--nav-dropdown-open');
    });
  });
}; 