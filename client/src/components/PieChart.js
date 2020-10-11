import React from "react";
import { PieChart as Chart } from "react-minimal-pie-chart";

export default class PieChart extends React.Component {
  render() {
    return (
      <Chart
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
        radius={40}
      />
    );
  }
}
