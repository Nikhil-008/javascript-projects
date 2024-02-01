'use strict';

// here we are selecting the elements we need and store them into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// we are using this for loop which is basically an array holding all of the buttons.
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// //clicking out the model box should also close the modal box
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// keeping DRY in mind we are creating an function

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// in multiple event listeners,we need to specify that function as a separate function, And then you can pass that function as an argument to multiple "add event listener" methods. So just like we did it here.

/// here function(e) is an keyboard event, so we know which key is pressed on keyboard

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if press key is escape and if modal does not contain the hidden class
    closeModal();
  }
});
