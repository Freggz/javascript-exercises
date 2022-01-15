const ftoc = function(fnum) {
let cels = (fnum - 32) * (5/9);
let celsRounded = Math.round(cels * 10) / 10;
return celsRounded;
};

const ctof = function(cnum) {
let fahr = cnum * (9/5) + 32;
let fahrRounded = Math.round(fahr * 10) / 10;
return fahrRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
