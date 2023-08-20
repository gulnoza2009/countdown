// Constantas *********************************
const undo = document.querySelector(".undo");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const modal = document.querySelector(".modalContainer");
const hourInput = document.querySelector(".hourInput");
const minutInput = document.querySelector(".minutInput");
const ok = document.querySelector(".ok");
const cansel = document.querySelector(".cansel");
const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");
const playIcon = document.querySelector(".playIcon");
const pauseIcon = document.querySelector(".pauseIcon");

let count = 60;
// Events **************************************
pause.addEventListener("click", () => {
  hourInput.value = "";
  minutInput.value = "";
  modal.classList.add("show");
});
cansel.addEventListener("click", () => {
  modal.classList.remove("show");
});
ok.addEventListener("click", () => {
  const hourNum = +hourInput.value;
  const minutNum = +minutInput.value;
  if (hourNum == 0 && minutNum == 0) modal.classList.add("show");
  else if (
    hourNum >= 0 &&
    hourNum < 100 &&
    minutNum >= 0 &&
    minutNum < 60 &&
    hourNum % 1 == 0 &&
    minutNum % 1 == 0
  ) {
    hour.textContent = hourNum;
    minut.textContent = minutNum;
    second.textContent = "00";
    count = 60;
    if (hourNum < 10) hour.textContent = `0${hourNum}`;
    if (minutNum < 10) minut.textContent = `0${minutNum}`;
    playIcon.classList.remove("none");
    pauseIcon.classList.add("none");
    modal.classList.remove("show");
  }
});
play.addEventListener("click", () => {
  playIcon.classList.toggle("none");
  pauseIcon.classList.toggle("none");
});
undo.addEventListener("click", () => {
  hour.textContent = "00";
  minut.textContent = "00";
  second.textContent = "00";
  count = 60;
});

const interval = setInterval(() => {
  if (minut.textContent === "00" && count == 60) {
    pauseIcon.classList.add("none");
    playIcon.classList.remove("none");
  }
  if (!pauseIcon.classList.contains("none")) {
    let minutNew = +minut.textContent;
    if (count == 60) {
      minutNew--;
      if (minutNew < 10 && minutNew > -1) {
        minut.textContent = `0${minutNew}`;
      } else if (minutNew > -1) minut.textContent = minutNew;
    }
    count--;
    if (count < 10) second.textContent = `0${count}`;
    else second.textContent = count;
    if (count == 0) {
      count = 60;
    }
    if (minut.textContent == 0) {
      if (hour.textContent > 0) {
        minut.textContent = 59;
        hour.textContent--;
      } else minut.textContent = "00";
    }
  }
}, 1000);
