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
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Select the number class in HTML to put the random number generated.
document.querySelector('.number').textContent = secretNumber;

// Establish a starting score of 20. This will decrease/increase later.
let score = 20;

// What happens when the CHECK button is pressed.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // SCENARIO 1: User enters nothing in the input:
  if (!guess) {
    document.querySelector('.message').textContent =
      '🤔 Put number between 1 to 20.';

    // SCENARIO 2: User enters something. It is the correct number:
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct answer!';
    // Print the score in the browser.
    document.querySelector('.score').textContent = score;

    // SCENARIO 3: User enters something. But the number is TOO LOW.
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' 📉 Too low...';
      // The score will decrease by 1.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😵 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }

    // SCENARIO 4: User enters something. But the number is TOO HIGH.
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Terlalu tinggi...';
      // The score will decrease by 1.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😵 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
