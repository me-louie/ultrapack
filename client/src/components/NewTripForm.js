import React from "react";
import {
  Paper,
  Typography,
  withStyles,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import AddressSearchBar from "./AddressSearchBar";
import { connect } from "react-redux";
import { setNameDateDescription } from "../app/actions/tripActions";
import { trailheadError } from "../app/actions/errorActions";
// import TripMap from "./experimental/TripMap";
// import LocationSearchInput from "./experimental/LocationSearchInput";

const styles = (theme) => ({
  newTripForm: {
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    justifyContent: "center",
  },
  paper: {
    // width: "50%",
    margin: theme.spacing(5),
    padding: theme.spacing(7),
  },
  header: {
    variant: "h2",
  },
});

class NewTripForm extends React.Component {
  state = {
    name: "",
    dateTime: new Date().toISOString().substring(0, 16),
    description: "",
    nameError: false,
    descriptionError: false,
  };


  // form handlers
  handleNameChange = (e) => {
    if (e.target.value !== null) {
      this.setState({ nameError: false });
    }
    this.setState({ name: e.target.value });
  };

  handleDateChange = (e) => {
    this.setState({ dateTime: e.target.value });
  };

  handleDescriptonChange = (e) => {
    if (e.target.value !== null) {
      this.setState({ descriptionError: false });
    }
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
    if (this.state.name === "") {
      this.setState({ nameError: true });
    }
    if (this.state.description === "") {
      this.setState({ descriptionError: true });
    }
    if (this.props.trailhead === "") {
      this.props.trailheadError(true);
    }
    if (
      this.state.nameError ||
      this.state.descriptionError ||
      !this.props.trailhead
    ) {
      return;
    }
    this.props.setNameDateDescription({
      name: this.state.name,
      dateTime: this.state.dateTime,
      description: this.state.description,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.newTripForm}>
        <Paper className={classes.paper}>
          <Grid container direction="column" spacing={5}>
            <Typography>Enter your trip details:</Typography>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="body1">Trip Name*:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="trip-name-field"
                  label="Trip Name"
                  variant="outlined"
                  onChange={this.handleNameChange}
                  error={this.state.nameError}
                  helperText={this.state.nameError ? "Field is required." : ""}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="body1">Date/Time*:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="datetime-local"
                  label="Departure Date"
                  type="datetime-local"
                  defaultValue={this.state.dateTime}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleDateChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="body1">Trailhead:*</Typography>
              </Grid>
              <Grid item>
                <AddressSearchBar />
              </Grid>
            </Grid>

            <Grid
              container
              item
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="body1">Description:*</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="trip-description-field"
                  label="Description"
                  variant="outlined"
                  error={this.state.descriptionError}
                  helperText={
                    this.state.descriptionError ? "Field is required." : ""
                  }
                  onChange={this.handleDescriptonChange}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2} justify="flex-end">
              <Grid item>
                <Button onClick={console.log("Back CLICKED")}>Back</Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //   name: state.activeTripDetails.name,
  //   dateTime: state.activeTripDetails.dateTime,
  trailhead: state.activeTripDetails.trailhead,
  trailheadErr: state.errors.trailheadErr,
  //   description: state.activeTripDetails.description,
});

const mapDispatchToProps = { setNameDateDescription, trailheadError };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewTripForm));
