const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const element = e.currentTarget.classList;
    if (element.contains("increase")) {
      count++;
    } else if (element.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#102a42";
    }
    value.textContent = count;
  });
});
