/**
 * Navigation Module
 * Handles menu toggle, navigation, and smooth scrolling
 */

const navigation = (() => {
  // Private variables
  const menu = document.querySelector('#mainMenu');
  const menuButton = document.querySelector('.navbar-btn-js');
  const sidebar = document.querySelector('.sidebar-js');
  const navLinks = document.querySelectorAll('[data-scroll-to]');
  const body = document.body;

  // Configuration
  const config = {
    menuOpenClass: 'open',
    navOpenAttribute: 'data-nav-open',
    activeClass: 'active',
  };

  // ========================================
  // PRIVATE METHODS
  // ========================================

  /**
   * Toggle menu state
   */
  function toggleMenu() {
    const isOpen = menu.getAttribute(config.navOpenAttribute) === '1';
    const newState = isOpen ? '0' : '1';

    menu.setAttribute(config.navOpenAttribute, newState);
    body.classList.toggle('close', newState === '1');
  }

  /**
   * Close menu
   */
  function closeMenu() {
    menu.setAttribute(config.navOpenAttribute, '0');
    body.classList.remove('close');
  }

  /**
   * Handle navigation link click
   */
  function handleNavLinkClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href !== '#') {
      closeMenu();
    }
  }

  /**
   * Initialize smooth scroll for navigation links
   */
  function initSmoothScroll() {
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });
  }

  /**
   * Initialize menu toggle
   */
  function initMenuToggle() {
    if (!menuButton) return;

    menuButton.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      const isMenuOpen = menu.getAttribute(config.navOpenAttribute) === '1';
      const clickedInMenu = menu.contains(e.target);

      if (isMenuOpen && !clickedInMenu) {
        closeMenu();
      }
    });
  }

  /**
   * Initialize keyboard navigation
   */
  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });
  }

  // ========================================
  // PUBLIC API
  // ========================================

  return {
    init() {
      if (!menu) {
        console.warn('Navigation: menu element not found');
        return;
      }

      initMenuToggle();
      initSmoothScroll();
      initKeyboardNav();

      console.log('✅ Navigation module initialized');
    },

    open() {
      menu.setAttribute(config.navOpenAttribute, '1');
      body.classList.add('close');
    },

    close() {
      closeMenu();
    },

    toggle() {
      toggleMenu();
    },
  };
})();

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    navigation.init();
  });
} else {
  navigation.init();
}
