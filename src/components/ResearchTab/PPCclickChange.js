import { IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleRight, FaArrowDown } from 'react-icons/fa6'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import Chart from 'react-apexcharts'

const PPCclickChange = () => {
    const [state4, setState4] = useState({
        options: {
            // title: {
            //   text: "dQ/dV Curve with Identified Trough and Peak",
            //   align: 'center',
            //   margin: 2,
            //   offsetX: 0,
            //   offsetY: 0,
            //   floating: true,
            //   style: {
            //     fontSize: '10px',
            //     fontWeight: '500',
            //     color: '#000'
            //   },
            // },

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
                    }
                },
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
                // name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            // {
            //     // name: "Low - 2013",
            //     data: [12, 11, 14, 18, 17, 13, 13]
            // },
            // {
            //     // name: "Low - 2013",
            //     data: [10, 18, 14, 56, 52, 20, 13]
            // }
        ],
    })

    return (
        <>
            <div className="px-2">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <p>Research</p>
                        <FaAngleRight size={14} />
                        <p className='text-[#f3941d]'>Est Monthly PPC Clicks</p>
                    </div>
                </div>

                <div className="bg-[#2d363d] rounded-lg p-3 pb-5 my-5">

                    <div className="mb-5 flex items-start justify-between">

                        <div className="flex items-center gap-5 text-white">

                            <div className="yellowBG px-3 py-1 rounded-md border border-yellow-500">
                                <p className='flex items-center justify-between'>
                                    <span className='text-sm'>Paid Keywords</span>
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>
                                <p>2,785</p>
                            </div>

                            <div className=" px-3 py-1 rounded-md border border-yellow-500">
                                <p className='flex items-center justify-between'>
                                    <span className='text-sm'>Est Monthly PPC Clicks</span>
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>
                                <p>170K</p>
                            </div>

                            <div className=" px-3 py-1 rounded-md border border-yellow-500">
                                <p className='flex items-center justify-between'>
                                    <span className='text-sm'>Est Monthly PPC Budget</span>
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>
                                <p>$92.5k</p>
                            </div>

                        </div>

                        <div className="flex space-x-5 items-center">
                            <PiDotsSixVerticalBold className='' />
                        </div>

                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                            <p>Zoom</p>
                            <p>6m</p>
                            <p className='px-2 text-pink-600 bg-[#423143] rounded-md'>1y</p>
                            <p>5y</p>
                            <p>All</p>
                        </div>

                    </div>

                    <Chart height={320} options={state4.options} series={state4.series} type={'line'} />

                </div>

            </div>
        </>
    )
}
export default PPCclickChange