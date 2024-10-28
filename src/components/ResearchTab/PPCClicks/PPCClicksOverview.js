import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { PiDotsSixVerticalBold } from 'react-icons/pi';

const PPCClicksOverview = () => {
    return (
        <div className="mb-5 flex items-start justify-between">
            <div className="flex items-center gap-5 text-white flex-wrap">
                <div className=" px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Paid Keywords</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>2,875</p>
                </div>
                <div className="yellowBG px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Est Monthly PPC Clicks</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>170K</p>
                </div>
                <div className=" px-3 py-1 rounded-md border border-yellow-500">
                    <p className='flex items-center justify-between text-[12px]'>
                        <span>Est Monthly PPC Budget</span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-white' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <p className='text-[16px]'>$92.5k</p>
                </div>
            </div>
            <div className="flex space-x-5 items-center">
                <PiDotsSixVerticalBold />
            </div>
        </div>
    );
};

export default PPCClicksOverview;
