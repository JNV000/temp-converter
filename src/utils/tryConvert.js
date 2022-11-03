const conversions = {
  convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

export function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  // 'conversion' will be either 'convertToCelsius' or 'convertToFahrenheit'
  const output = conversions[conversion](input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
