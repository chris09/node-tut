/**
 * Created by chris on 2016/8/9.
 */
// Everything is Reference in Node.js
var Bucky = {
    favFood: 'bacon',
    favMovie: 'Chappie'
};

var Person = Bucky;
Person.favFood = 'salad';
console.log(Bucky.favFood);

// two equal sign vs. three equal sign
console.log(19 == '19');
console.log(19 === '19');
