import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const SEOClicksChart = () => {
    const [state4, setState4] = useState({
        options: {
            legend: {
                show: false,
                position: "right",
                floating: true,
                offsetX: "40px",
                offsetY: "50px",
                showForSingleSeries: true,
                showForNullSeries: true,
                showForZeroSeries: true,
            },
            chart: {
                type: "line",
                toolbar: {
                    show: false, // Hide toolbar
                },
                width: "100%",
                height: '300',
                zoom: {
                    enabled: false,
                },
                animations: {
                    enabled: false,
                },
            },
            stroke: {
                width: 2,
                curve: "smooth",
            },
            xaxis: {
                tickAmount: 8,
                decimalsInFloat: 1,
                labels: {
                    show: true,
                    style: {
                        colors: '#a3a3a3'
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: '#78909C',
                    height: 6,
                    offsetX: 0,
                    offsetY: 0
                },
            },
            yaxis: {
                decimalsInFloat: 1,
                labels: {
                    show: true,
                    style: {
                        colors: '#a3a3a3'
                    },
                    formatter: function (value) {
                        return `${value} M`;
                    }
                },
                tickAmount: 3,
            },
            grid: {
                show: true,
                borderColor: '#4c5359',
                xaxis: {
                    lines: {
                        show: false,
                        colors: '' //or just here to disable only x axis grids
                    },
                },
                yaxis: {
                    lines: {
                        show: true, //or just here to disable only y axis
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
            },
            colors: ["#fb0078", "#00fba0", "#FFCA49"],
        },
        series: [
            {
                data: [2, 4, 3, 1, 2]
            }
        ],
    });

    return <Chart height={320} options={state4.options} series={state4.series} type={'line'} />;
};

export default SEOClicksChart;
