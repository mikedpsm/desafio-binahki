const time_el = document.getElementById("timer1");
const start_btn = document.getElementById("start1");
const stop_btn = document.getElementById("stop1");
const reset_btn = document.getElementById("reset1");
const close_btn = document.
const watchContainer = document.querySelector(".watch-container");
const addTimer_btn = document.getElementById("addTimer");

let seconds = 0;
let interval = null;

// Reference for timer id controllers
let timerNumber = 2;

start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", finish);

addTimer_btn.addEventListener("click", createTimer);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / (60 * 60));
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function finish() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
}

function close(){
  
}

// Dynamic HTML

function createTimer() {
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
