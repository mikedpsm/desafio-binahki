const time_el = document.getElementById("timer1");

const start_btn = document.getElementById("start1");
const stop_btn = document.getElementById("stop1");
const reset_btn = document.getElementById("reset1");
const close_btn = document.getElementById("close1");
const idInput = document.getElementById("idInput1");

const addTimer_btn = document.getElementById("addTimer");
const watchContainer = document.querySelector(".watch-container");
const label = document.querySelector(".input-container label");

let seconds = 0;
let interval = null;

// Reference for timer id controllers
let timerNumber = 2;

// Arrays
const secondsArr = [];
const intervalArr = [];

secondsArr.push(seconds);
console.log(secondsArr);

function runInterval() {
  console.log("run interval");
  const interval = setInterval(runTimer, 1000);
  intervalArr.push(interval);
}

function runTimer() {
  seconds++;

  let hrs = Math.floor(seconds / (60 * 60));
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;
  console.log(secondsArr);
}

const objTimer1 = {
  id: timerNumber - 1,
  isRunning: false,
  interval: function () {
    console.log("interval rodando");
    setInterval(this.timer, 1000);
  },
  killInterval: function () {
    clearInterval(this.interval);
  } /*
  seconds: 0,
  timer: function () {
    console.log("timer");
    this.seconds++;

    let hrs = Math.floor(this.seconds / (60 * 60));
    let mins = Math.floor((this.seconds - hrs * 3600) / 60);
    let secs = this.seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
  },*/,
  start: function () {
    if (this.isRunning) {
      console.log("nao passou");
      return;
    } else if (!this.isRunning && idInput.value === "") {
      alertInput();
      return;
    }

    console.log("passou");
    removeAlert();
    runInterval();
    this.isRunning = true;
  },
  stop: function () {
    killInterval();
    this.isRunning = false;
    this.interval = null;
  },
  finish: function () {
    if (idInput.value === "") {
      alertInput();
    } else {
      removeAlert();
      stop();
      this.seconds = 0;
      time_el.innerText = "00:00:00";
    }
  },
  delete: function () {
    this.stop();
    this.seconds = 0;
  },
};

start_btn.addEventListener("click", objTimer1.start);
stop_btn.addEventListener("click", objTimer1.stop);
reset_btn.addEventListener("click", objTimer1.finish);

addTimer_btn.addEventListener("click", createTimer);

function alertInput() {
  idInput.style.border = "0.2rem solid var(--warning)";
  label.classList.remove("hidden");
}

function removeAlert() {
  idInput.style.border = "none";
  label.classList.add("hidden");
}

// Dynamic HTML

function createTimer() {
  console.log("criou");
  const newTime = document.createElement("div");
  newTime.classList.add("time");
  newTime.textContent = "00:00:00";
  newTime.setAttribute("id", `timer${timerNumber}`);

  const newControls = document.createElement("div");
  newControls.classList.add("controls");

  const newStartBtn = document.createElement("button");
  newStartBtn.innerText = "START";
  const newStopBtn = document.createElement("button");
  newStopBtn.innerText = "STOP";
  const newFinishBtn = document.createElement("button");
  newFinishBtn.innerText = "FINISH";
  const newCloseBtn = document.createElement("button");
  newCloseBtn.innerText = "X";

  newStartBtn.addEventListener("click", start);
  newStopBtn.addEventListener("click", stop);
  newFinishBtn.addEventListener("click", finish);
  newCloseBtn.addEventListener("click", close);

  newControls.append(newStartBtn);
  newControls.append(newStopBtn);
  newControls.append(newFinishBtn);
  newControls.append(newCloseBtn);

  const newTimer = document.createElement("div");
  newTimer.classList.add("watch");
  newTimer.append(newTime);
  newTimer.append(newControls);
  // newTimer.setAttribute("id", `start${timerNumber}`);

  watchContainer.append(newTimer);

  timerNumber++;

  if (timerNumber < 11) {
    addTimer_btn.disabled = false;
  } else {
    addTimer_btn.disabled = true;
  }
}
