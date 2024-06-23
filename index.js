// Code your solutions in this file
/*
for ([initialization]; [condition]; [iteration]) {
    [loop body]
};
*/

/*
for (let num = 0; num <= 10; num += 2) {
    console.log(`I'am number ${num} and` );
};
*/

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
//     // debugger;
// };

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/



function writeCards(arrayNames, eventName) {
    let newArray = [];
    for (let i = 0; i < arrayNames.length; i++) {
        let message = (`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`);
        newArray.push(message);
    }
    return newArray;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(nums) {
    let i = nums;
    while (i >= 0) {
        console.log(i);
        i--;
    }
   
}
console.log(countDown(10))