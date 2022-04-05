async function loadDashboard() {
  try {
    const response = await fetch(
      "https://timer-binahki.herokuapp.com/api/timer",
      {
        method: "GET",
        mode: "cors",
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    return error.message;
  }
}

loadDashboard();
