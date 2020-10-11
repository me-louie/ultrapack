import React from "react";
import Grid from "@material-ui/core/Grid";
import PackingList from "./PackingList.js";
import PieChart from "./PieChart.js";

export default class PackingContainer extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <PackingList />
        </Grid>
        <Grid item xs>
          <PieChart />
        </Grid>
      </Grid>
    );
  }
}
