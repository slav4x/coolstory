/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

document.addEventListener('DOMContentLoaded', function() {
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

  const promoSlider = new Splide('.promo-slider', {
    type: 'loop',
    arrowPath: 'M15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.34315 15.0711C8.95262 15.4616 8.31946 15.4616 7.92893 15.0711C7.53841 14.6805 7.53841 14.0474 7.92893 13.6569L13.5858 8L7.92893 2.34315C7.53841 1.95262 7.53841 1.31946 7.92893 0.928933C8.31946 0.538409 8.95262 0.538409 9.34315 0.928933L15.7071 7.29289ZM8.74228e-08 7L15 7L15 9L-8.74228e-08 9L8.74228e-08 7Z',
  }).mount();
  const totalSlides = promoSlider.length;
  if (totalSlides <= 1) promoSlider.destroy();
});
