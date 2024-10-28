import React from 'react';
import Chart from 'react-apexcharts';

const Chart1 = ({ data }) => {
  // Create the series data with conditional coloring
  const seriesData = data.map(value => ({
    x: value,
    y: value,
    fillColor: value <= 20 ? '#00FBA0' : '#FB0078' // Green for 1-20, Pink for 21-40
  }));

  const series = [
    {
      data: seriesData
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: '20%'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: data,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={80} />
    </div>
  );
};

export default Chart1;
