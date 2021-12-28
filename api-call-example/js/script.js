function makeJSONApiCall(){
    // do an HTTP call to a dummy API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
}

const makeWeatherApiCall = (cityName, appId) => {

    // this is a way to compose the API URL given two (query) parameters
    const apiCallURL1 = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=" + appId;

    fetch(apiCallURL1)

    // a more elegant way to compose the API URL
    const apiCallURL2 = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`

    //fetch(apiCallURL2)

}