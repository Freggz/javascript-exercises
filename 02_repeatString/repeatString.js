const repeatString = function(str, num) {
  if (num < 0) return 'ERROR';
  let repeatedString = ''
  while (num > 0) {
      repeatedString += str;
      num--;  
  }
  return repeatedString;
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;

