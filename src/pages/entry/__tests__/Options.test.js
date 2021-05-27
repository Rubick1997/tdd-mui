import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test("displays image from each scoop option from server", async () => {
  render(<Options optionType="scoops" />);
  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image from each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(2);

  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual(["Cherries topping", "M&Ms topping"]);
});
