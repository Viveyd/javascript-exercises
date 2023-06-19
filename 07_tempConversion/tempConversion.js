const convertToCelsius = function(fahrenheit) {
  return Number(((fahrenheit-32) * 0.5556).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return Number(((celsius*1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
