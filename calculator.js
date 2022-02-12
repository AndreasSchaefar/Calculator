const { reduce } = require("lodash");

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.length ? reduce(a, (prev, curr) => prev + curr) : 0;
};

const multiply = function(a,b) {
    return reduce(a, (prev, curr) => prev * curr);
};

const power = function(a, b) {
    return a ** b
};

const factorial = function(a) {
	if (a == 0 || a == 1) {
        return 1;
    } else if (a < 0) {
        return -1;
    };
    return a * factorial(a-1);
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
