const colors = ["Green", "Red", "RGBA(133, 122, 200)", "#F15025"];

const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color-code");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.background = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
