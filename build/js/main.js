"use strict";

const sectionDealer = document.querySelector('.section-dealer');
const sectionDealerWrapper = sectionDealer.querySelector('.section-dealer__wrapper');
const button = sectionDealer.querySelector('button');
const img = button.querySelector('img');
button.addEventListener('click', () => {
  if (sectionDealerWrapper.classList.contains('section-dealer__wrapper--hide-some-content')) {
    sectionDealerWrapper.classList.remove('section-dealer__wrapper--hide-some-content');
    sectionDealer.style.height = 'auto';
    img.style.transform = 'rotate(180deg)';
    img.style.transitionDuration = '0.9s';
  } else {
    sectionDealerWrapper.classList.add('section-dealer__wrapper--hide-some-content');
    sectionDealer.style.height = '200px';
    img.style.transform = 'rotate(0deg)';
    img.style.transitionDuration = '0.9s';
  }
});