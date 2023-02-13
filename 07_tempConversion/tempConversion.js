const convertToCelsius = function(temp) {
  const converted = (temp - 32) * 5/9;
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  const converted = temp * (9/5) + 32;
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
