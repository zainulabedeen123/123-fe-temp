import React, { useState } from 'react';
import UpgradeModal from '../UpgradeModal';
import AlertSelector from './AlertSelector';
import ProductSelector from './ProductSelector';
import OptionSelector from './OptionSelector';

const ResearchAlert = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedAlert, setselectedAlert] = useState('Give Alert')
    const [productSelector, setProductSelector] = useState('')
    const [optionSelector, setOptionSelector] = useState('')

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    return (
        <>

            <div className='bg-[#2D363D] p-6 rounded-2xl'>
                <p className="text-neutral-400 text-base font-medium leading-tight">Rule Name</p>
                <input
                    type="text"
                    className="bg-[#3a4249] px-3 py-1 mt-3 rounded-md w-full text-[14px] text-[#a3a3a3]"
                    placeholder="Please Enter a recognizable name for this rule"
                />

                <p className="mt-3 text-neutral-400 text-base font-medium leading-tight">Products</p>
                <input
                    type="text"
                    className="bg-[#3a4249] px-3 py-1 mt-3 rounded-md w-full  text-[14px] text-[#a3a3a3]"
                    placeholder="Please choose if this rule must be applied to the whole catalog or only to certain products"
                />

                <div className="flex items-center gap-3 mt-5 flex-wrap">
                    <label className="containerRadio text-[#a3a3a3]">
                        <input className='mt-20' type="radio" name="type" value="all" />
                        <span className="checkmarkRadio mt-1"></span>
                        to all products
                    </label>
                    <label className="containerRadio text-[#a3a3a3]">
                        <input type="radio" name="type" value="specific" defaultChecked />
                        <span className="checkmarkRadio mt-1"></span>
                        specific products
                    </label>
                    <input
                        type="text"
                        className="bg-[#3a4249] px-3 py-1 rounded-md  text-[14px] text-[#a3a3a3] w-56 accent-[#e2e2e2] outline-none"
                        placeholder="Insert link of your products"
                    />
                    <button className="border px-3 py-1 rounded-md border-amber-600 text-amber-600 bg-transparent  text-[14px]">Add More Link</button>
                </div>

                <div className="mt-5">
                    <p className="text-neutral-400 text-base font-medium leading-tight">Rules</p>
                    <p className="my-3 text-sm">Please select when the alert must be sent to you</p>

                    <div className="flex items-center gap-2 flex-wrap">
                        <p>If</p>
                        <input
                            type="text"
                            placeholder="Enter Keyword"
                            className="bg-transparent text-[14px] border border-[#a3a3a3] p-2 outline-none text-[#a3a3a3]"
                        />
                        <p>on</p>
                        <input
                            type="text"
                            placeholder="Enter Domain"
                            className="bg-transparent text-[14px] border border-[#a3a3a3] p-2 outline-none text-[#a3a3a3]"
                        />
                        <p>than</p>
                        <div className="flex items-center gap-2">
                            <AlertSelector selectedAction={selectedAlert} setSelectedAction={setselectedAlert} />
                            {/* {selectedAlert !== 'Give Alert' &&
                                <ProductSelector selectedAction={productSelector} setSelectedAction={setProductSelector} />
                            }
                            {productSelector.length !== 0 &&
                                <OptionSelector selectedAction={optionSelector} setSelectedAction={setOptionSelector} />
                            } */}
                        </div>
                    </div>

                    <div className="my-5 text-sm">
                        <p>Example: If the word Sneaker is mentioned on the domain give me an alert</p>
                    </div>

                    <div className="my-5">
                        <p className="text-[16px] font-medium text-neutral-400">Alert Type</p>
                        <p className="text-sm">Please select the frequency of this alert</p>
                    </div>

                    <div className="my-3">
                        <div className="flex items-center gap-5">
                            <p className="flex items-center">
                                <label onClick={handleModalOpen} className="inline-flex items-center me-5 cursor-pointer">
                                    <input type="checkbox" disabled value="" className="sr-only peer" />
                                    <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[1130%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                </label>
                                <span className='text-[14px]'>Instant</span>
                            </p>
                            <div onClick={handleModalOpen} className="flex items-center rounded-full text-[#00b62a] text-[12px] bg-[#28433b] w-fit px-3 py-1">
                                <span>Upgrade to unlock</span>
                            </div>
                        </div>
                        <p className="text-sm">The alert message is sent to you at the same time the rule is triggered</p>
                    </div>

                    <div className="my-3">
                        <div className="flex items-center gap-5">
                            <p className="flex items-center">
                                <label onClick={handleModalOpen} className="inline-flex items-center me-5 cursor-pointer">
                                    <input type="checkbox" disabled value="" className="sr-only peer" checked />
                                    <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[1130%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                </label>
                                <span className='text-[14px]'>Once per day</span>
                            </p>
                            <div onClick={handleModalOpen} className="flex items-center rounded-full text-[#00b62a] text-[12px] bg-[#28433b] w-fit px-3 py-1">
                                <span>Upgrade to unlock</span>
                            </div>
                        </div>
                        <p className="text-sm">Alerts are summarized and sent to you once per day</p>
                    </div>

                    <div className="my-5">
                        <p className="text-[16px] font-medium text-neutral-400">Communication Channels</p>
                        <p className="text-sm">Please select how you prefer to receive these alert communications</p>
                    </div>

                    <div className="my-3">
                        <div className="flex items-center gap-5">
                            <p className="flex items-center">
                                <label onClick={handleModalOpen} className="inline-flex items-center me-5 cursor-pointer">
                                    <input type="checkbox" disabled value="" className="sr-only peer" />
                                    <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[1130%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                </label>
                                <span className='text-[14px]'>Email</span>
                            </p>
                            <div onClick={handleModalOpen} className="flex items-center rounded-full text-[#00b62a] text-[12px] bg-[#28433b] w-fit px-3 py-1">
                                <span>Upgrade to unlock</span>
                            </div>
                        </div>
                        <p className="text-sm">john@gmail.com</p>
                    </div>

                    <div className="my-3">
                        <div className="flex items-center gap-5">
                            <p className="flex items-center">
                                <label className="inline-flex items-center me-5 cursor-pointer">
                                    <input type="checkbox" disabled value="" className="sr-only peer" />
                                    <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[1130%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                </label>
                                <span className='text-[14px]'>Slack</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <UpgradeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    );
};

export default ResearchAlert;
