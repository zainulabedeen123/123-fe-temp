import React from 'react';
import Chart from 'react-apexcharts';

const Chart3 = () => {
  const series = [44, 55];
  const options = {
    chart: {
      type: 'donut'
    },
    stroke: {
      width: 0,
      curve: 'smooth',
    },
    labels: ['Mobile', 'Desktop'],
    colors: ['#00FBA0', '#FB0078'],
    legend: {
      position: 'right',
      labels: {
        colors: '#BFBFBF',
        useSeriesColors: false
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true
    }
  };

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="donut" height="80" width="220" />
    </div>
  );
};

export default Chart3;
