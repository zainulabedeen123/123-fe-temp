import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpgradeModal from '../UpgradeModal';
import SelectDay from './SelectDay';
import InitialSelector from './InitialSelector';
import ContainsSelector from './ContainsSelector';
import ORSelector from './ORSelector';

const AddNewReport = () => {
    const navigate = useNavigate();
    const [upgraded, setUpgraded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelectDayOpen, setIsSelectDayOpen] = useState(false);

    const handleBackClick = () => {
        navigate('/report');
    };

    const handleSelectDay = () => {
        setIsSelectDayOpen(true)
    }

    const handleInteraction = (interactionFn) => {
        if (!upgraded) {
            setIsModalOpen(true);
        } else {
            interactionFn();
        }
    };

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col text-[#fafafa] text-[14px]">
                    <span className='font-medium'>New Report</span>
                    <span className='text-[#a3a3a3]'>Create or edit a programmatic report</span>
                </div>
                <div className="flex items-center text-[#a3a3a3] gap-3">
                    <button className="flex items-center border border-[#a3a3a3] rounded-md gap-2 px-4 py-1 text-[14px]" onClick={handleBackClick}>
                        <span>Back</span>
                    </button>
                    <button className="flex items-center border border-[#a3a3a3] rounded-md gap-2 px-4 py-1 text-[14px]">
                        <span>Generate</span>
                    </button>
                    <button className="flex items-center border border-[#a3a3a3] rounded-md gap-2 px-4 py-1 text-[14px]">
                        <span>Save</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-3 rounded-2xl p-4 h-full overflow-y-scroll scrollbar bg-[#2D363D]'>
                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium'>Name</h3>
                    <p className='text-[12px] my-2'>Please enter a recognizable name for this report</p>
                    <input className='text-[12px] w-full p-2 rounded bg-[#3a4249] border border-[#505A61] outline-none'></input>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium'>Filters Set</h3>
                    <p className='text-[12px] my-2'>Choose a filters set</p>
                    <div className="flex text-[12px] items-center gap-4">
                        <InitialSelector/>
                        <ContainsSelector/>
                        <ORSelector/>
                    </div>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium mb-3'>Columns</h3>
                    <div className="grid grid-cols-3 gap-3 text-[12px]">
                        {[
                            "Category/Type",
                            "Location",
                            "Purchase date",
                            "Expired date",
                            "Seller/Business name",
                            "Condition/Quality",
                            "Rating, review, feedback",
                            "Tags",
                            "Payment methods",
                            "Attributes",
                            "Publisher",
                            "Author",
                            "Material",
                            "Weight",
                            "Dimensions",
                            "Competitor Inventory Level"
                        ].map((label, index) => (
                            <label key={index} className="container flex items-center gap-2">
                                <input type="checkbox" className="hidden" onChange={() => handleInteraction(() => console.log(`Selected column: ${label}`))} />
                                <span className="checkmark mt-2"></span>
                                <span className="text-[12px] ml-5">{label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium mb-2'>Format</h3>
                    <div className="flex items-center gap-4">
                        {["CSV", "XML", "JSON", "Excel"].map((format, index) => (
                            <label key={index} className="containerRadio flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="format"
                                    className="hidden"
                                    onChange={() => handleInteraction(() => console.log(`Selected format: ${format}`))}
                                />
                                <span className="checkmarkRadio mt-1"></span>
                                <span className="text-[12px]">{format}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium mb-2'>Frequency</h3>
                    <div className="flex flex-col gap-4">
                        <label className="containerRadio flex items-center gap-2" onClick={handleSelectDay}>
                            <input type="radio" name="frequency" className="hidden" onChange={() => console.log('Selected frequency: WEEKLY')} />
                            <span className="checkmarkRadio mt-1"></span>
                            <span className="text-[12px]">WEEKLY ( Sunday 10:00 PM UTC )</span>
                        </label>
                        <label className="containerRadio flex items-center gap-2">
                            <input
                                type="radio"
                                name="frequency"
                                className="hidden"
                                onChange={() => handleInteraction(() => console.log('Selected frequency: DAILY'))}
                            />
                            <span className="checkmarkRadio"></span>
                            <span className="text-[12px]">DAILY ( 07:00 AM UTC ) <span className="text-green-600 text-[12px] py-1 px-2 bg-green-600 bg-opacity-10 rounded-full">Upgrade to unlock</span></span>
                        </label>
                        <label className="containerRadio flex items-center gap-2">
                            <input
                                type="radio"
                                name="frequency"
                                className="hidden"
                                onChange={() => handleInteraction(() => console.log('Selected frequency: HOURLY'))}
                            />
                            <span className="checkmarkRadio mt-1"></span>
                            <span className="text-[12px]">HOURLY ( Every 00 ) <span className="text-green-600 text-[12px] py-1 px-2 bg-green-600 bg-opacity-10 rounded-full">Upgrade to unlock</span></span>
                        </label>
                    </div>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium mb-2'>Communication Channels</h3>
                    <div className="flex flex-col gap-4">
                        <label className="container flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="hidden"
                                onChange={() => handleInteraction(() => console.log('Selected communication channel: Email'))}
                            />
                            <span className="checkmark mt-4"></span>
                            <span className="text-[12px] ml-5">Email john@gmail.com <span className="text-green-600 text-[12px] py-1 px-2 bg-green-600 bg-opacity-10 rounded-full">Upgrade to unlock</span></span>
                        </label>
                        <label className="container flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="hidden"
                                onChange={() => handleInteraction(() => console.log('Selected communication channel: Slack'))}
                            />
                            <span className="checkmark mt-4" ></span>
                            <span className="text-[12px] ml-5">Slack</span>
                        </label>
                    </div>
                </div>

                <div className='w-full mb-3' >
                    <h3 className='text-[16px] font-medium'>Public Download Link <span className="text-green-600 text-[12px] py-1 px-2 bg-green-600 bg-opacity-10 rounded-full">Upgrade to unlock</span></h3>
                    <p className='text-[12px] my-2'>Post your report data file on a public URL</p>
                    <label className="container flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            className="hidden"
                            onChange={() => handleInteraction(() => console.log('Public download link active'))}
                        />
                        <span className="checkmark mt-4"></span>
                        <span className="text-[12px] ml-5">Active </span>
                    </label>
                    <input className='text-[12px] w-full p-2 bg-[#3a4249] border border-[#a3a3a3] outline-none'></input>
                </div>

            </div>
                        <SelectDay isOpen={isSelectDayOpen} onClose={() => setIsSelectDayOpen(false)}/>
            <UpgradeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    );
};

export default AddNewReport;
