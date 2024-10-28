import { IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import Chart from 'react-apexcharts'
import { useNavigate } from 'react-router-dom'

const ResearchComponent5 = ({ setDragging }) => {

    const navigate = useNavigate();

    const [state6, setState6] = useState({
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
                categories: ['goat.com', 'kickscrew.com', 'flightclub.com', 'sneakernews.com', 'farfetch.com'],
                labels: {
                    show: false,
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
                tickAmount: 5, // Only 5 ticks visible
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
                textAnchor: 'start',
                formatter: function (val, opt) {
                    return `${opt.dataPointIndex + 1}. ${opt.w.globals.labels[opt.dataPointIndex]}`;
                },
                offsetY: -19,
                offsetX: -8,
                style: {
                    fontSize: '12px',
                    colors: ["#a3a3a3"]
                }
            },
            tooltip: {
                enabled: true,
            },
            colors: ["#00FBA0"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                    barHeight: '40%',
                    dataLabels: {
                        position: 'bottom'
                      }
                }
            },
        },
        series: [
            {
                data: [90, 80, 70, 60, 50]
            }
        ],
    });

    return (
        <>
            <div className="bg-[#2d363d] rounded-2xl text-[14px] font-semibold  relative pb-5">

                <div className="p-3 border-0 border-b border-b-[#4E4E4E]">

                    <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />

                    <p>
                        <span>Paid Competitors</span>
                        <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                            </IconButton>
                        </Tooltip>
                    </p>

                </div>

                <div className="border-0 border-b border-b-[#4E4E4E]">

                        <Chart height={270} options={state6.options} series={state6.series} type={'bar'} />

                </div>

                <p className='text-center mt-3 cursor-pointer' onClick={() => navigate('/dashboard/research/paidcompetitors')}>View all competitors</p>

            </div>
        </>
    )
}

export default ResearchComponent5