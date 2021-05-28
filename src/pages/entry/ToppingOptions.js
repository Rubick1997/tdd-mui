import React from "react";
import { Grid, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

function ToppingOptions({ name, imagePath, updateItemCount }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                updateItemCount(name, e.target.checked ? 1 : 0);
              }}
            />
          }
          label={name}
        />
      </FormGroup>
    </Grid>
  );
}

export default ToppingOptions;
