import { tryConvert } from "../utils/tryConvert";

export default function reducer(state, action) {
  // make new state (eslint does not like declaring in a switch)
  const newTemps = { celsius: state.celsius, fahrenheit: state.fahrenheit }; // copy the state
  // if Fahrenheit input was changed
  switch (action.type) {
    // if fahrenheit input is changed
    case "SET_CELSIUS":
      // use try convert function
      newTemps.celsius = tryConvert(state.fahrenheit, "convertToCelsius");
      // return new celsius
      return {
        celsius: newTemps.celsius.toString(),
        fahrenheit: newTemps.fahrenheit.toString(),
      };
    // if Celsius input was changed
    case "SET_FAHRENHEIT":
      newTemps.fahrenheit = tryConvert(state.celsius, "convertToFahrenheit");

      return {
        celsius: newTemps.celsius.toString(),
        fahrenheit: newTemps.fahrenheit.toString(),
      };
    default:
      throw new Error("Invalid action");
  }
}
