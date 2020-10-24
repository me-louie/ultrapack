import React from "react";
import TripCard from "./TripCard";
import { Typography, Grid, Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import "../App.css";

export default class TripContainer extends React.Component {
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
          <Grid item xs>
            <TripCard />
          </Grid>
          <Grid item xs>
            <TripCard />
          </Grid>
          <Grid item xs>
            <TripCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}
