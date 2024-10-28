import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import SEOClicksChart from './SEOClicks/SEOClicksChart';
import PPCClicksChart from './PPCClicks/PPCClicksChart';
import SEOClicksOverview from './SEOClicks/SEOClicksOverview';
import PPCClicksOverview from './PPCClicks/PPCClicksOverview';
import KeywordsGainersLosers from './SEOClicks/KeywordsGainersLosers';
import InboundLinks from './SEOClicks/InboundLinks';
import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';
import 'react-datepicker/dist/react-datepicker.css';
import { LiaAngleDownSolid } from 'react-icons/lia';
import '../DatePicker.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Change = () => {
    // Note: Separate Files for Change will be required ie Chart and Overview for both SEO and PPC (googleadsbudget)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const location = useLocation();
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/dashboard/research');
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const isSEO = location.pathname.includes('seoclickschange');
    const isPPC = location.pathname.includes('googleadsbudget');

    return (
        <>
            <div className="flex items-center gap-2 px-2">
                <p className='hover:underline cursor-pointer' onClick={handleViewAllClick}>Overview</p>
                <FaAngleRight size={14} />
                <p className='text-[#f3941d]'>{isSEO ? 'Est Monthly SEO Clicks Change' : 'Est Monthly Google Ads Budget'}</p>
            </div>

            <div className="bg-[#2d363d] rounded-lg p-3 pb-5 my-5">
                {isSEO ? <SEOClicksOverview /> : <PPCClicksOverview />}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                        <p className='px-2'>Zoom</p>
                        <div className="relative">
                            <LuCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828385]" />
                            <DatePicker
                                selected={startDate}
                                onChange={handleDateChange}
                                startDate={startDate}
                                endDate={endDate}
                                selectsRange
                                className="bg-transparent text-start px-2 py-1 w-[230px] border border-[#4a5258] text-[12px] focus:outline-none outline-none rounded-md pl-10"
                                dateFormat="MMM d, yyyy"
                            />
                            <LiaAngleDownSolid className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#828385]" />
                        </div>
                    </div>
                </div>
                {isSEO ? <SEOClicksChart /> : <PPCClicksChart />}
            </div>

            {isSEO && (
                <div className="flex items-center gap-2">
                    <KeywordsGainersLosers />
                    <InboundLinks />
                </div>
            )}
        </>
    );
};

export default Change;
