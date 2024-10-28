import React, { useState } from 'react';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import Chart from 'react-apexcharts';

import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import { LiaAngleDownSolid } from 'react-icons/lia';
import '../DatePicker.css'

const Component7 = ({ setDragging }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const [state4, setState4] = useState({
        options: {
            chart: {
                type: 'line',
                toolbar: {
                    show: false, // Hide toolbar
                },
                width: '100%',
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
                curve: 'smooth',
            },
            xaxis: {
                tickAmount: 8,
                labels: {
                    show: true,
                    style: {
                        colors: '#a3a3a3',
                    },
                },
                axisBorder: {
                    show: false,
                    color: '#78909C',
                },
                axisTicks: {
                    show: false,
                    borderType: 'solid',
                    color: '#78909C',
                },
            },
            yaxis: {
                tickAmount: 5, // Limit the number of ticks on y-axis
                labels: {
                    show: true,
                    style: {
                        colors: '#a3a3a3',
                    },
                },
            },
            grid: {
                show: true,
                borderColor: '#4c5359',
                xaxis: {
                    lines: {
                        show: false, // Hide x-axis grid lines
                    },
                },
                yaxis: {
                    lines: {
                        show: true, // Show y-axis grid lines
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
            },
            colors: ['#fb0078'],
        },
        series: [
            {
                data: [28000, 29000, 33000, 36000, 32000, 32000, 33000, 35000, 36000, 37000, 38000, 39000, 40000],
            },
        ],
    });

    return (
        <>
            <div className="col-span-12 relative">
                <div className="bg-[#2d363d] rounded-2xl p-3 pb-5">
                    <div className="flex justify-between items-center mb-3">
                        <span className="">Sales</span>
                        <PiDotsSixVerticalBold
                            className="text-[#a3a3a3] absolute right-2 top-2"
                            onMouseEnter={() => setDragging(true)}
                            onMouseLeave={() => setDragging(false)}
                        />
                    </div>
                    <div className="flex items-center justify-start gap-3 mb-3">
                        <p className="text-[#a3a3a3] text-[14px]">Price Position Over Time</p>
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
                    <Chart height={320} options={state4.options} series={state4.series} type={'line'} />
                </div>
            </div>
        </>
    );
};

export default Component7;
