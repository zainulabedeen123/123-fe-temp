import React from 'react';
import Chart from 'react-apexcharts';

const Chart4 = ({ data }) => {
  const seriesData = data.map(value => ({
    x: value,
    y: value,
    fillColor: value <= 2 ? '#a3a3a3' : '#424A50'
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
        horizontal: false
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
      <Chart options={options} series={series} type="bar" height={80} width={70} />
    </div>
  );
};

export default Chart4;
