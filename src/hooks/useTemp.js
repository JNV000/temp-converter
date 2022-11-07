import { useReducer } from "react";
import reducer from "./reducer";

export default () => {
  // state should include values for both f and c temps.
  const [state, dispatch] = useReducer(reducer, {
    celsius: 100,
    fahrenheit: 212,
  });

  const { celsius, fahrenheit } = state;

  return { celsius, fahrenheit, dispatch };
};
