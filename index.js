'use strict';

const rock = document.querySelector('.rock');
const papper = document.querySelector('.papper');
const scissors = document.querySelector('.scissor');
const containerEl = document.querySelector('.container');

const againEl = document.querySelector('.again');

const resultEl = document.querySelector('.result');
resultEl;

let randomNumber = Math.random();
let compuerMove = '';

const Rules = function () {
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compuerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compuerMove = 'Papper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compuerMove = 'scissors';
  }
};

rock.addEventListener('click', function () {
  Rules();

  if (compuerMove === 'rock') {
    resultEl.innerHTML = `You Picked rock (✊)and computer picked ${compuerMove}(✊) its Tie.`;
  } else if (compuerMove === 'Papper') {
    resultEl.innerHTML = `You picked rock (✊) and computer picked ${compuerMove}✋, You Lose.`;
    containerEl.style.backgroundColor = 'rgba(197, 28, 28, 0.5)';
  } else if (compuerMove === 'scissors') {
    resultEl.innerHTML = `You picked rock (✊) and computer picked ${compuerMove}✌️, You Win.`;
    containerEl.style.backgroundColor = 'rgba(51, 153, 51, 0.56)';
  }
});

papper.addEventListener('click', function () {
  Rules();

  if (compuerMove === 'Papper') {
    resultEl.innerHTML = `You Picked Papper (✋)and computer picked ${compuerMove}(✋) its Tie.`;
  } else if (compuerMove === 'rock') {
    resultEl.innerHTML = `You picked Papper (✋) and computer picked ${compuerMove}✊, You Win.`;
    containerEl.style.backgroundColor = 'rgba(51, 153, 51, 0.56)';
  } else if (compuerMove === 'scissors') {
    resultEl.innerHTML = `You picked Papper (✋) and computer picked ${compuerMove}✌️, You Lose.`;
    containerEl.style.backgroundColor = 'rgba(197, 28, 28, 0.5)';
  }
});

scissors.addEventListener('click', function () {
  Rules();

  if (compuerMove === 'scissors') {
    resultEl.innerHTML = `You Picked scissors (✌️)and computer picked ${compuerMove}(✌️) its Tie.`;
  } else if (compuerMove === 'rock') {
    resultEl.innerHTML = `You picked scissors (✌️) and computer picked ${compuerMove}✊, You Lose.`;
    containerEl.style.backgroundColor = 'rgba(197, 28, 28, 0.5)';
  } else if (compuerMove === 'Papper') {
    resultEl.innerHTML = `You picked scissors (✌️) and computer picked ${compuerMove}✋, You Win.`;
    containerEl.style.backgroundColor = 'rgba(51, 153, 51, 0.56)';
  }
});

againEl.addEventListener('click', function () {
  resultEl.innerHTML = '';
  randomNumber = Math.random();
  compuerMove = '';
  containerEl.style.backgroundColor = 'rgba(255, 228, 196, 0.438)';
});
