/**
 * Created by chris on 2016/8/9.
 */

var person = {
    firstname: "Chris",
    lastname: 'Yu',
    age: 38
};

console.log(person);

var printBacon = function () {
    console.log('bacon is healthy, don\'t believe doctors.');
};

printBacon();

setTimeout(printBacon, 5000);

