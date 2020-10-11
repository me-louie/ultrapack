import React from "react";
import TripCard from "./TripCard";
import { Typography, Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
            <Fab className="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
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
