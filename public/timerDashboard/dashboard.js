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
    const timers = responseJson.map(
      ({ activity, samplenumber, startday, endday, timeactive }) => `
        <div class="timer-div">
            <span>${activity}</span>    
            <span>#${samplenumber == null ? "" : samplenumber}</span>    
            <span>ID: ${startday}</span>    
            <span>ID: ${endday}</span>    
            <span>ID: ${timeactive}</span>    
        </div>
    `
    );

    container.innerHTML += timers;
  } catch (error) {
    return error.message;
  }
};

loadDashboard();
