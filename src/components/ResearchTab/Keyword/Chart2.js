import React from 'react';
import Chart from 'react-apexcharts';

const Chart2 = ({ data }) => {
  const seriesData = data.map((value, index) => ({
    x: index + 1,
    y: value,
    fillColor: index < 20 ? '#00FBA0' : '#FB0078'
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
      },
      height: 100 
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: '20%', 
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: data.map((_, index) => index + 1),
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
      <Chart options={options} series={series} type="bar" height={70} />
    </div>
  );
};

export default Chart2;
