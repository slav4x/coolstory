/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

document.addEventListener('DOMContentLoaded', function () {
  const maskOptions = {
    mask: '+7 (000) 000-00-00',
    onFocus: function () {
      if (this.value === '') this.value = '+7 ';
    },
    onBlur: function () {
      if (this.value === '+7 ') this.value = '';
    },
  };

  const maskedElements = document.querySelectorAll('.masked');
  maskedElements.forEach((item) => new IMask(item, maskOptions));

  function toggleShow(element, target) {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      target.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      const isClickInsideTarget = target.contains(event.target);

      if (!isClickInsideTarget && target.classList.contains('show')) {
        target.classList.remove('show');
      }
    });
  }

  const burgerIcon = document.querySelector('.header-burger');
  const burgerNav = document.querySelector('.header-nav');
  toggleShow(burgerIcon, burgerNav);

  const cityActive = document.querySelector('.header-city a');
  const cityList = document.querySelector('.header-city__popup');
  toggleShow(cityActive, cityList);

  const cityActiveFooter = document.querySelector('.footer-city a');
  const cityListFooter = document.querySelector('.footer-city__popup');
  toggleShow(cityActiveFooter, cityListFooter);

  if (document.querySelector('.promo-slider')) {
    const promoSlider = new Splide('.promo-slider', {
      type: 'loop',
      arrowPath:
        'M15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.34315 15.0711C8.95262 15.4616 8.31946 15.4616 7.92893 15.0711C7.53841 14.6805 7.53841 14.0474 7.92893 13.6569L13.5858 8L7.92893 2.34315C7.53841 1.95262 7.53841 1.31946 7.92893 0.928933C8.31946 0.538409 8.95262 0.538409 9.34315 0.928933L15.7071 7.29289ZM8.74228e-08 7L15 7L15 9L-8.74228e-08 9L8.74228e-08 7Z',
    }).mount();
    const totalSlides = promoSlider.length;
    if (totalSlides <= 1) promoSlider.destroy();
  }

  if (document.querySelector('.reviews')) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    const reviewsBtn = document.querySelector('.btn-reviews');
    const reviewsItems = document.querySelectorAll('.reviews-item');
    reviewsBtn.addEventListener('click', () => {
      reviewsItems.forEach((item) => {
        item.style.display = 'flex';
        reviewsBtn.style.display = 'none';
        reviewsGrid.style.maxHeight = '5000px';
      });
    });
  }

  if (document.querySelector('.faq')) {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      const title = item.querySelector('.faq-item__title');

      title.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    });
  }

  if (document.querySelector('.blog-slider')) {
    const blogSlider = new Splide('.blog-slider', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '20px',
      arrowPath:
        'M9.34315 0.278419L15.7071 6.32784C16.0976 6.69907 16.0976 7.30094 15.7071 7.67216L9.34314 13.7216C8.95262 14.0928 8.31945 14.0928 7.92893 13.7216C7.53841 13.3504 7.53841 12.7485 7.92893 12.3773L12.5858 7.95058L-1.39012e-06 7.95058L-1.05772e-06 6.04943L12.5858 6.04943L7.92893 1.62274C7.53841 1.25151 7.53841 0.649641 7.92893 0.278419C8.31946 -0.0928043 8.95262 -0.0928042 9.34315 0.278419Z',
    }).mount();
    const totalBlogSlides = blogSlider.length;
    if (totalBlogSlides <= 1) blogSlider.destroy();
  }

  const themes = document.querySelectorAll('.theme');
  themes.forEach((theme) => {
    theme.querySelectorAll('.theme-tabs li').forEach((tab) => {
      tab.addEventListener('click', () => {
        theme.querySelectorAll('.theme-tabs li').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const subtabId = tab.getAttribute('data-subtab');
        if (subtabId) {
          theme.querySelectorAll('.theme-subtabs').forEach((subtab) => subtab.classList.remove('show'));
          theme.querySelector(`.theme-subtabs[data-subtab="${subtabId}"]`).classList.add('show');

          theme.querySelectorAll('.theme-subtabs li').forEach((li) => li.classList.remove('active'));
          theme.querySelector(`.theme-subtabs.show li:first-child`).classList.add('active');

          const tabId = theme.querySelector(`.theme-subtabs.show li:first-child`).getAttribute('data-tab');
          theme.querySelectorAll('.theme-tab').forEach((tab) => tab.classList.remove('active'));
          theme.querySelectorAll(`.theme-tab[data-tab="${tabId}"]`).forEach((item) => {
            item.classList.add('active');
          });
        }

        const tabId = tab.getAttribute('data-tab');
        if (tabId) {
          theme.querySelectorAll('.theme-tab').forEach((tab) => tab.classList.remove('active'));
          theme.querySelectorAll(`.theme-tab[data-tab="${tabId}"]`).forEach((item) => {
            item.classList.add('active');
          });
        }
      });
    });

    theme.querySelectorAll('.theme-subtabs li').forEach((li) => {
      li.addEventListener('click', () => {
        theme.querySelectorAll('.theme-subtabs li').forEach((l) => l.classList.remove('active'));
        li.classList.add('active');

        const tabId = li.getAttribute('data-tab');
        theme.querySelectorAll('.theme-tab').forEach((tab) => tab.classList.remove('active'));
        theme.querySelectorAll(`.theme-tab[data-tab="${tabId}"]`).forEach((item) => {
          item.classList.add('active');
        });
      });
    });
  });

  // var main = new Splide('.theme-gallery__main', {
  //   type: 'loop',
  //   rewind: true,
  //   pagination: false,
  //   arrows: false,
  // });

  // var thumbnails = new Splide('.theme-gallery__thumbnails', {
  //   type: 'loop',
  //   perPage: 4,
  //   perMove: 1,
  //   gap: 15,
  //   rewind: true,
  //   pagination: false,
  //   arrowPath:
  //     'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
  // });

  // main.sync(thumbnails);
  // main.mount();
  // thumbnails.mount();

  // var elms = document.getElementsByClassName( 'splide' );

  // for ( var i = 0; i < elms.length; i++ ) {
  //   new Splide( elms[ i ] ).mount();
  // }

  const themeGalleryMain = document.getElementsByClassName('theme-gallery__main');
  const themeGalleryThumbnails = document.getElementsByClassName('theme-gallery__thumbnails');
  for (let i = 0; i < themeGalleryMain.length; i++) {
    const m = new Splide(themeGalleryMain[i], {
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: false,
    });

    const t = new Splide(themeGalleryThumbnails[i], {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      gap: 15,
      rewind: true,
      pagination: false,
      arrowPath:
        'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
    });

    t.mount();
    m.sync(t);
    m.mount();
  }

  // const themeGallery = document.querySelectorAll('.theme-gallery');
  // themeGallery.forEach((gallery, i) => {
  //   const main = new Splide('.theme-gallery__main', {
  // type: 'loop',
  // rewind: true,
  // pagination: false,
  // arrows: false,
  //   });

  //   const thumbnails = new Splide('.theme-gallery__thumbnails', {
  //     type: 'loop',
  //     perPage: 4,
  //     perMove: 1,
  //     gap: 15,
  //     rewind: true,
  //     pagination: false,
  //     arrowPath:
  //       'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
  //   });

  //   main.sync(thumbnails);
  //   main.mount();
  //   thumbnails.mount();
  // });
});
