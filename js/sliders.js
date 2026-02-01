/**
 * Sliders Module
 * Handles all Swiper slider initialization and configuration
 */

const sliders = (() => {
  // Configuration for different slider instances
  const sliderConfigs = {
    eventSlider: {
      selector: '.event-slider',
      options: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      },
    },
  };

  /**
   * Initialize individual slider
   */
  function initSlider(config) {
    const elements = document.querySelectorAll(config.selector);

    elements.forEach((element) => {
      if (window.Swiper) {
        new window.Swiper(element, config.options);
        console.log(`✅ Slider initialized: ${config.selector}`);
      } else {
        console.warn('Swiper library not loaded');
      }
    });
  }

  /**
   * Initialize all sliders
   */
  function initAllSliders() {
    Object.values(sliderConfigs).forEach((config) => {
      initSlider(config);
    });
  }

  // ========================================
  // PUBLIC API
  // ========================================

  return {
    init() {
      // Wait for Swiper to be loaded
      const checkSwiper = setInterval(() => {
        if (window.Swiper) {
          clearInterval(checkSwiper);
          initAllSliders();
        }
      }, 100);

      // Fallback: if Swiper doesn't load after 5 seconds, proceed anyway
      setTimeout(() => {
        clearInterval(checkSwiper);
      }, 5000);
    },

    /**
     * Reinitialize sliders (useful after dynamic content loading)
     */
    reinit() {
      initAllSliders();
    },

    /**
     * Add custom slider configuration
     */
    addConfig(name, config) {
      sliderConfigs[name] = config;
    },
  };
})();

// Initialize sliders when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    sliders.init();
  });
} else {
  sliders.init();
}
