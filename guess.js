// create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if (guess === secretNumber) {
  alert("You guessed it!");
} else if (guess > secretNumber) {
  alert("You guessed too high!");
} else {
  alert("You guessed too low");
}
