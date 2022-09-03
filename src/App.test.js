import { render, screen } from "@testing-library/react";
import Home from "./components/Home/Home";

test("check heading", () => {
  render(<Home />);
  expect(screen.findByText("heading")).toHaveTextContent(/save your time/i);
});
