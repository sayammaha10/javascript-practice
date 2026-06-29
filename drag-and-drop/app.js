const draggableElements = document.querySelectorAll(".draggableElements");
const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");

draggableElements.forEach(function (element) {
  element.addEventListener("dragstart", (e) => {
    let selected = e.currentTarget;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", (e) => {
      e.preventDefault();
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", (e) => {
      e.preventDefault();
      leftBox.appendChild(selected);
      selected = null;
    });
  });
});
