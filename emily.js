/**
 * Created by chris on 2016/8/9.
 */
var movies = require("./movies");


var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilysMovies.favMovie);