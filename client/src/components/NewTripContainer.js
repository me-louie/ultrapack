import React from "react";
import { withStyles } from "@material-ui/core";
import NewTripForm from "./NewTripForm";
// import TripMap from "./experimental/TripMap";

const styles = (theme) => ({
  newTripContainer: {
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    justifyContent: "center",
  },
});

class NewTripContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.newTripContainer}>
        {/* <Grid container alignItems="center"> */}
        {/* <Grid item> */}
        <NewTripForm />
        {/* </Grid> */}
        {/* <Grid item sm={5} style={{ position: "relative", height: "500px", width: "500px" }}>
            <TripMap />
          </Grid> */}
        {/* </Grid> */}
      </div>
    );
  }
}

export default withStyles(styles)(NewTripContainer);
