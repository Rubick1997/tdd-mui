import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
  render(<App />);
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  userEvent.click(cherriesCheckbox);
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundae/i,
  });
  userEvent.click(orderSummaryButton);

  const summaryHeading = await screen.findByRole("heading", {
    name: "Order Summary",
  });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = screen.getByRole("heading", {
    name: "Scoops: $2.00",
  });
  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  });
  expect(toppingsHeading).toBeInTheDocument();

  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  userEvent.click(checkbox);
  userEvent.click(button);

  //expect loading ti show
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  //POST request is happening here

  const thankYouHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thankYouHeader).toBeInTheDocument();

  //expect loading to hide
  const notLoading = screen.queryByText(/loading/i);
  expect(notLoading).not.toBeInTheDocument();

  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();

  const newOrderButton = screen.getByRole("button", { name: /new order/i });
  userEvent.click(newOrderButton);

  //reseting is happening here
  const scoopsTotal = screen.getByText("Scoops total: $0.00");
  const toppingsTotal = screen.getByText("Toppings total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();
  expect(toppingsTotal).toBeInTheDocument();

  await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await screen.findByRole("checkbox", {
    name: "Cherries",
  });
});

test("optional topping on summary page", async() => {
  render(<App />);
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundae/i,
  });
  userEvent.click(orderSummaryButton);
  const summaryHeading = await screen.findByRole("heading", {
    name: "Order Summary",
  });
  expect(summaryHeading).toBeInTheDocument();
  const noToppings = screen.queryByText(/topping/i);
  expect(noToppings).not.toBeInTheDocument();
});
