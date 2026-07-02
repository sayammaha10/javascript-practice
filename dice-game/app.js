const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const result = document.querySelector("h1");
const btn = document.querySelector(".btn");

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const randomNumberOne = generateRandomNumber();
  const randomNumberTwo = generateRandomNumber();

  playerOne.setAttribute("src", `./images/dice-${randomNumberOne}.png`);
  playerTwo.setAttribute("src", `./images/dice-${randomNumberTwo}.png`);

  if (randomNumberOne > randomNumberTwo) {
    result.textContent = "Player 1 Wins!";
  } else if (randomNumberTwo > randomNumberOne) {
    result.textContent = "Player 2 Wins!";
  } else {
    result.textContent = "Draw!";
  }
}

btn.addEventListener("click", () => {
  rollDice();
});

// Check if the page was reloaded and call the rollDice() function if true
// if (
//   window.performance
//     .getEntriesByType("navigation")
//     .some((nav) => nav.type === "reload")
// ) {
//   rollDice();
// }
