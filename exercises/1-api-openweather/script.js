const start = () => {
  const cityName = document.getElementById("t1").value;
  const apiKey = document.getElementById("t2").value;
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiCall);
}
