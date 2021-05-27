import React from "react";
import { Grid, FormControl, InputLabel, Input } from "@material-ui/core";

function ScoopOptions({ name, imagePath, updateItemCount }) {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <form>
        <FormControl>
          <InputLabel>{name}</InputLabel>
          <Input type="number" value={0} onChange={handleChange} />
        </FormControl>
      </form>
    </Grid>
  );
}

export default ScoopOptions;
