'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }; 

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// // btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
// console.log(btnsOpenModal);
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// console.log(document.documentElement);
// console.log(document.head);

// const header = document.querySelector('.header');
// console.log(header);

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML= 'we cookied for improved functionality and analytics.<button class="btn btn--close--cookie">MAHDI!</button>';
// header.append(message);
// console.log(message);

// document.querySelector('.btn--close--cookie').addEventListener('click', function() {
//   // message.parentElement.removeChild(message);
//   message.remove();
// });

// console.log(message.style.backgroundColor = 'orange');
// console.log(getComputedStyle(message).height);
// message.classList.add('c' , 'j');
// console.log(message);

// const logo = document.querySelector('nav__logo');
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); // meqdare scorll dar safhe ba khude mouse 100 ta 100 ta Y
  console.log('height / width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); //  meqdare mokhtasate safhe width sabet height moteqayer ba baz o baste panjare inspect
  section1.scrollIntoView({behavior: 'smooth'});
})