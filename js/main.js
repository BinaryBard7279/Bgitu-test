/**
 * IT BGITU - Main Application Script
 * Modern, modular approach with clean code
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

const utils = {
  /**
   * Debounce function to optimize performance
   */
  debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  /**
   * Query selector helper
   */
  query(selector) {
    return document.querySelector(selector);
  },

  /**
   * Query selector all helper
   */
  queryAll(selector) {
    return document.querySelectorAll(selector);
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  },
};

// ========================================
// PRELOADER
// ========================================

const preloader = {
  init() {
    window.addEventListener('load', () => {
      this.hide();
    });
  },

  hide() {
    const preloader = utils.query('#preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      preloader.style.transition = 'opacity 0.5s ease';
    }
  },
};

// ========================================
// SCROLL BEHAVIOR
// ========================================

const scrollBehavior = {
  init() {
    this.handleHideMenuOnScroll();
  },

  handleHideMenuOnScroll() {
    let lastScrollY = 0;
    const menu = utils.query('#mainMenu');

    window.addEventListener(
      'scroll',
      utils.debounce(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          menu?.classList.add('hide');
        } else {
          // Scrolling up
          menu?.classList.remove('hide');
        }

        lastScrollY = currentScrollY;
      }, 50)
    );
  },
};

// ========================================
// APP INITIALIZATION
// ========================================

const app = {
  init() {
    console.log('🚀 IT BGITU Application Initialized');
    preloader.init();
    scrollBehavior.init();
  },
};

// ========================================
// START APP
// ========================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
  });
} else {
  app.init();
}
