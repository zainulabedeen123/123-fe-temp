import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaArrowDown } from 'react-icons/fa6';
import { PiDotsSixVerticalBold } from 'react-icons/pi';


const SEOClicksOverview = () => {
    return (
        <div className="mb-5 flex items-start justify-between">
            <div className="flex items-center gap-5 text-white flex-wrap">
                <div className="yellowBG px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Organic Keywords</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>1,976,785</p>
                </div>
                <div className="px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Sum of Rank Change</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[12px]'>3mo:<FaArrowDown size={13} className='text-[#ef4444] inline-block' />5.3M 1 mo:<FaArrowDown size={13} className='text-[#ef4444] inline-block' />480k</p>
                </div>
                <div className="px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Est Monthly SEO Clicks</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>3.43M</p>
                </div>
                <div className="px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Est Monthly SEO Clicks Value</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>$800k</p>
                </div>
            </div>
            <div className="flex space-x-5 items-center">
                <PiDotsSixVerticalBold className='' />
            </div>
        </div>
    );
};

export default SEOClicksOverview;
