import emojipedia from "./emojipedia.js";

const numbers = [10, 5, 34, 56, 20];

//Map -Create a new array by doing something with each item in an array.
const map = numbers.map(function (num){
    return num *2;
})

//Filter - Create a new array by keeping the items that return true.
const filter = numbers.filter(function (num){
    return num > 30;
})

//Reduce - Accumulate a value by doing something to each item in an array.
const reduce = numbers.reduce(function(accumlator, currentNumber){
    return accumlator + currentNumber;
})

//Find - find the first item that matches from an array.
const find = numbers.find(function (num){
    return num > 10;
});

//FindIndex - find the index of the first item that matches.
const fIndex = numbers.findIndex(function (num){
    return num > 10;
})

/* console.log(map);
console.log(filter);
console.log(reduce);
console.log(find);
console.log(fIndex); */

//find meaning on emoji, and only show 100 character
const tes = emojipedia.map(function(mean){
    return mean.meaning.substring(0, 100);
});

