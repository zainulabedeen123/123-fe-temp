import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import { LiaAngleDownSolid } from 'react-icons/lia';
import '../DatePicker.css';


const Specification = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const chartSeries = [
        {
            name: 'Subscription',
            data: [40, 20, 45, 25, 20, 30]
        },
        {
            name: 'Purchased Apps',
            data: [30, 10, 40, 35, 25, 35]
        }
    ];

    // Calculate mean value
    const allDataPoints = chartSeries.flatMap((series) => series.data);
    const meanValue = (allDataPoints.reduce((sum, value) => sum + value, 0) / allDataPoints.length).toFixed(2);

    const chartOptions = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            },
            foreColor: '#a3a3a3'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadiusApplication: 'end',
                borderRadius: 10
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 10,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return `€ ${val}`;
                }
            },
            tickAmount: 5
        },
        grid: {
            borderColor: '#3f3f3f',
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `€ ${val}`;
                }
            }
        },
        colors: ['#FB0078', '#00FBA0'],
        annotations: {
            yaxis: [
                {
                    y: parseFloat(meanValue),
                    borderColor: '#ffffff',
                    strokeDashArray: 4,
                }
            ]
        }
    };


    return (
        <div className="bg-[#2d363d] mt-3 rounded-lg">
            <div className="flex flex-col">
                <div className='flex gap-5 items-center'>
                    <h1 className="flex text-sm">Average consumption over the past 6 months</h1>
                    <div className="relative">
                        <LuCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828385]" />
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            className="bg-transparent text-start px-2 py-1 w-[230px] border border-[#4a5258] text-[12px] focus:outline-none outline-none rounded-md pl-10"
                            dateFormat="MMM d, yyyy"
                        />
                        <LiaAngleDownSolid className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#828385]" />
                    </div>
                </div>
                <span className="font-semibold text-[20px]">€ 35,51</span>

            </div>
            <Chart options={chartOptions} series={chartSeries} type="bar" height={250} />

            <div className="text-sm text-gray-400">

                <div className=" mb-[24px] flex flex-col justify-start gap-[10px]">
                    <div className="flex items-center">
                        <span className="block rounded-full w-4 h-4 bg-[#FB0078] mr-2"></span> Subscription
                    </div>
                    <div className="flex items-center">
                        <span className="block rounded-full w-4 h-4 bg-[#00FBA0] mr-2"></span> Purchased Apps
                    </div>
                </div>
                <p>We are allowed to retain and display detailed data for a maximum of 6 months.</p>
            </div>
        </div>
    );
};

export default Specification;
