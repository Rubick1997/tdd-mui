import React, { useState } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

function SummaryForm() {
  const [checked, setChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}> Terms and Conditions</span>
    </span>
  );
  return (
    <form action="">
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label={checkboxLabel}
      />
      <Button
        color="primary"
        variant="contained"
        disabled={!checked}
        type="submit"
      >
        Confirm Order
      </Button>
    </form>
  );
}

export default SummaryForm;
