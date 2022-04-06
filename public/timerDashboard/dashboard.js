const container = document.querySelector(".timers-container");
//const { format, parseISO } = require("date-fns");

const loadDashboard = async function () {
  try {
    const response = await fetch(
      "https://timer-binahki.herokuapp.com/api/timer",
      {
        method: "GET",
        mode: "cors",
      }
    );
    const responseJson = await response.json();

    //id activity samplenumber startday endday timeactive
    const timers = responseJson
      .map(
        ({ id, activity, samplenumber, startday, endday, timeactive }) => `
        <div class="timer-div">
            <span>ID: ${id}</span>    
            <span>Name: ${activity}</span>    
            <span>#${samplenumber == null ? "" : samplenumber}</span>    
            <span>Session start: ${startday}</span>    
            <span>Session end: ${console.log(new Date(endday))}</span>    
            <span>Time active: ${(timeactive / 60 / 60).toFixed(2)} hours</span>
        </div>
    `
      )
      .join("");

    container.innerHTML += timers;
  } catch (error) {
    return error.message;
  }
};

loadDashboard();
