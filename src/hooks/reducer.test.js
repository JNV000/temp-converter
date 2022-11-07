import reducer from "./reducer";

it("change fahrenheit to conversion from celsius", () => {
  const state = {
    celsius: 100,
    fahrenheit: 100,
  };

  // have action set fahrenheit based on current celsius
  const action = {
    type: "SET_FAHRENHEIT",
    input: 100,
  };
  // use reducer to get new state
  const newState = reducer(state, action);

  // new state should have fahrenheit at 212
  expect(newState.fahrenheit).toBe("212.00");
  // expect celsius to be unchanged
  expect(newState.celsius).toBe("100");
});

it("change celsius to conversion from fahrenheit", () => {
  const state = {
    celsius: 100,
    fahrenheit: 212,
  };

  // have action set celsius based on current fahrenheit
  const action = {
    type: "SET_CELSIUS",
    input: 212,
  };
  // use reducer to get new state
  const newState = reducer(state, action);

  // new state should have celsius at 100
  expect(newState.celsius).toBe("100.00");
  // expect fahrenheit to be unchanged
  expect(newState.fahrenheit).toBe("212");
});
