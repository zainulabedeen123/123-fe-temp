import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import { LiaAngleDownSolid } from 'react-icons/lia';

const DashBoardComponent2 = ({ setDragging }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const [state4, setState4] = useState({
        options: {
            legend: {
                show: false,
                position: 'right',
                floating: true,
                offsetX: '40px',
                offsetY: '50px',
                showForSingleSeries: true,
                showForNullSeries: true,
                showForZeroSeries: true,
            },
            chart: {
                type: 'line',
                toolbar: {
                    show: false,
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
                type: 'category',
                categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                tickAmount: 8,
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
                    }
                },
            },
            grid: {
                show: true,
                borderColor: '#4c5359',
                xaxis: {
                    lines: {
                        show: false,
                        colors: '' 
                    },
                },
                yaxis: {
                    lines: {
                        show: true, 
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
                shared: false,
                intersect: false,
                x: {
                    show: false,
                },
                y: {
                    formatter: function (value) {
                        return `Data: ${value}`;
                    }
                },
                marker: {
                    show: false,
                }
            },
            colors: ['#fb0078', '#00fba0', '#FFCA49'],
        },
        series: [
            {
                name: 'Series 1',
                data: [28.1, 29.3, 33.5, 36.2, 32.8, 32.4, 33.7, 34.1]
            },
            {
                name: 'Series 2',
                data: [12.5, 11.7, 14.2, 18.6, 17.8, 13.4, 13.9, 15.2]
            },
            {
                name: 'Series 3',
                data: [10.3, 18.1, 14.6, 16.7, 20.9, 22.3, 23.1, 24.6]
            }
        ],
    });

    return (
        <>
            <div className="bg-[#2d363d] rounded-2xl p-3 pb-5">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <div className='flex gap-5 items-center'>
                            <h1 className="flex text-sm">Price Position Over Time</h1>
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
                                <LiaAngleDownSolid className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#828385]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <PiDotsSixVerticalBold className='' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />
                    </div>
                </div>
                <Chart height={320} options={state4.options} series={state4.series} type={'line'} />
            </div>
        </>
    );
}

export default DashBoardComponent2;
