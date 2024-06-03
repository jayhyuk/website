import React from "react";
import { Chart } from "react-google-charts";
import { useState } from 'react';

export const options = {
  allowHtml: true,
};

export default function Timeline(props) {
 const [data, setData] = useState('');
  
  return (
    <Chart
      chartType="OrgChart"
      data={props.data}
      options={options}
      width="100%"
      height="400px"
    />
  );
}
