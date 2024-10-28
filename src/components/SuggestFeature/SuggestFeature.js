import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LoginCannyModal from '../LoginCannyModal';
import SignupCannyModal from '../SignupCannyModal';

const SuggestFeature = () => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname.split('/')[2];
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);

    const handleOpenLoginModal = () => setLoginModalOpen(true);
    const handleCloseLoginModal = () => setLoginModalOpen(false);

    const handleOpenSignupModal = () => setSignupModalOpen(true);
    const handleCloseSignupModal = () => setSignupModalOpen(false);

    return (
        <>
            <div className="flex items-start justify-between sticky">
                <div className=" flex items-center space-x-5 px-2 mb-8 ">
                    <p onClick={() => navigate('/suggestfeature')} className={`${window.location.pathname === '/suggestfeature' && 'text-white'} cursor-pointer`}>Roadmap</p>
                    <p onClick={() => navigate('/suggestfeature/feedback')} className={`${pathname === 'feedback' && 'text-white'} cursor-pointer`}>Feedback</p>
                </div>
                <div className=" flex items-center space-x-5 px-2 mb-8 ">
                    <button onClick={handleOpenLoginModal} className='py-2 px-4 border rounded-md text-[12px] text-[#a2a2a2]'>Login</button>
                    <button onClick={handleOpenSignupModal} className='yellowBG py-2 px-4 rounded-md text-[12px] text-[#ffffff]'>Signup</button>
                </div>
            </div>

            <Outlet />

            <LoginCannyModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
            <SignupCannyModal isOpen={isSignupModalOpen} onClose={handleCloseSignupModal} />
        </>
    );
}

export default SuggestFeature;
