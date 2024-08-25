document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".navbar-dropdown_toggle");
    const menus = document.querySelectorAll(".navbar-dropdown_menu");
    const navbar = document.querySelector(".navbar_component");

    function closeAllMenus() {
        toggles.forEach((toggle) => {
            toggle.removeAttribute("data-toggle");
            const icon = toggle.querySelector(".navbar-dropdown_icon");
            if (icon) {
                icon.style.transform = "rotate(90deg)";
            }
        });
        menus.forEach((menu) => {
            const content = menu.querySelector(".navbar-dropdown_content");
            if (content) {
                content.style.opacity = "0";
                content.style.transform = "translateY(-1rem)";
            }
            menu.classList.add("closing");
            menu.classList.remove("open");

            setTimeout(() => {
                menu.classList.remove("closing");
            }, 300); // Match this with the CSS transition duration
        });
        navbar.classList.remove("dropdown-open");
    }

    function openMenu(toggle, menu) {
        toggle.setAttribute("data-toggle", "open");
        const icon = toggle.querySelector(".navbar-dropdown_icon");
        if (icon) {
            icon.style.transform = "rotate(-90deg)";
        }
        menu.classList.add("open");
        navbar.classList.add("dropdown-open");

        const content = menu.querySelector(".navbar-dropdown_content");
        if (content) {
            // Use setTimeout to ensure the transition happens
            setTimeout(() => {
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            }, 10);
        }
    }

    // Add necessary styles for transitions
    const style = document.createElement("style");
    style.textContent = `
      .navbar_component {
        transition: background-color 0.3s ease;
      }
      .navbar_component.dropdown-open {
        background-color: var(--color-brand--background);
      }
      .navbar-dropdown_menu {
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
      .navbar-dropdown_menu.open,
      .navbar-dropdown_menu.closing {
        display: block;
      }
      .navbar-dropdown_menu.open {
        opacity: 1;
      }
      .navbar-dropdown_content {
        opacity: 0;
        transform: translateY(-1rem);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .navbar-dropdown_icon {
        transition: transform 0.25s ease;
      }
    `;
    document.head.appendChild(style);

    toggles.forEach((toggle, index) => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const isOpen = toggle.getAttribute("data-toggle") === "open";

            closeAllMenus();
            if (!isOpen) {
                openMenu(toggle, menus[index]);
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !event.target.closest(".navbar-dropdown_toggle") &&
            !event.target.closest(".navbar-dropdown_menu")
        ) {
            closeAllMenus();
        }
    });
});
