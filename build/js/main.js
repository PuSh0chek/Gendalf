"use strict";

let button = document.querySelector('.button-rotate');
let container = document.querySelector('.section-dealer-store__container');
button.addEventListener('click', function () {
  if (container.classList.contains('section-dealer-store__container')) {
    container.classList.remove('section-dealer-store__container');
    container.style.height = '190px';
    button.style.transform = 'rotate(180deg)';
  } else {
    container.classList.add('section-dealer-store__container');
    container.style.height = 'auto';
    button.style.transform = 'rotate(0deg)';
  }
});