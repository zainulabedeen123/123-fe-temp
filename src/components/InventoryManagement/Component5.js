import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import Chart from 'react-apexcharts';

const Component5 = ({ setDragging }) => {
    const [state6, setState6] = useState({
        options: {
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'right',
                markers: {
                    radius: 12,
                },
                labels: {
                    colors: '#ffffff',
                },
            },
            chart: {
                type: 'donut',
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
                width: 0,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#ffffff']
                }
            },
            tooltip: {
                enabled: true,
            },
            colors: ['#00faa0', '#fb0078'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%',
                    },
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
        },
        series: [95, 5],
    });

    return (
        <>
            <div className="col-span-4 h-full">
                <div className="bg-[#2d363d] rounded-2xl relative pb-5 h-full">
                    <div className="p-3 border-0 border-b border-b-[#4E4E4E]">
                        <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />
                        <p className='pr-2 flex'>
                            <span className='text-[14px]'>Returns & Shipped Order</span>
                            <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                <IconButton>
                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                                </IconButton>
                            </Tooltip>
                        </p>
                    </div>
                    <div className="p-3">
                        <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: '#fb0078' }}></span>
                                <span className="text-[#a3a3a3] text-sm">Returns: 5%</span>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: '#00fba0' }}></span>
                                <span className="text-[#a3a3a3] text-sm">Shipped: 95%</span>
                            </div>
                        </div>
                        <Chart height={200} options={state6.options} series={state6.series} type='donut' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Component5;
