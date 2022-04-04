const time_el = document.getElementById("timer1");

const start_btn = document.getElementById("start1");
const stop_btn = document.getElementById("stop1");
const reset_btn = document.getElementById("reset1");
const idInput = document.getElementById("idInput1");

const addTimer_btn = document.getElementById("addTimer");
const watchContainer = document.querySelector(".watch-container");
const label = document.querySelector(".input-container label");

let seconds = 64790;
let interval = null;

let timerNumber = 2;

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / (60 * 60));
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;

  if (seconds >= 64800) {
    stop();
  }
}

function start() {
  if (interval) {
    return;
  } else if (!interval && idInput.value === "") {
    alertInput();
    return;
  }

  removeAlert();
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  seconds = 0;
}

function finish() {
  stop();
}

/*
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
*/
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", finish);

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
  const newTime = document.createElement("div");
  newTime.classList.add("time");
  newTime.textContent = "00:00:00";
  newTime.setAttribute("id", `timer${timerNumber}`);

  const newForm = document.createElement("form");

  const newInputId = document.createElement("input");
  newForm.append(newInputId);
  newInputId.setAttribute("type", "text");
  newInputId.setAttribute("placeholder", "ID");

  const newInputSample = document.createElement("input");
  newForm.append(newInputSample);
  newInputSample.setAttribute("type", "number");
  newInputSample.setAttribute("placeholder", "Sample Number #");

  const newControls = document.createElement("div");
  newControls.classList.add("controls");

  const newStartBtn = document.createElement("button");
  newStartBtn.innerText = "START";
  const newStopBtn = document.createElement("button");
  newStopBtn.innerText = "STOP";
  const newFinishBtn = document.createElement("button");
  newFinishBtn.innerText = "FINISH";

  newStartBtn.addEventListener("click", start);
  newStopBtn.addEventListener("click", stop);
  newFinishBtn.addEventListener("click", finish);

  newControls.append(newStartBtn);
  newControls.append(newStopBtn);
  newControls.append(newFinishBtn);

  const newTimer = document.createElement("div");
  newTimer.classList.add("watch");
  newTimer.append(newTime);
  newTimer.append(newControls);
  newTimer.append(newForm);

  watchContainer.append(newTimer);

  timerNumber++;

  if (timerNumber < 11) {
    addTimer_btn.disabled = false;
  } else {
    addTimer_btn.disabled = true;
  }
}