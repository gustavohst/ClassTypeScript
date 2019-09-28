let message: string = "Help me, Obi-Wan Kenobi";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode); 

let favoriteDroid: string;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);

let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12;
}

let distance = 11;
console.log(`Is ${distance} parsec enough to beat Millenium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'} `);

// call: Function name // name: declared variable // before '=>' is arrow function
let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');


// Exmple 3:

function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);
