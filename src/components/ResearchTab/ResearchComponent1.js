import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const ResearchComponent1 = ({ setDragging }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-[#2d363d] h-[390px] rounded-2xl relative">

                <div className="p-3  text-[14px] font-semibold border-0 border-b border-b-[#4E4E4E]">

                    <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />

                    <p>
                        <span className='text-[12px]'>Organic Keywords (SEO)</span>
                        <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                            </IconButton>
                        </Tooltip>
                    </p>

                </div>

                <div className="p-3">

                    <p onClick={() => navigate('/dashboard/research/organicKeyword')} className='cursor-pointer text-[14px]'>Organic Keywords</p>

                    <p className='flex gap-2 items-end text-4xl lg:text-[2.5vw] text-white font-medium'>1,984,639 <FaArrowDown size={18} className='text-[#ef4444]' /></p>

                    <div className="my-8">
                        <p onClick={() => navigate('/dashboard/research/seoclicks')} className='cursor-pointer text-[14px]'>Est Monthly SEO Clicks</p>
                        <p className='text-xl lg:text-[1.25vw] font-medium'>3,450,785</p>
                    </div>

                    <div className="">
                        <p onClick={() => navigate('/dashboard/research/seoclickschange')} className='cursor-pointer text-[14px]'>Est Monthly SEO Clicks Change</p>
                        <p className='text-xl lg:text-[1.25vw] font-medium'>-160,215</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ResearchComponent1