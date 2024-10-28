import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import Chart from 'react-apexcharts';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const KeywordsGainersLosers = ({ setDragging }) => {
    const [state5, setState5] = useState({
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
                type: "bar",
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
                categories: ['Improved Ranks: 485,801', 'Newly Ranked Keywords: 127,019', 'Lost Ranks: 1,178,150'], 
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
                tickAmount: 5, // Only 3 ticks visible
                decimalsInFloat: 1,
                labels: {
                    show: false, // Hide y-axis labels
                },
            },
            grid: {
                show: false,
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
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex];
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#a3a3a3"]
                }
            },
            tooltip: {
                enabled: true,
            },
            colors: ["#35D298", "#00ACED", "#fb0078"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                    barHeight: '40%', // Adjust the gap between bars
                }
            },
        },
        series: [
            {
                data: [400, 430, 448]
            }
        ],
    });

    return (
        <div className="bg-[#2d363d] rounded-2xl text-[14px] font-semibold relative col-span-12 md:col-span-8 pb-5">
            <div className="p-3 border-0 border-b border-b-[#4E4E4E]">
                <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />
                <p>
                    <span>Keywords Gainers and Losers</span>
                    <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                        <IconButton>
                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                        </IconButton>
                    </Tooltip>
                </p>
            </div>
            <div className="p-3 h-full">
                <Chart height={220} options={state5.options} series={state5.series} type={'bar'} />
            </div>
        </div>
    );
};

export default KeywordsGainersLosers;
