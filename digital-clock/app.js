const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const meridiem = document.getElementById("meridiem");

setInterval(() => {
  let currentTime = new Date();
  let hrs = currentTime.getHours();
  let meridiemText = "A.M.";

  if (hrs >= 12) {
    hrs = hrs % 12;
    meridiemText = "P.M.";
  }

  if (hrs === 0) {
    hrs = 12;
    meridiemText = "A.M.";
  }

  meridiem.textContent = meridiemText;
  hour.textContent = (hrs < 10 ? "0" : "") + hrs;
  minute.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  second.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
