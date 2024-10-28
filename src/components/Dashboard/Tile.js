import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IoTrendingUpSharp, IoTrendingDownSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { PiDotsSixVerticalBold } from 'react-icons/pi';

const Tile = ({
    icon,
    title,
    score,
    percentage,
    iconBgColor,
    setDragging
}) => {
    const isPositive = parseFloat(percentage) > 0;
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/competitors/montioredurl');
    }

    return (
        <div className="bg-[#2d363d] rounded-2xl p-3 w-full max-w-[360px] grow relative pb-5">
            <PiDotsSixVerticalBold
                className="absolute right-0 m-2 text-[#a3a3a3] md:hidden"
                size={20}
            // onMouseEnter={() => setDragging(true)}
            // onMouseLeave={() => setDragging(false)}
            />
            <div className="flex items-center mt-2">
                <div className={`h-[60px] w-[60px] rounded-full flex items-center justify-center ${iconBgColor} mr-2`}>
                    {icon}
                </div>
                <div className="flex items-center flex-1">
                    <p className='text-[12px] text-[#bfbfbf] mr-2'>{title}</p>
                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                        <IconButton>
                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-5">
                <p className='text-3xl sm:text-[2vw] md:text-[2.5vw] text-white font-semibold'>{score}</p>
                <p className={`text-sm lg:text-[0.8vw] flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{percentage}</span>
                    {isPositive ? <IoTrendingUpSharp /> : <IoTrendingDownSharp />}
                </p>
                <p className='text-[12px] viewAllBg cursor-pointer' onClick={handleViewAllClick}>View all</p>
            </div>
        </div>
    );
}

export default Tile;
