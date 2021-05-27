import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function AlertBanner({ message, variant }) {
  const classes = useStyles();
  const alertMessage =
    message || "An unexpected error occured, try again later";
  const alertOption = variant || "error";

  return (
    <Alert className={classes.root} severity={alertOption}>
      {alertMessage}
    </Alert>
  );
}

export default AlertBanner;
