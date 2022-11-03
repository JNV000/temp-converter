import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Input from "./Input";

it("renders an input with the proper lave and id when provided both", () => {
  render(<Input label="Test" id="test" />);

  const input = screen.getByLabelText("Test");

  expect(input).toBeInTheDocument();
});

it("renders an input with proper label and id using default for the label", () => {
  render(<Input id="test" />);

  const input = screen.getByLabelText("Test");

  expect(input).toBeInTheDocument();
});

it("calls a callback whenever we type in the input", () => {
  const callback = vi.fn();
  const user = userEvent.setup();

  render(<Input id="test" handleChange={callback} />);

  const input = screen.getByLabelText("Test");
  user.type(input, "123");

  expect(callback).toHaveBeenCalled();
});
