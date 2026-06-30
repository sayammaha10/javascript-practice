const selectField = document.getElementById("select-field");
const selectText = document.getElementById("select-text");
const options = document.querySelectorAll(".options");
const arrowIcon = document.getElementById("arrow-icon");
const list = document.getElementById("list");

selectField.addEventListener("click", () => {
  list.classList.toggle("show");
  arrowIcon.classList.toggle("rotate");
});

options.forEach(function (option) {
  option.addEventListener("click", function () {
    selectText.textContent = this.textContent;
    list.classList.remove("show");
    arrowIcon.classList.remove("rotate");
  });
});
