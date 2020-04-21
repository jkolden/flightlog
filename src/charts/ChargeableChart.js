import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    name: "January",
    PIC: 120,
    SIC: 40,
  },
  {
    name: "February",
    PIC: 150,
    SIC: 10,
  },
  {
    name: "March",
    PIC: 150,
    SIC: 30,
  },
];

export default class ChargeableChart extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" gutterBottom>
          Flight Hours by Month
        </Typography>
        <ResponsiveContainer>
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PIC" fill="#8884d8" />
            <Bar dataKey="SIC" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
