import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("renders correctly", () => {
  render(<App />);
  expect(screen.getByText("Temperature converter")).toBeInTheDocument();
});
