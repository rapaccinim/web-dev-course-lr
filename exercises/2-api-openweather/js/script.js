const start = () => {
  const cityName = document.getElementById("cityName").value;
  const varColor = document.getElementById("weatherCircle");
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const response = fetch(apiCall)
    .then(res => res.json())
    .then(res => {
      let dt1 = new Date((res.sys.sunrise + res.timezone) * 1000)
      let h1 = (dt1.getHours() - 1)
      let m1 = "0" + dt1.getMinutes()
      let t1 = h1 + ":" + m1.substr(-2)
      document.getElementById("p-div1").innerText = "Sunrise: " + t1;

      let dt2 = new Date((res.sys.sunset + res.timezone) * 1000)
      let h2 = (dt2.getHours() - 1)
      let m2 = "0" + dt2.getMinutes()
      let t2 = h2 + ":" + m2.substr(-2)
      document.getElementById("p-div2").innerText = "Sunset: " + t2;

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
