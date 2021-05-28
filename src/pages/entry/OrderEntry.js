import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { Button } from "@material-ui/core";

function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total:{orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")} color="primary" variant="contained">
        Order Sundae!
      </Button>
    </div>
  );
}

export default OrderEntry;
