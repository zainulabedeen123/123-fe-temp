import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/dashboard/research');
    };

    // Determine the current keyword type based on the route
    const keywordType = location.pathname.includes('paidkeyword') ? 'Paid Keyword' : 'Organic Keyword';

    return (
        <div className="flex items-center gap-2">
            <p className='hover:underline cursor-pointer' onClick={handleViewAllClick}>Research</p>
            <FaAngleRight size={14} />
            <p className='text-[#f3941d]'>{keywordType}</p>
        </div>
    );
}

export default Breadcrumbs;
