var message = "Help me, Obi-Wan Kenobi";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsec enough to beat Millenium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
// call: Function name // name: declared variable // before '=>' is arrow function
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
// Exmple 3:
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
