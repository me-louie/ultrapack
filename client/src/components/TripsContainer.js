import React from "react";
import TripCard from "./TripCard";
import { Typography, Grid, Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import "../App.css";
import { getTrips } from "../app/actions/tripActions";
import { connect } from "react-redux";

class TripContainer extends React.Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" color={"textSecondary"}>
              Trips
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="Add">
              <Link to="/trips/new">
                <Fab className="fab" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {this.props.trips && this.props.trips.length ? (
            this.props.trips.map((trip, index) => (
              <Grid item xs key={index}>
                <TripCard
                  name={trip.name}
                  description={trip.description}
                  dateTime={trip.dateTime}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs>
              <Typography>No trips yet :( </Typography>{" "}
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips,
});

const mapDispatchToProps = {
  getTrips,
};
export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
