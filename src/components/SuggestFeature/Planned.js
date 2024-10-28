import React from 'react';
import { ReactComponent as LightBulbIcon } from '../../images/iconoir_light-bulb.svg';

const Planned = () => (
    <div className="rounded-2xl h-[450px]">
        <div className="flex flex-col h-full items-center border border-[#A3A3A3] rounded-2xl">
            <li className="font-medium text-[14px] p-[10px] mb-2 border-b border-[#A3A3A3] w-full">Planned</li>
            <div className='flex flex-col gap-5 items-center h-full justify-center p-8'>
                <span className="text-green-500 bg-[#00FBA033] bg-opacity-35 p-2 rounded-full mb-2">
                    <LightBulbIcon className="w-[24px] h-[24px]" />
                </span>
                <p className="text-center">Share your feedback and check back here for updates.</p>
            </div>
        </div>
    </div>
);

export default Planned;
