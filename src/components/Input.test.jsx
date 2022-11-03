import { render, screen } from "@testing-library/react";
import Input from "./Input";

it("renders an input with the proper lave and id when provided both", () => {
  render(<Input label="Test" id="test" />);

  const input = screen.getByLabelText("Test");

  expect(input).toBeInTheDocument();
});
