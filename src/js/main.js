/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
    closeButton: false,
  });

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

  if (document.querySelector('.promo-slider.splide')) {
    const promoSlider = new Splide('.promo-slider.splide', {
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
      breakpoints: {
        1024: {
          perPage: 2,
        },
        475: {
          perPage: 1,
        },
      },
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

  const themeGalleryMain = document.querySelectorAll('.theme-gallery__main');
  const themeGalleryThumbnails = document.querySelectorAll('.theme-gallery__thumbnails');

  themeGalleryMain.forEach((main, i) => {
    const mainSlider = new Splide(main, {
      speed: 800,
      // type: 'slide',
      rewind: false,
      pagination: false,
      arrows: false,
    });

    const thumbSlider = new Splide(themeGalleryThumbnails[i], {
      speed: 800,
      // type: 'slide',
      perPage: 4,
      perMove: 1,
      gap: 15,
      rewind: false,
      pagination: false,
      isNavigation: true,
      arrows: true,
      arrowPath:
        'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
      breakpoints: {
        1024: {
          gap: 8,
        },
      },
    });

    mainSlider.sync(thumbSlider);
    mainSlider.mount();
    thumbSlider.mount();
  });

  document.querySelectorAll('.about-design__tabs li').forEach((tab) => {
    tab.addEventListener('click', function () {
      const tabId = tab.getAttribute('data-id');
      document.querySelectorAll('.about-design__tabs li').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.about-design__item').forEach((tab) => tab.classList.remove('active'));
      document.querySelector(`.about-design__item[data-id="${tabId}"]`).classList.add('active');
    });
  });

  const aboutPhotos = document.querySelector('.about-wrapper');
  const aboutBtn = document.querySelector('.about-item__more a');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function () {
      this.textContent = this.textContent === 'Посмотреть больше примеров фото' ? 'Скрыть примеры фото' : 'Посмотреть больше примеров фото';

      aboutPhotos.classList.toggle('show');
    });
  }

  const designSlider = document.querySelector('.design-slider');
  if (designSlider) {
    const designSliderMain = new Splide('.design-slider__main', {
      speed: 800,
      lazyLoad: 'nearby',
      type: 'slide',
      rewind: true,
      pagination: false,
      arrows: false,
    });

    const designSliderThumbnails = new Splide('.design-slider__thumbnails', {
      speed: 800,
      lazyLoad: 'nearby',
      type: 'loop',
      perPage: 2,
      perMove: 1,
      gap: 15,
      rewind: true,
      pagination: false,
      arrowPath:
        'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
    });

    designSliderThumbnails.mount();
    designSliderMain.sync(designSliderThumbnails);
    designSliderMain.mount();

    designSliderMain.on('move', function (newIndex) {
      const items = document.querySelectorAll('.design-main__item');
      items.forEach((item, index) => {
        if (index === newIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });

    const mainItems = document.querySelectorAll('.design-main__item');
    mainItems.forEach((item, index) => {
      item.addEventListener('click', function () {
        designSliderMain.go(index);
      });
    });
  }

  const designMore = document.querySelector('.design-main__more');
  const designItems = document.querySelectorAll('.design-main__group');

  if (designMore) {
    designMore.addEventListener('click', () => {
      designItems.forEach((item) => {
        item.style.display = 'flex';
      });
      designMore.style.display = 'none';
    });
  }

  if (window.innerWidth > 1024 && document.querySelector('.blog-sidebar')) {
    const sidebar = new StickySidebar('.blog-sidebar', {
      containerSelector: '.blog-wrapper',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 0,
      bottomSpacing: 20,
    });
  }

  if (window.innerWidth < 1024 && document.querySelector('.design-main__grid')) {
    new SimpleBar(document.querySelector('.design-main__grid'), {
      forceVisible: 'x',
    });
  }

  const popupGalleryMain = document.querySelectorAll('.popup-gallery__main');
  const popupGalleryThumbnails = document.querySelectorAll('.popup-gallery__thumbnails');

  popupGalleryMain.forEach((main, i) => {
    const mainSlider = new Splide(main, {
      speed: 800,
      type: 'slide',
      rewind: true,
      pagination: false,
      arrows: false,
      heightRatio: 0.5,
      updateOnMove: true,
    });

    const thumbSlider = new Splide(popupGalleryThumbnails[i], {
      speed: 800,
      type: 'slide',
      perPage: 4,
      perMove: 1,
      gap: 10,
      rewind: true,
      pagination: false,
      isNavigation: true,
      arrowPath:
        'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
    });

    mainSlider.on('mounted move', function () {
      const activeSlide = mainSlider.Components.Elements.slides[mainSlider.index];
      const activeImage = activeSlide.querySelector('img');
      activeImage.onload = function () {
        mainSlider.root.style.maxHeight = activeImage.offsetHeight + 'px';
      };
      if (activeImage.complete) {
        mainSlider.root.style.maxHeight = activeImage.offsetHeight + 'px';
      }
    });

    mainSlider.sync(thumbSlider);
    mainSlider.mount();
    thumbSlider.mount();
  });

  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
    closeButton: false,
    on: {
      done: (fancybox) => {
        const slider = fancybox.container.querySelector('.popup-gallery__main');
        if (slider) {
          const firstImage = slider.querySelector('.splide__slide.is-active img');
          slider.style.maxHeight = firstImage.offsetHeight + 'px';
        }
      },
      destroy: () => {
        const sliders = document.querySelectorAll('.popup-gallery__main');
        sliders?.forEach((slider) => {
          slider.style.maxHeight = '0px';
        });
      },
    },
  });

  document.querySelectorAll('.popup-close').forEach((closeButton) => {
    closeButton.addEventListener('click', function () {
      if (Fancybox.getInstance()) {
        Fancybox.getInstance().close();
      }
    });
  });

  // Генерация случайного токена
  function generateToken() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var token = '';
    for (var i = 0; i < 30; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  // Установка токена в скрытое поле формы
  function setToken(form) {
    var token = generateToken();
    var hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 't';
    hiddenInput.value = token;
    form.appendChild(hiddenInput);
  }

  const forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    setToken(form);
    form.addEventListener('submit', function () {
      const button = form.querySelector('.btn');

      button.style.opacity = 0.5;
      button.style.cursor = 'not-allowed';
      button.disabled = true;
      button.textContent = 'Отправка...';
    });
  });

  // Функция для получения utm-меток из URL
  function getUtmParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    for (const [key, value] of urlParams.entries()) {
      utmParams[key] = value;
    }
    return utmParams;
  }

  // Функция для установки utm-меток в формы
  function setUtmParamsInForms(utmParams) {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      Object.keys(utmParams).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = utmParams[key];
        form.appendChild(input);
      });
    });
  }

  // Функция для сохранения utm-меток в localStorage с временной меткой
  function saveUtmParamsWithExpiration(utmParams) {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const dataToSave = {
      utmParams,
      expirationTime,
    };
    localStorage.setItem('utmData', JSON.stringify(dataToSave));
  }

  // Функция для загрузки utm-меток из localStorage
  function loadUtmParamsFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('utmData'));
    if (data && data.expirationTime > new Date().getTime()) {
      return data.utmParams;
    } else {
      return {};
    }
  }

  // Функция для очистки utm-меток из localStorage по истечении срока действия
  function clearUtmParamsIfExpired() {
    const data = JSON.parse(localStorage.getItem('utmData'));
    if (data && data.expirationTime <= new Date().getTime()) {
      localStorage.removeItem('utmData');
    }
  }

  // Вызываем функции
  const utmParamsFromUrl = getUtmParams();
  const savedUtmParams = loadUtmParamsFromLocalStorage();

  if (Object.keys(utmParamsFromUrl).length > 0) {
    setUtmParamsInForms(utmParamsFromUrl);
    saveUtmParamsWithExpiration(utmParamsFromUrl);
  } else if (Object.keys(savedUtmParams).length > 0) {
    setUtmParamsInForms(savedUtmParams);
  }

  clearUtmParamsIfExpired();

  let previousScrollPosition = pageYOffset;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const currentScrollPosition = pageYOffset;

    if (currentScrollPosition > previousScrollPosition && currentScrollPosition > 250) {
      header.classList.add('hide');
      document.body.classList.remove('show-navbar');
    } else {
      header.classList.remove('hide');
      document.body.classList.add('show-navbar');
    }

    previousScrollPosition = currentScrollPosition;
  });

  const videoPopup = document.querySelector('.video');
  if (videoPopup) {
    const videoPopupClose = videoPopup.querySelector('.video-close');
    videoPopupClose.addEventListener('click', function () {
      videoPopup.classList.add('hide');
    });
  }

  const managerPopup = document.querySelector('.manager');
  if (managerPopup) {
    const managerPopupClose = managerPopup.querySelector('.manager-close');
    managerPopupClose.addEventListener('click', function () {
      managerPopup.classList.add('hide');
    });

    const managerIcon = document.querySelector('.manager-icon');
    managerIcon.addEventListener('click', function () {
      managerPopup.classList.remove('hide');
    });
  }

  const configurator = document.querySelector('.configurator');
  if (configurator) {
    const configuratorMain = new Splide('.configurator-gallery__main', {
      speed: 800,
      lazyLoad: 'nearby',
      type: 'slide',
      rewind: false,
      pagination: false,
      arrowPath:
        'M9.34315 13.7216L15.7071 7.67216C16.0976 7.30094 16.0976 6.69907 15.7071 6.32784L9.34315 0.278418C8.95262 -0.0928049 8.31946 -0.0928049 7.92893 0.278418C7.53841 0.649641 7.53841 1.25151 7.92893 1.62273L12.5858 6.04943L6.95061e-07 6.04942L5.28858e-07 7.95058L12.5858 7.95058L7.92893 12.3773C7.53841 12.7485 7.53841 13.3504 7.92893 13.7216C8.31946 14.0928 8.95262 14.0928 9.34315 13.7216Z',
    });

    const configuratorThumbnails = new Splide('.configurator-gallery__thumbnails', {
      speed: 800,
      lazyLoad: 'nearby',
      type: 'slide',
      perPage: 5,
      perMove: 1,
      gap: 10,
      rewind: false,
      pagination: false,
      arrows: false,
      isNavigation: true,
    });

    configuratorThumbnails.mount();
    configuratorMain.sync(configuratorThumbnails);
    configuratorMain.mount();

    const configs = JSON.parse(document.getElementById('albums').textContent);

    // Инициализация Choices.js
    const formatChoices = new Choices('select[name="format"]', {
      searchEnabled: false,
      shouldSort: false,
      placeholderValue: 'Выберите формат',
      resetScrollPosition: true,
    });

    const tarifChoices = new Choices('select[name="tarif"]', {
      searchEnabled: false,
      shouldSort: false,
      placeholderValue: 'Выберите тариф',
      resetScrollPosition: true,
      itemSelectText: '',
    });

    const pagesChoices = new Choices('select[name="pages"]', {
      searchEnabled: false,
      shouldSort: false,
      placeholderValue: 'Выберите кол-во страниц',
      resetScrollPosition: true,
      itemSelectText: '',
    });

    // Инициализация опций для формата
    const formatOptions = configs.reduce((acc, config) => {
      if (!acc.some((option) => option.value === config.format)) {
        acc.push({ value: config.format, label: config.format });
      }
      return acc;
    }, []);
    formatChoices.setChoices(formatOptions, 'value', 'label', false);

    // Обновление select элементов
    const updateChoicesSelect = (choicesInstance, options, placeholder, isPagesSelect = false) => {
      // Очистка существующих опций
      choicesInstance.clearStore();

      // Добавление плейсхолдера или статической опции в начало списка
      const placeholderOption = [{ value: '', label: placeholder, selected: true, disabled: true }];

      // Если это селект страниц, то модифицируем label для добавления "страниц"
      const newOptions = isPagesSelect
        ? options.map((option) => ({
            value: option.value,
            label: `${option.label} страниц`,
          }))
        : options;

      const finalOptions = placeholderOption.concat(newOptions);

      // Установка новых опций
      choicesInstance.setChoices(finalOptions, 'value', 'label', false);
    };

    // Обработка изменения формата
    formatChoices.passedElement.element.addEventListener('change', (event) => {
      const selectedFormat = event.detail.value;
      updateAlbums(selectedFormat);
      // Фильтрация и обновление тарифов
      const tarifOptions = configs
        .filter((config) => config.format === selectedFormat)
        .map((config) => config.tarif)
        .filter((tarif, index, self) => self.indexOf(tarif) === index)
        .map((tarif) => ({ value: tarif, label: tarif }));
      updateChoicesSelect(tarifChoices, tarifOptions, 'Выберите тариф');
      // Сброс и обновление страниц
      pagesChoices.clearStore();
      pagesChoices.setChoices([{ value: '', label: 'Выберите кол-во страниц', selected: true, disabled: true }], 'value', 'label', false);
    });

    // Обработка изменения тарифа
    tarifChoices.passedElement.element.addEventListener('change', (event) => {
      const selectedTarif = event.detail.value;
      const selectedFormat = formatChoices.getValue(true);
      updateAlbums(selectedFormat, selectedTarif);
      // Фильтрация и обновление страниц
      const pagesOptions = configs
        .filter((config) => config.format === selectedFormat && config.tarif === selectedTarif)
        .map((config) => config.pages)
        .filter((pages, index, self) => self.indexOf(pages) === index)
        .map((pages) => ({ value: pages, label: pages }));
      updateChoicesSelect(pagesChoices, pagesOptions, 'Выберите кол-во страниц', true);
    });

    // Обработка изменения страниц
    pagesChoices.passedElement.element.addEventListener('change', (event) => {
      const selectedPages = event.detail.value;
      const selectedFormat = formatChoices.getValue(true);
      const selectedTarif = tarifChoices.getValue(true);
      updateAlbums(selectedFormat, selectedTarif, selectedPages);
    });

    function updateAlbums(selectedFormat = '', selectedTarif = '', selectedPages = '') {
      const albumContainer = document.querySelector('.configurator-albums');

      albumContainer.innerHTML = '';
      let group = document.createElement('div');
      group.classList.add('configurator-albums__group');

      const filteredConfigs = configs.filter((config) => {
        const formatMatch = !selectedFormat || config.format === selectedFormat;
        const tarifMatch = !selectedTarif || config.tarif === selectedTarif;
        const pagesMatch = !selectedPages || config.pages === selectedPages;
        return formatMatch && tarifMatch && pagesMatch;
      });

      filteredConfigs.forEach((config, index) => {
        if (index % 2 === 0 && index !== 0) {
          albumContainer.appendChild(group);
          group = document.createElement('div');
          group.classList.add('configurator-albums__group');
        }

        const configItem = document.createElement('a');
        configItem.href = 'javascript:;';
        configItem.classList.add('configurator-albums__item');
        if (albumContainer.children.length === 0 && index === 0) configItem.classList.add('active');
        configItem.innerHTML = `<img src="${config.poster}" alt="" loading="lazy">`;
        group.appendChild(configItem);

        configItem.addEventListener('click', function () {
          document.querySelectorAll('.configurator-albums__item.active').forEach((item) => {
            item.classList.remove('active');
          });
          configItem.classList.add('active');

          updateGallery(config.gallery, config.youtube);
          updateTotalInfo(config);
        });

        if (index === 0) updateGallery(config.gallery, config.youtube);
        if (index === filteredConfigs.length - 1) albumContainer.appendChild(group);
      });

      if (filteredConfigs.length > 0) {
        updateGallery(filteredConfigs[0].gallery, filteredConfigs[0].youtube);
        updateTotalInfo(filteredConfigs[0]);
      }

      new SimpleBar(document.querySelector('.configurator-albums'), {
        forceVisible: 'x',
      });
    }

    function updateGallery(images, youtubeLink = '') {
      const mainGalleryList = document.querySelector('.configurator-gallery__main .splide__list');
      const thumbnailsGalleryList = document.querySelector('.configurator-gallery__thumbnails .splide__list');

      mainGalleryList.innerHTML = '';
      thumbnailsGalleryList.innerHTML = '';

      images.forEach((image) => {
        const mainSlide = document.createElement('li');
        mainSlide.classList.add('splide__slide');

        const thumbnailSlide = mainSlide.cloneNode(true);

        const mainImageLink = document.createElement('a');
        mainImageLink.href = image;
        mainImageLink.setAttribute('data-fancybox', 'gallery');
        mainImageLink.innerHTML = `<img src="${image}" alt="">`;

        mainSlide.appendChild(mainImageLink);
        thumbnailSlide.innerHTML = `<img src="${image}" alt="">`;

        mainGalleryList.appendChild(mainSlide);
        thumbnailsGalleryList.appendChild(thumbnailSlide);
      });

      if (youtubeLink && images.length > 0) {
        const lastImage = images[images.length - 1];

        const videoSlide = document.createElement('li');
        videoSlide.classList.add('splide__slide');

        const videoLink = document.createElement('a');
        videoLink.href = youtubeLink;
        videoLink.setAttribute('data-fancybox', '');
        videoLink.setAttribute('class', 'video-slide');
        videoLink.innerHTML = `<img src="${lastImage}" alt="">`;

        videoSlide.appendChild(videoLink);
        mainGalleryList.appendChild(videoSlide);

        const videoThumbSlide = document.createElement('li');
        videoThumbSlide.classList.add('splide__slide');
        videoThumbSlide.classList.add('video-slide');
        videoThumbSlide.innerHTML = `<img src="${lastImage}" alt="">`;

        thumbnailsGalleryList.appendChild(videoThumbSlide);
      }

      configuratorMain.refresh();
      configuratorThumbnails.refresh();

      configuratorMain.go(0);
      configuratorThumbnails.go(0);
    }

    function updateTotalInfo(config) {
      document.querySelector('.currentPrice').textContent = config.price;
      document.querySelector('.currentFormat').textContent = config.format;
      document.querySelector('.currentTarif').textContent = config.tarif;
      document.querySelector('.currentPages').textContent = config.pages;
    }

    updateAlbums();
  }

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение отправки формы

    const formData = new FormData(this);

    fetch(this.action, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          ym(55208869, 'reachGoal', 'all_form');
        } else {
          console.error('Ошибка отправки формы');
        }
      })
      .catch((error) => {
        console.error('Ошибка отправки формы', error);
      });
  });
});
