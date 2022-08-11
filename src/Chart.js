import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPontValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPontValues);

  const itemList = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
      ></ChartBar>
    );
  });

  return <div className="chart">{itemList}</div>;
};

export default Chart;
