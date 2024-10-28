import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const ResearchComponent3 = ({ setDragging }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-[#2d363d] h-[390px] rounded-2xl relative ">

                <div className="p-3 border-0 border-b border-b-[#4E4E4E] text-[14px] font-semibold ">

                    <PiDotsSixVerticalBold className='absolute right-2 top-2' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />

                    <p>
                        <span>Paid Search (PPC)</span>
                        <Tooltip className='relative -top-2' title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={14} />
                            </IconButton>
                        </Tooltip>
                    </p>

                </div>

                <div className="p-3">

                    <p onClick={() => navigate('/dashboard/research/paidkeyword')} className='cursor-pointer text-[14px]'>Paid Keywords</p>

                    <p className='flex gap-2 items-end text-4xl lg:text-[2.5vw] text-white font-medium'>2,878 <FaArrowUp size={18} className='' /></p>

                    <div className="my-8">
                        <p onClick={() => navigate('/dashboard/research/ppcclicks')} className='cursor-pointer text-[14px]'>Est Monthly PPC Clicks</p>
                        <p className='text-xl lg:text-[1.25vw] font-medium'>170,427</p>
                    </div>

                    <div className="">
                        <p onClick={() => navigate('/dashboard/research/googleadsbudget')} className='cursor-pointer text-[14px]'>Est Monthly Google Ads Budget</p>
                        <p className='text-xl lg:text-[1.25vw] font-medium'>$92,460</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ResearchComponent3