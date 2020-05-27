var age = prompt("How old are you?");
// if (age < 18) {
//   console.log("You're too young to enter the bar");
// } else if (age < 21) {
//   console.log("You can come in, but you cannot drink");
// } else {
//   console.log("You are old enough to come inside and drink");
// }
if (age < 0) {
  console.log("Error, you can't exist!");
} else if (age === 21) {
  console.log("Happy 21st birthday!");
} else if (age % 2 !== 0) {
  console.log("Your age is odd!");
} else if (age % Math.sqrt(age) === 0) {
  console.log("Perfect Square!");
}
