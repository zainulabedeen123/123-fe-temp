import React, { useState } from 'react'
import { FaAngleRight, FaArrowDown } from 'react-icons/fa6'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import Chart from 'react-apexcharts'
import { IconButton, Tooltip } from '@mui/material'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const SEOClicksChange = () => {

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

    const [state5, setState5] = useState({
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
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
        },
        series: [
            {
                // name: "High - 2013",
                data: [400, 430, 448,]
            }
        ],
    })

    const [state6, setState6] = useState({
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
                type: "donut",
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
                enabled: true,
            },
            tooltip: {
                enabled: true,
            },
            colors: ["#00fba0", "#FFCA49"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
        },

        // name: "High - 2013",
        series: [44, 55, 13, 33],

    })

    return (
        <>
            <div className="flex items-center gap-2 px-2">
                <p>Overview</p>
                <FaAngleRight size={14} />
                <p className='text-[#f3941d]'>Est Monthly SEO Clicks Change</p>
            </div>

            <div className="bg-[#2d363d] rounded-lg p-3 pb-5 my-5">

                <div className="mb-5 flex items-start justify-between">

                    <div className="flex items-center gap-5 text-white">

                        <div className="yellowBG px-3 py-1 rounded-md border border-yellow-500">
                            <p className='flex items-center justify-between'>
                                <span>Organic Keywords</span>
                                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                    <IconButton>
                                        <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                    </IconButton>
                                </Tooltip>
                            </p>
                            <p>1,976,785</p>
                        </div>

                        <div className=" px-3 py-1 rounded-md border border-yellow-500">
                            <p className='flex items-center justify-between'>
                                <span>Sum of Rank Change</span>
                                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                    <IconButton>
                                        <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                    </IconButton>
                                </Tooltip>
                            </p>
                            <p>3mo:<FaArrowDown size={18} className='text-[#ef4444] inline-block' />5.3M1 mo:<FaArrowDown size={18} className='text-[#ef4444] inline-block' />480k
                            </p>
                        </div>

                        <div className=" px-3 py-1 rounded-md border border-yellow-500">
                            <p className='flex items-center justify-between'>
                                <span>Est Monthly SEO Clicks</span>
                                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                    <IconButton>
                                        <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                    </IconButton>
                                </Tooltip>
                            </p>
                            <p>3.43M</p>
                        </div>

                        <div className=" px-3 py-1 rounded-md border border-yellow-500">
                            <p className='flex items-center justify-between'>
                                <span>Est Monthly SEO Clicks Value</span>
                                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                    <IconButton>
                                        <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                                    </IconButton>
                                </Tooltip>
                            </p>
                            <p>$800k</p>
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

            <div className="flex items-center gap-2 ">

                <div className="bg-[#2d363d] rounded-lg relative pb-5 w-2/3">

                    <div className="p-3 border-0 border-b border-b-[#4E4E4E]">

                        <PiDotsSixVerticalBold className='absolute right-2 top-2' />

                        <p>
                            <span>Keywords Gainers and Losers</span>
                        </p>

                    </div>

                    <div className="p-3">

                        <div className="">
                            <Chart height={220} options={state5.options} series={state5.series} type={'bar'} />
                            {/* <Chart height={220} options={state5.options} series={state5.series} type={'donut'} /> */}
                        </div>

                    </div>

                </div>

                <div className="bg-[#2d363d] rounded-lg relative pb-5 w-1/3 ">

                    <div className="p-3 border-0 border-b border-b-[#4E4E4E]">

                        <PiDotsSixVerticalBold className='absolute right-2 top-2' />

                        <p>
                            <span>Inbound Links</span>
                            <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                <IconButton>
                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                                </IconButton>
                            </Tooltip>
                        </p>

                    </div>

                    <div className="p-3">

                        <div className="">
                            <Chart height={250} options={state6.options} series={state6.series} type={'donut'} />
                            {/* <Chart height={220} options={state5.options} series={state5.series} type={'donut'} /> */}
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default SEOClicksChange