# Exercise - API - OpenWeather
* create a simple web page that has:
    * an input textbox with id `cityName`
    * a submit button with id `submitButton`
    * a circle with id `weatherCircle`
        * that has a radius of `100px`
        * that has `#000000` as default colour
        * that has a `2px` border of `#000000` colour
    * two divs:
        * with id `sunrise` that has the default text of `(to be loaded)`
        * with id `sunset` that has the default text of `(to be loaded)`
* write a JS code that:
    * takes the user input
    * calls that [OpenWeather API](https://openweathermap.org/api) for the specific location entered by the user, using an API key that is stored in a separate file excluded from the git tree
    * according to the API's response, change the colour of `weatherCircle` to:
        * blue - if the weather is nice
        * grey - if the weather is cloudy
        * orange - if the weather is bad (rain, storm, snow, etc)
    * according to the API's response, display on screen (using the two dedicated divs) a human-readable time for the sunrise and the sunset
    * in case of API error, display in console the error
* Hints:
    * [OpenWeather API parameters](https://openweathermap.org/current#parameter)
    * [dates in JS](https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)