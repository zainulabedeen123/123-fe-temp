import React, { useState } from 'react';
import { FaPaperclip, FaPlus } from "react-icons/fa6";
import './styles.css';
import CategorySelector from './CategorySelector';
import SignupCannyModal from '../SignupCannyModal';

const FeatureRequestForm = () => {
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false)

    const handleCancelClick = () => {
        setIsCanceled(true)
    }

    const handleOpenSignupModal = () => setSignupModalOpen(true);
    const handleCloseSignupModal = () => setSignupModalOpen(false);
    return (
        <>
            <div className="w-full mb-8 mx-auto p-8 bg-[#2D363D] text-[#fafafa] rounded-2xl">
                <div className='w-full xl:w-[700px] flex-shrink'>
                    <h2 className="text-[16px] font-medium mb-4">Feature Requests</h2>
                    {isCanceled ?
                        <div className='flex justify-between p-2 h-10 border border-[#a3a3a3] text-[#a3a3a3] text-[14px] items-center rounded cursor-pointer' onClick={() => setIsCanceled(false)}>
                            <p>Suggest a Feature...</p>
                            <div className='border border-[#FA0078] text-[#FA0078] rounded p-1'>
                                <FaPlus />
                            </div>
                        </div>
                        :
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm mb-2" htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="w-full h-10 text-sm px-4 bg-[#343E46] rounded-[9px]"
                                    placeholder="Short, descriptive title"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-2" htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    className="w-full h-10 text-sm px-4 bg-[#343E46] rounded-[9px]"
                                    placeholder="Any additional details..."
                                />
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-between'>
                                <div className="mb-4 w-full md:w-auto">
                                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                                    <CategorySelector />
                                </div>
                                <div className="flex  md:flex-row flex-wrap items-center gap-4 mt-4 md:mt-0">
                                    <button type="button" className="p-1 h-[30px] w-[30px] text-[#a3a3a3] border border-[#a3a3a3] rounded">
                                        <FaPaperclip className='w-full h-full' />
                                    </button>

                                    <button type="button" onClick={handleCancelClick} className="p-1 text-[12px] h-[30px] w-[100px] text-[#a3a3a3] border border-[#a3a3a3] rounded">
                                        Cancel
                                    </button>
                                    <button onClick={handleOpenSignupModal} type="button" className="p-1 text-[12px] h-[30px] w-[100px] text-white rounded yellowBG">
                                        Create Post
                                    </button>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
            <SignupCannyModal isOpen={isSignupModalOpen} onClose={handleCloseSignupModal} />
        </>
    );
};

export default FeatureRequestForm;
