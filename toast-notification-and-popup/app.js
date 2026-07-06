const popUp = document.querySelector(".pop-up");
const toastBox = document.getElementById("toast-box");

const successMessage = '<i class="fas fa-check-circle"></i>Success';
const errorMessage = '<i class="fas fa-times-circle"></i>Error';
const invalidMessage = '<i class="fas fa-exclamation-circle"></i>Invalid';

function openPopup() {
  popUp.classList.add("open-popup");
}

function closePopup() {
  popUp.classList.remove("open-popup");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);

  if (message.toLowerCase().includes("success")) {
    toast.classList.add("success");
  }

  if (message.toLowerCase().includes("error")) {
    toast.classList.add("error");
  }

  if (message.toLowerCase().includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
