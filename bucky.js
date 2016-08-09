/**
 * Created by chris on 2016/8/9.
 */
var movies = require("./movies");

var buckysMovies = movies();
buckysMovies.favMovie = "Good Will Hunting";
console.log("Bucky's favorite movie is: " + buckysMovies.favMovie);