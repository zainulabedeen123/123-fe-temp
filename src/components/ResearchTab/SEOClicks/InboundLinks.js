import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const InboundLinks = () => {
    const [state6, setState6] = useState({
        options: {
            legend: {
                show: false,
                position: 'right',
                offsetX: 0,
                offsetY: 0,
                markers: {
                    width: 12,
                    height: 12,
                    radius: 0,
                },
                itemMargin: {
                    vertical: 3
                },
                labels: {
                    colors: '#a3a3a3'
                }
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
                width: 0,
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + '%';
                },
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['#fff']
                }
            },
            tooltip: {
                enabled: true
            },
            colors: ["#007EF2", "#00ACED", "#00FFFF", "#35D298", "#AC03FC", "#FB933C"],
            labels: ['Blogs', 'News', 'Has affiliate links', 'Forums', '.gov / .edu', 'Directories'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '40%',
                    }
                }
            }
        },
        series: [20, 15, 30, 10, 15, 10],
    });

    return (
        <div className="bg-[#2d363d] rounded-2xl relative col-span-12 md:col-span-4">
            <div className="p-3 border-0 border-b border-b-[#4E4E4E]">
                <PiDotsSixVerticalBold className='absolute right-2 top-2' />
                <p>
                    <span className='text-[14px] font-medium'>Inbound Links</span>
                    <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                        <IconButton>
                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                        </IconButton>
                    </Tooltip>
                </p>
            </div>
            <div className="p-3 my-4">
                <Chart options={state6.options} series={state6.series} type={'donut'} />
            </div>
        </div>
    );
};

export default InboundLinks;
