import React, {useState} from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import SignupCannyModal from '../SignupCannyModal';


const Complete = ({ requests }) => {
    const navigate = useNavigate();

    const [isSignupModalOpen, setSignupModalOpen] = useState(false);

    const handleOpenSignupModal = () => setSignupModalOpen(true);
    const handleCloseSignupModal = () => setSignupModalOpen(false);


    const handleClick = (request) => {
        navigate('/suggestfeature/feedback/feedback', { state: { request } });
    };

    return (
        <>
            <div className="rounded-2xl h-[450px]">
                <div className="flex flex-col h-full border border-[#A3A3A3] rounded-2xl">
                    <li className="font-medium text-[14px] p-[10px] mb-2 border-b border-[#A3A3A3] w-full">Complete</li>
                    <div className="p-4 m-1 overflow-y-auto scrollbar">
                        {requests.map((request, index) => (
                            <div
                                className="mb-2 flex gap-5 items-stretch cursor-pointer"
                                key={index}
                            >
                                <div className="w-7 h-[41px] px-2 rounded border border-neutral-50 flex-col justify-center items-center inline-flex" onClick={handleOpenSignupModal}>
                                    <div className="flex flex-col justify-start items-center text-[#fafafa]">
                                        <MdKeyboardArrowUp className="" />
                                        {request.count}
                                    </div>
                                </div>
                                <div
                                    onClick={() => handleClick(request)}>
                                    <span className="block text-sm">{request.title}</span>
                                    <span className="text-gray-400 text-[12px]">{request.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SignupCannyModal isOpen={isSignupModalOpen} onClose={handleCloseSignupModal} />
        </>
    );
};

export default Complete;
