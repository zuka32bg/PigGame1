"use strict";

// Selecting elemnts
var player0El = document.querySelector('.player--0');
var player1El = document.querySelector('.player--1');
var score0El = document.querySelector('#score--0');
var score1El = document.getElementById('score--1');
var current0El = document.getElementById('current--0');
var curent1El = document.getElementById('current--1');
var diceEl = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var scores;
var currentScore;
var activePlayer;
var playing; // Starting conditions

var init = function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  curent1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

var switchPlayer = function switchPlayer() {
  document.getElementById("current--".concat(activePlayer)).textContent = 0;
  currentScore = 0; // Provera igraca

  activePlayer = activePlayer === 0 ? 1 : 0; // Prebacivanje sa igraca na igraca

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}; // Rolling dice functionality


btnRoll.addEventListener('click', function () {
  if (playing) {
    var dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden'); // Dodavanje slike za broj na random rollu

    diceEl.src = "dice-".concat(dice, ".png");

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById("current--".concat(activePlayer)).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore

    document.getElementById("score--".concat(activePlayer)).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(".player--".concat(activePlayer)).classList.add('player--winner');
      document.querySelector(".player--".concat(activePlayer)).classList.add('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }

  btnNew.addEventListener('click', init);
});
