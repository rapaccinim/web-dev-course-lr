const start = () => {
  const cityName = document.getElementById("cityName").value;
  const varColor = document.getElementById("weatherCircle");
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiCall)
    .then(res => res.json())
    .then(res => {
      const getTime = (event) =>{
        let r = res.sys;
        let dt = new Date((r[event] + res.timezone) * 1000)
        let h = (dt.getHours() - 1)
        let m = "0" + dt.getMinutes()
        let t = h + ":" + m.substr(-2)
        return t;
      }
      const sunrise = "sunrise";
      document.getElementById("p-div1").innerText = "Sunrise: " + getTime(sunrise);
      const sunset = "sunset";
      document.getElementById("p-div2").innerText = "Sunset: " + getTime(sunset);

      let var1 = res["weather"];
      let var2 = var1[0];
      let var3 = var2["main"];
      if (var3 == "Clear") {
        varColor.style.backgroundColor = "#5C7AEA";
      } else if (var3 == "Clouds") {
        varColor.style.backgroundColor = "#9D9D9D";
      } else {
        varColor.style.backgroundColor = "#EA5C2B";
      }
    })
    .catch(err => console.log("Error! ", err))
}
