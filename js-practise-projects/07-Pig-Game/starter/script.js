'use strict';

// creating variables and storing elements in
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // in this case we dont need to use #
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions ie; how the game should look before starting

let scores, currentScore, activePLayer, playing; // it means these variables live outside the init function and we give values them later

const init = function () {
  scores = [0, 0]; // this is the score when we click hold the score values gets here, initially its is zero
  currentScore = 0;
  activePLayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init(); // the above  elements are inside the int function so to also read them when we start the game we are doing this

const switchPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  currentScore = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // it gives 0-5 so we add +1 now 0-6

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // add dice to currentScore
      currentScore += dice; // currentScore = currentScore + dice
      // current0El.textContent = currentScore; // change later because we do not need to show this only at player 0 .
      document.getElementById(`current--${activePLayer}`).textContent =
        currentScore; // instead of manually selecting which player we are doing it dynamically
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// hold button

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 add current scores to active players score
    scores[activePLayer] += currentScore; // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePLayer}`).textContent =
      scores[activePLayer];
    // 2. check if players score is >= 100

    if (scores[activePLayer] >= 100) {
      //finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePLayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// new game button

btnNew.addEventListener('click', init);
