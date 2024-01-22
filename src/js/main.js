/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

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
