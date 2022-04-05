let responseJson;

async function loadDashboard() {
  try {
    const response = await fetch(
      "https://timer-binahki.herokuapp.com/api/timer",
      {
        method: "GET",
        mode: "cors",
      }
    );
    responseJson = await response.json();

    // id activity samplenumber startday endday timeactive
    responseJson.map((x) => {});
    console.log(responseJson);
  } catch (error) {
    return error.message;
  }
}

loadDashboard();

function createDiv(span) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("timer-div");
}

function createSpan(text) {
  const newP = document.createElement("p");
}
