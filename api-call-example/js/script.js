function makeJSONApiCall(){
    // do an HTTP call to a dummy API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
}

const makeWeatherApiCall = (cityName, appId, jsonKey ) => {

    // a more elegant way to compose the API URL
    const apiCallURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`

    fetch(apiCallURL)
        .then(res => {
            console.log( res.status===200 ? "OKKKK!" : "Ops")
            return res
        })
        .then(res => res.json())
        .then(response => console.log(`Key: ${jsonKey}, Value:`, response[jsonKey]))
        .catch(err => console.log("Error! ", err))
}