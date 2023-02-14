const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let total = arr[0];
  for(let i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(base,exponent) {
  let result = base;
	for(let i = 1; i < exponent; i++) {
    result *= base; 
  }
  return result;
};

const factorial = function(num) {
	let total = 1;
  for(let i = num; i > 1; i--) {
      total *= i;
  }
  return total;
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
