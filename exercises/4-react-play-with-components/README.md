# Exercise - React app - Playing with components
* create a React SPA
* the main `App` has:
  * 3 components:
    * `CustomHeader`
      * displays `HereGoesLogo` on the top left
      * displays a white hamburger *SVG* menu icon (download one from the Internet and place inside a folder called `assets`) on the top right
      * has `blue` background 
    * `CustomBody`
      * has an array with all the names of the months (e.g. `['January', 'February', ... , 'December']`)
      * iterates the months array and for each item:
        * calls a component called `CustomMonth` that has 2 props:
          * `monthName`
          * `monthNumber`
        * each `CustomMonth`
          * has a black border of `3px`
          * shows the following text with the necessary info: `[name of the month] is the [number of the month][ordinal] month of the year`
            * `[ordinal]` will be `th`, `st`, `rd` or `nd` according to the number of the month
          * shows a random picture coming from the web (you could use this [service](https://random.responsiveimages.io/) or other ones you can find on the web)
    * `CustomFooter`
      * has a light green background
      * shows on the left the copyright with your name and the year
      * shows on the right a link to your GitHub profile\
        * when the user hovers on the link, the text will have an orange underline
  * a `40px` *space* from the left and from the right
  * uses the `Roboto Medium 500` font from [Google Fonts](https://fonts.google.com/specimen/Roboto)