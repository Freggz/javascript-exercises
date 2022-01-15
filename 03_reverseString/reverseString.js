const reverseString = function(str) {
let splitString = str.split("");
let reverseString = splitString.reverse();
let joinArray = reverseString.join("");
return joinArray;
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
