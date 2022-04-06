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
            <span>#${samplenumber == null ? "" : samplenumber}</span>    
            <span>Session start: ${
              new Date(startday).getDate() < 10
                ? new Date(startday).getDate().toString().padStart(2, "0")
                : new Date(startday).getDate()
            }</span>    
            <span>Session end: ${endday.slice(8, 11)}/${endday.slice(
            4,
            7
          )}/</span>    
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

const teste = new Date(3);
console.log(teste);

const formatDate = (text) => {};
