const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((total,e) => total + e ,0);
};

const multiply = function(arr) {
  return arr.reduce((total, e) => total * e,1);

};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(num) {
  let resp = 1
	for(let i = 1; i<=num ; i++){
    resp*= i
  }
  return resp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
