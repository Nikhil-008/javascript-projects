'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 8;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if no input is given
  if (!guess) {
    // document.querySelector('.message').textContent = ':( NO Number';
    displayMessage(':( NO Number'); //instead of writing the above code multiple times in the code we simply save it as ana function and give as above
  }

  // if the player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ':) Correct Number';
    displayMessage(':) Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // if the number is wrong "basically to avoiding repeating the code"
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!!' : 'Too Low!!'; // ternary function
      displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost!!';
      displayMessage('You Lost!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // if the number is too high

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!!';
  //       score--; // score = score - 1
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   // if the number is too high
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!!';
  //       score--; // score = score - 1
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//resetting everything to back as first
document
  .querySelector('.again')
  .addEventListener('click', function () //anonyumous or handler function
  {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'start guessing...';
    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
