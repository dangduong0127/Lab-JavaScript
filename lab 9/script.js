"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const diceEl = document.querySelector(".dice");

const scores = [0, 0];
let currentScore = 0;
let playing = true;
let player = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
// console.log(btnRoll)
// console.log(score0El);
const Switch = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  currentScore = 0;
  player = player === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice === 1) {
      Switch();
    } else {
      currentScore += dice;
      document.getElementById(`current--${player}`).textContent = currentScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[player] += currentScore;
    document.getElementById(`score--${player}`).textContent = scores[player];
    if (scores[player] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${player}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${player}`)
        .classList.remove("player--active");
    } else {
      Switch();
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;
  player = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
});
