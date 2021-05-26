import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Popover,
  makeStyles
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function SummaryForm() {
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: "blue" }}>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Terms and Conditions
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>No ice cream will actually be delivered</Typography>
        </Popover>
      </span>
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
      >
        Confirm Order
      </Button>
    </form>
  );
}

export default SummaryForm;
