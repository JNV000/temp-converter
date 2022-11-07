import { useReducer } from "react";
import reducer from "./reducer";

export default () => {
  // state should include values for both f and c temps.
  const [temps, dispatch] = useReducer(reducer, {
    celsius: 100,
    fahrenheit: 212,
  });

  return { temps, dispatch };
};
