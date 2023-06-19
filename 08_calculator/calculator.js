const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(nArr) {
  return nArr.reduce((sum, cur) => sum + cur, 0)
};

const multiply = function(...nArr) {
  return  nArr.reduce((product, cur) => product * cur, 1);
};

const power = function(n, exp) {
  return n ** exp;
};

const factorial = function(n) {
  if(n <= 1) return 1;
	return n * factorial(n-1);
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
