import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardFeature = () => {
    const navigate = useNavigate();
    const [showNumber, setShowNumber] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/suggestfeature') {
            setShowNumber(true);
        } else {
            setShowNumber(false);
        }
    }, []);

    return (
        <div>
            <h1 className="text-[16px] text-[#fafafa] font-medium mb-[15px] mt-2">Boards</h1>

            <div className="h-10 p-2.5 bg-[#343E46] rounded justify-start items-start gap-9 inline-flex mb-8 cursor-pointer" onClick={() => navigate('/suggestfeature/feedback')}>
                <div className="text-base font-normal leading-tight">Features Request</div>
                {showNumber && <div className="text-base font-normal leading-tight">60</div>}
            </div>
        </div>
    );
};

export default BoardFeature;
