import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IoTrendingUpSharp, IoTrendingDownSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Tile = ({
    icon,
    title,
    score,
    percentage,
    iconBgColor,
    link
}) => {
    const isPositive = parseFloat(percentage) > 0;
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate(link, { state: { tablename: title } } );
    }

    return (
        <div className="bg-[#2d363d] rounded-2xl p-3 w-full relative pb-5">
            <div className="flex items-center mt-2 flex-wrap gap-2">
                <div className={`h-[60px] w-[60px] rounded-full flex items-center justify-center ${iconBgColor} mr-1`}>
                    {icon}
                </div>
                <div className="flex items-center w-[126px]">
                    <p className='text-[12px] text-[#bfbfbf] whitespace-nowrap'>{title}</p>
                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                        <IconButton>
                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="flex items-center justify-start gap-2">
                <p className='text-4xl lg:text-[2.5vw] text-white font-semibold'>{score}</p>
                <p className={`text-sm lg:text-[0.8vw] flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{percentage}</span>
                    {isPositive ? <IoTrendingUpSharp /> : <IoTrendingDownSharp />}
                </p>
            </div>
            <div className='w-full h-[22px] flex justify-end'>
                {link ? <p className='text-[12px] viewAllBg cursor-pointer' onClick={handleViewAllClick}>View all</p>
                    : <p></p>}
            </div>
        </div>
    );
}

export default Tile;
