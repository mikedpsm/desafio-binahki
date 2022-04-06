const container = document.querySelector(".timers-container");

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
        ({ id, activity, samplenumber, startday, endday, timeactive }) =>
          `
        <div class="timer-div">
            <span>ID: ${id}</span>    
            <span>Name: ${activity}</span>    
            <span>Sample number: ${
              samplenumber == null ? "" : samplenumber
            }</span>    
            <span>Session start: ${
              new Date(startday).getDate() < 10
                ? new Date(startday).getDate().toString().padStart(2, "0")
                : new Date(startday).getDate()
            }/${
            new Date(startday).getMonth() + 1 <= 9
              ? (new Date(startday).getMonth() + 1).toString().padStart(2, "0")
              : new Date(startday).getMonth() + 1
          }/${
            new Date(startday).getFullYear() < 10
              ? new Date(startday).getFullYear().toString()
              : new Date(startday).getFullYear()
          }</span>
            <span>Session end: ${
              new Date(endday).getDate() < 10
                ? new Date(endday).getDate().toString().padStart(2, "0")
                : new Date(endday).getDate()
            }/${
            new Date(endday).getMonth() + 1 <= 9
              ? (new Date(endday).getMonth() + 1).toString().padStart(2, "0")
              : new Date(endday).getMonth() + 1
          }/${
            new Date(endday).getFullYear() < 10
              ? new Date(endday).getFullYear().toString()
              : new Date(endday).getFullYear()
          }</span>
            <span>Time active: ${
              Math.floor(timeactive / (60 * 60)) > 9
                ? Math.floor(timeactive / (60 * 60))
                : Math.floor(timeactive / (60 * 60))
                    .toString()
                    .padStart(2, "0")
            }:${
              Math.floor((timeactive - ((Math.floor(timeactive / (60 * 60))) * 60)) / 60)
            .toString()
            .padStart(2, "0")}:${
              Math.floor(timeactive % 60)
            .toString()
            .padStart(2, "0")} hours</span>
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
