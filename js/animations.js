gsap.from('.header', {
  y: -100,
  opacity: 0,
  duration: 1
});

gsap.from('.header-content__inner', {
  x: -200,
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from('.header-benefits__item1', {
  y: 100,
  x: -75,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2
});

gsap.from('.top-cards__item', {
  scrollTrigger: {
    trigger: '.top',
    start: '30% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
}); 

gsap.from('.top-content__textbox', {
  scrollTrigger: {
    trigger: '.top',
    start: '60% center'
  },
  x: -200,
  y: 100,
  opacity: 0,
  duration: 0.7
}); 

gsap.from('.header-benefits__item2', {
  scrollTrigger: {
    trigger: '.top',
    start: '70% center'
  },
  y: 100,
  x: -75,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2
}); 

gsap.from('.services__title', {
  scrollTrigger: {
    trigger: '.services-one',
    start: '-30% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7
}); 

gsap.from('.services__item1', {
  scrollTrigger: {
    trigger: '.services-one',
    start: '-20% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

gsap.from('.services__item2', {
  scrollTrigger: {
    trigger: '.services-two',
    start: '-20% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
});

gsap.from('.cases__title', {
  scrollTrigger: {
    trigger: '.cases',
    start: '-30% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7
});

gsap.from('.cases__item', {
  scrollTrigger: {
    trigger: '.cases',
    start: '-30% center'
  },
  y: 150,
  x: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.25
}); 

gsap.from('.promo__inner', {
  scrollTrigger: {
    trigger: '.promo',
    start: '-20% center'
  },
  y: 150,
  x: -100,
  opacity: 0,
  duration: 0.7
});

gsap.from('.promo-decor-img2', {
  scrollTrigger: {
    trigger: '.promo',
    start: '-20% center'
  },
  y: 150,
  x: 100,
  opacity: 0,
  duration: 0.7
}); 


gsap.from('.reviews__title', {
  scrollTrigger: {
    trigger: '.reviews',
    start: '-30% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7
}); 

gsap.from('.reviews__item', {
  scrollTrigger: {
    trigger: '.reviews',
    start: '-20% center'
  },
  y: 150,
  opacity: 0,
  duration: 0.7,
  stagger: 0.25
}); 

gsap.from('.section-form__content', {
  scrollTrigger: {
    trigger: '.section-form',
    start: '-20% center'
  },
  y: 150,
  x: -100,
  opacity: 0,
  duration: 0.7
}); 

gsap.from('.form', {
  scrollTrigger: {
    trigger: '.section-form',
    start: '-20% center'
  },
  y: 150,
  x: 100,
  opacity: 0,
  duration: 0.7
}); 