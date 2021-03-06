import Result from './Result'

const WeatherCircle = () => {

  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;
  const settings = ["sunrise", "sunset"]

  // dummy function
  const capitalise = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  const start = (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    console.log(`We are in the city of ${cityName} in the country of ${event.target.countryName.value}`);
    const varColor = document.getElementById("weatherCircle");
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(apiCall)
      .then(res => res.json())
      .then(res => {
        const getTime = (setting) => {
          const dt = new Date((res.sys[setting] + res.timezone) * 1000)
          return ((dt.getHours() - 1) + ":" + dt.getMinutes())
        }

        settings.forEach(setting => document.getElementById(setting).innerText = capitalise(setting) + " " + getTime(setting) )

        let var1 = res["weather"];
        let var2 = var1[0];
        let var3 = var2["main"];
        if (var3 === "Clear") {
          varColor.style.backgroundColor = "#5C7AEA";
        } else if (var3 === "Clouds") {
          varColor.style.backgroundColor = "#9D9D9D";
        } else {
          varColor.style.backgroundColor = "#EA5C2B";
        }
      })
      .catch(err => console.log("Error! ", err))
  }

  return (
    <div>
      <form onSubmit={start}>
        <label>Enter the name of the city: </label><br />
        <input type="text" name='cityName' placeholder='City Name' /><br />
        <input type="text" name='countryName' placeholder='Country Name'/><br />
        <input type="submit" id="submitButton" value='OpenWeather Api Call' />
      </form>
      <div id="weatherCircle"></div>
      {settings.map( (setting) => <Result key={setting} setting={setting}/>)}
    </div>
  )
}
export default WeatherCircle;
