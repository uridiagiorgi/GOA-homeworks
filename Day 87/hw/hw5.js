let secretNumber = Math.floor(Math.random() * 50) + 1;
let guess;

while (true) {
  guess = parseInt(prompt("Guess number 1-50: "));

  if (guess > secretNumber) {
    alert("Your number is more than the real number");
  } else if (guess < secretNumber) {
    alert("Your number is less than the real number");
  } else {
    alert("Correct!");
    break;
  }
}