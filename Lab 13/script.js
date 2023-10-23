'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const mess = document.createElement('div');
mess.classList.add('cookie-message');
mess.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn-close-cookie">Got it!</button> ';

// header.prepend(mess);
header.append(mess);

document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    mess.remove();
  });
mess.style.backgroundColor = '#37383d';
mess.style.width = '120%';
mess.style.height =
  Number.parseFloat(getComputedStyle(mess).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

logo.setAttribute('company', 'Bankist');
logo.getAttribute('src');

const link = document.querySelector('.twitter-link');
console.log(logo.dataset.versionNumber);

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
