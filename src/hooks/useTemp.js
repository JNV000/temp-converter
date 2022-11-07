import { useReducer } from "react";
import reducer from "./reducer";

export default () => {
  // state should include values for both f and c temps.
  const [temp, dispatch] = useReducer(reducer, {
    celsius: 100,
    fahrenheit: 212,
  });

  return [temp, dispatch];
};
