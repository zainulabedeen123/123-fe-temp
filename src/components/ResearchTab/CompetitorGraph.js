import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import { LiaAngleDownSolid } from 'react-icons/lia';

const CompetitorGraph = ({ competitors }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const series = competitors.map((competitor) => ({
        name: competitor.domain,
        data: competitor.data,
    }));

    const options = {
        chart: {
            type: 'line',
            height: '100%',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        markers: {
            size: 0,
            colors: '#2D363D',
            fillOpacity: 1,
            hover: {
                size: undefined,
                sizeOffset: 3
            }
        },
        xaxis: {
            categories: ['Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23'],
            tickAmount: 6,
            labels: {
                style: {
                    colors: '#a3a3a3'
                }
            },
        },
        yaxis: {
            decimalsInFloat: 1,
            tickAmount: 3,
            labels: {
                formatter: function (val) {
                    return val + ' k';
                },
                style: {
                    colors: '#a3a3a3'
                }
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        grid: {
            borderColor: '#444',
        },
        colors: competitors.map((competitor) => competitor.color),
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <div className="col-span-9 bg-[#2d363d] rounded-2xl">

            <div>
                <div className='flex gap-5 items-center'>
                    <h1 className="flex text-sm ml-2">Zoom</h1>
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
                <Chart options={options} series={series} type="line" height="350" />
            </div>
        </div>
    );
};

export default CompetitorGraph;
