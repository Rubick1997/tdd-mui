import SummaryForm from "../SummaryForm";
import { render, screen, fireEvent } from "@testing-library/react";

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(checkbox).not.toBeChecked;
  expect(button).toBeDisabled();
});

test("checking box enables the button back", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
