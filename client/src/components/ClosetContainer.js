import React from "react";
import { Typography, Grid } from "@material-ui/core";
import PackingList from "./PackingList";

export default class ClosetContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" color={"textSecondary"}>
              Closet
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" color={"textSecondary"}>
              Search
            </Typography>
          </Grid>
        </Grid>
        <PackingList />
      </div>
    );
  }
}
