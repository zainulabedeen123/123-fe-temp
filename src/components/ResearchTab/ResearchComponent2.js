import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { HiCubeTransparent, HiOutlineInformationCircle } from 'react-icons/hi';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import Chart from 'react-apexcharts';

const ResearchComponent2 = ({ setDragging }) => {
    const [state, setState] = useState({
        optionsLine: {
            chart: {
                type: 'line',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                animations: {
                    enabled: false,
                },
                height: 300,
            },
            legend: {
                show: false
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            markers: {
                size: 4,
                colors: ['#2D363D'],
                fillOpacity: 1,
                strokeColors: ["#00fba0", "#fb0078"],
                strokeWidth: 1,
                strokeOpacity: 0.9,
                hover: {
                    size: undefined,
                    sizeOffset: 3
                  }
            },
            xaxis: {
                categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                tickAmount: 8,
                decimalsInFloat: 1,
                labels: {
                    style: {
                        colors: '#a3a3a3'
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                decimalsInFloat: 1,
                tickAmount: 3,
                labels: {
                    formatter: function (val) {
                        return val + " M";
                    },
                    style: {
                        colors: '#a3a3a3'
                    }
                },
            },
            grid: {
                borderColor: '#4c5359',
                xaxis: {
                    lines: {
                        show: false,
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
            },
            colors: ["#00fba0", "#fb0078"],
        },
        seriesLine: [
            {
                name: "ORGANIC",
                data: [4, 4, 4.5, 4.8, 5, 5, 4.5, 4.8, 5, 4.5, 4, 4, 4.2]
            },
            {
                name: "PAID",
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
        ],
        optionsDonut: {
            chart: {
                type: 'donut',
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false,
                formatter: function (val) {
                    return val + "%";
                },
            },
            plotOptions: {
                pie: {
                    startAngle: -50,
                    endAngle: 310,
                    donut: {
                        size: '70%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '10px',
                                fontWeight: 'bold',
                                color: '#fafafa',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '24px',
                                fontWeight: 'semibold',
                                color: '#ffffff',
                                offsetY: 10,
                            },
                            total: {
                                show: true,
                                label: 'Organic Traffic',
                                formatter: () => '95%',
                                color: '#a3a3a3',
                                fontSize: '12px',
                                fontWeight: 'medium',
                            }
                        }
                    }
                }
            },
            stroke: {
                show: false,
            },
            colors: ["#00fba0", "#fb0078"],
            labels: ["Organic", "Paid"],
            tooltip: {
                enabled: false,
            },
        },
        seriesDonut: [95, 5],
    });

    return (
        <>
            <div className="bg-[#2d363d] h-[390px] rounded-2xl relative pb-5">
                <div className="p-3 border-0 border-b border-b-[#4E4E4E] text-[14px] font-semibold">
                    <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />
                    <p className="flex items-center">
                        <span>Traffic from Google - Organic vs Paid</span>
                        <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                            </IconButton>
                        </Tooltip>
                    </p>
                </div>
                <div className="relative px-3 pt-20 mt-10 h-full">
                    <Chart options={state.optionsLine} series={state.seriesLine} type='line' height={170} />
                    <div className="absolute top-12 left-1/4 right-1/4 transform -translate-y-1/2 flex items-center justify-center z-10">
                        <Chart options={state.optionsDonut} series={state.seriesDonut} type='donut' height={200} />
                    </div>
                    <div className="absolute top-0 left-3 z-10 text-white">
                        <span className="flex items-center text-[12px]">
                            <span className="w-2 h-2 bg-[#00fba0] rounded-full mr-1"></span>
                            Organic
                        </span>
                    </div>
                    <div className="absolute top-0 right-3 z-10 text-white">
                        <span className="flex items-center text-[12px]">
                            <span className="w-2 h-2 bg-[#fb0078] rounded-full mr-1"></span>
                            Paid
                        </span>
                    </div>
                    <div className="text-center text-xs text-[#a3a3a3]">Complete Historical Data since: December 2012</div>
                </div>
            </div>
        </>
    );
}

export default ResearchComponent2;
