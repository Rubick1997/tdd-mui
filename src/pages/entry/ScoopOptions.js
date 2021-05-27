import React from "react";
import { Grid } from "@material-ui/core";

function ScoopOptions({ name, imagePath }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Grid>
  );
}

export default ScoopOptions;
