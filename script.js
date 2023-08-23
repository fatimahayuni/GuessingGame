'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Mula teka sekarang!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// Create a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Establish a starting score of 20.
let score = 20;

// Establish the starting point for highest score set to 0
let highScore = 0;

// Function declaractions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// What happens when the CHECK button is pressed.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // SCENARIO 1: User enters nothing in the input:
  if (!guess) {
    displayMessage('🤔 Put number between 1 to 20.');

    // SCENARIO 2: User enters number more than 20. Out of range.
  } else if (guess > 20) {
    displayMessage('Please enter a number between 1 to 20.');

    // SCENARIO 2: User enters something. It is the correct number. WIN!:
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct answer!');

    // The correct number will appear in the white box
    document.querySelector('.number').textContent = secretNumber;

    // Print the score in the browser.
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // SCENARIO 3: User enters something. But the number is WRONG: high or low.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : ' 📉 Too low...');

      // The score will decrease by 1.
      score--;
      displayScore(score); // **
    } else {
      displayMessage('😵 You lost the game.');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
