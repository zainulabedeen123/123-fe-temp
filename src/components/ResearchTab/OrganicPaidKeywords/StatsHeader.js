import React from 'react';

const StatsHeader = ({ type }) => {
    return (
        <div className="flex gap-4 px-3 py-2 border-0 border-b text-[14px] font-medium border-[#4e4e4e]">
            <div>Total Keywords: {type === 'organic' ? '1,977,958' : '2,876'}</div>
            <div>Total Volume: {type === 'organic' ? '218M' : '1.51M'}</div>
            {type === 'organic' && <div>Total SEO Clicks: 3.44M</div>}
        </div>
    );
};

export default StatsHeader;
