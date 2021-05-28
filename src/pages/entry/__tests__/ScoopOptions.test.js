import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ScoopOptions from "../ScoopOptions";

test("indicate if scoop ount is non-int or out of range", () => {
  render(<ScoopOptions name="" imagePth="" updateItemCount={jest.fn()} />);

  const vanillaInput = screen.getByRole("spinbutton");
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "12");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "abc");
  expect(vanillaInput).toHaveClass("is-invalid");

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "2");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
