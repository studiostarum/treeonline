document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar_component");
    const toggles = document.querySelectorAll(".navbar-dropdown_toggle");
    const menus = document.querySelectorAll(".navbar-dropdown_menu");

    const navbarClone = createFixedNavbarClone(navbar);
    const { handleScroll, lastScrollTop } = createScrollHandler(navbar, navbarClone);
    const { openMenu, closeAllMenus } = createMenuHandlers(navbar, navbarClone);

    addEventListeners(navbar, navbarClone, handleScroll, openMenu, closeAllMenus);
    addStyles();
});

function createFixedNavbarClone(navbar) {
    const clone = navbar.cloneNode(true);
    clone.classList.add("navbar_fixed");
    document.body.appendChild(clone);
    return clone;
}

function createScrollHandler(navbar, navbarClone) {
    let lastScrollTop = 0;
    const scrollThreshold = 5;
    const triggerPoint = window.innerHeight * 0.1;

    function handleScroll() {
        const scrollPosition = window.scrollY;

        handleStaticNavbar(navbar, scrollPosition);
        handleFixedNavbar(navbarClone, scrollPosition, triggerPoint, lastScrollTop, scrollThreshold);

        if (Math.abs(scrollPosition - lastScrollTop) > scrollThreshold) {
            lastScrollTop = scrollPosition;
        }
    }

    return { handleScroll, lastScrollTop };
}

function handleStaticNavbar(navbar, scrollPosition) {
    navbar.classList.toggle("navbar-scrolled", scrollPosition > 0);
}

function handleFixedNavbar(navbarClone, scrollPosition, triggerPoint, lastScrollTop, scrollThreshold) {
    if (scrollPosition > triggerPoint) {
        navbarClone.style.visibility = 'visible';
        navbarClone.classList.add("visible");
        navbarClone.classList.remove("hidden");
        navbarClone.style.backgroundColor = 'var(--base-color-brand--background)';

        if (Math.abs(scrollPosition - lastScrollTop) > scrollThreshold) {
            navbarClone.classList.toggle("navbar-hidden", scrollPosition > lastScrollTop);
        }
    } else {
        navbarClone.classList.add("hidden");
        navbarClone.classList.remove("visible", "navbar-hidden");
        navbarClone.style.backgroundColor = 'transparent';
    }
}

function createMenuHandlers(navbar, navbarClone) {
    function closeAllMenus() {
        [navbar, navbarClone].forEach(nav => {
            const toggles = nav.querySelectorAll(".navbar-dropdown_toggle");
            const menus = nav.querySelectorAll(".navbar-dropdown_menu");

            toggles.forEach(toggle => {
                toggle.setAttribute("data-toggle", "closed");
                const icon = toggle.querySelector(".menu-icon");
                if (icon) icon.classList.remove("is-active");
            });

            menus.forEach(menu => {
                menu.style.display = "none";
                const content = menu.querySelector(".navbar-dropdown_content");
                if (content) {
                    content.style.opacity = "0";
                    content.style.transform = "translateY(-1rem)";
                }
            });

            nav.classList.remove("dropdown-open");
        });
    }

    function openMenu(event, toggle, menu, currentNavbar) {
        event.stopPropagation();
        toggle.setAttribute("data-toggle", "open");
        const icon = toggle.querySelector(".menu-icon");
        if (icon) icon.classList.add("is-active");

        menu.style.display = "block";
        currentNavbar.classList.add("dropdown-open");

        const content = menu.querySelector(".navbar-dropdown_content");
        if (content) {
            requestAnimationFrame(() => {
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            });
        }
    }

    return { openMenu, closeAllMenus };
}

function addEventListeners(navbar, navbarClone, handleScroll, openMenu, closeAllMenus) {
    window.addEventListener("scroll", handleScroll);

    [navbar, navbarClone].forEach(nav => {
        const toggles = nav.querySelectorAll(".navbar-dropdown_toggle");
        const menus = nav.querySelectorAll(".navbar-dropdown_menu");

        toggles.forEach((toggle, index) => {
            toggle.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                const isOpen = toggle.getAttribute("data-toggle") === "open";
                if (isOpen) {
                    closeAllMenus();
                } else {
                    closeAllMenus();
                    openMenu(event, toggle, menus[index], nav);
                }
            });
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".navbar-dropdown_toggle") && !event.target.closest(".navbar-dropdown_menu")) {
            closeAllMenus();
        }
    });
}

function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
        .navbar_component {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar_component.navbar-scrolled {
            background-color: var(--base-color-brand--background);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .navbar-dropdown_menu {
            display: none;
        }
        .navbar-dropdown_toggle[data-toggle="open"] + .navbar-dropdown_menu {
            display: block;
        }
        .navbar-dropdown_content {
            opacity: 0;
            transform: translateY(-1rem);
            transition: opacity 0.3s ease-out, transform 0.3s ease;
        }
        .navbar-dropdown_icon {
            transition: transform 0.25s ease;
        }
        .navbar_fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar_fixed.visible {
            opacity: 1;
            visibility: visible;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .navbar_fixed.hidden {
            opacity: 0;
        }
        .navbar_fixed.navbar-hidden {
            transform: translateY(-100%);
        }
        .navbar-dropdown_menu.open .navbar-dropdown_content {
            opacity: 1;
            transform: translateY(0);
        }
        .menu-icon_line {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .menu-icon.is-active .is-top {
            transform: translate3d(0px, 0.375rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
        }
        .menu-icon.is-active .is-middle {
            opacity: 0;
        }
        .menu-icon.is-active .is-bottom {
            transform: translate3d(0px, -0.375rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
        }
    `;
    document.head.appendChild(style);
}
