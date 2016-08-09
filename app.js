/**
 * Created by chris on 2016/8/9.
 */

var Bucky = {
    printFirstName: function () {
        console.log("My name is Chris");
        console.log(this === Bucky);
    }
};

Bucky.printFirstName();

// The default calling context is global
function doSomethingWorthless () {
    console.log('\nI am worthless');
    console.log(this === global);
}
doSomethingWorthless();

