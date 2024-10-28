import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { HiDocumentChartBar } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import UpgradeModal from '../UpgradeModal';
import {Switch} from "@nextui-org/react";
import { LuClock } from "react-icons/lu";


const MonitoredUrlsExport = ({ isOpen, onClose }) => {
    const [selectedFormat, setSelectedFormat] = useState("CSV");
    const [email, setEmail] = useState("john@hotmail.com");

    const [upgraded, setUpgraded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleFormatChange = (format) => {
        setSelectedFormat(format);
    };

    const handleInteraction = (interactionFn) => {
        if (!upgraded) {
            setIsModalOpen(true);
        } else {
            interactionFn();
        }
    };

    return (
        <>
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-3xl"
            style={{ maxWidth: '650px', maxHeight: '500px' }}
        >
            <ModalContent className='overflow-scroll scrollbar'>
                <div className="relative bg-[#2D363D] rounded-2xl p-6">
                    <ModalBody className=" mb-2">
                        <h2 className="text-[24px] font-semibold text-center text-white mb-4">Data Export Preferences</h2>
                        <div className="mb-4">
                            <h3 className="text-sm mb-2">Export Format</h3>
                            <div className="flex space-x-4">
                                {["CSV", "Excel", "XML", "JSON"].map((format) => (
                                    <label className="containerRadio" key={format}>
                                        {format}
                                        <input
                                            type="radio"
                                            name="exportFormat"
                                            value={format}
                                            checked={selectedFormat === format}
                                            onChange={handleFormatChange}
                                        />
                                        <span className="checkmarkRadio mt-1"></span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Filters</h3>
                            <p className="font-medium">0 active filters</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-medium text-sm mb-2">Send export file to</h3>
                            <p className="text-sm">You will receive the download link to these emails</p>
                            <div className="flex items-center mt-1">
                                <p className="text-sm mr-2">{email}</p>
                                <span onClick={() => handleInteraction(() => console.log('Email Unlock clicked'))} className="text-green-600 text-[12px] py-1 px-2 bg-green-600 bg-opacity-10 rounded-full">Upgrade to unlock</span>

                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between">
                            <h3 className="text-sm font-medium  mb-2">Public Download Link</h3>
                            <div className="flex gap-2 h-[20px] text-[12px] items-center">
                            <LuClock />
                            <p className="">Updated every 1 hour</p>
                            </div>

                            </div>
                            <div className="flex items-center space-x-2">
                            <Input
                                    label=""
                                    endContent={<IoCopyOutline />}
                                    classNames={{
                                        inputWrapper: [
                                            "flex-1",
                                            "rounded-md",
                                            "bg-[#3A4249]",
                                            "text-[#a3a3a3]",
                                            "border-none",
                                            "p-2",
                                            "w-full"
                                        ],
                                        input: "placeholder:text-[#a3a3a3]",
                                    }}
                                    labelPlacement="outside"
                                    placeholder=" "
                                    variant="flat"
                                />
                                <div className="flex items-center">
                                <Switch size="sm" aria-label="Manual" color="success" classNames={{wrapper: ["bg-[#E2E2E2] h-[18px] w-[35px]"], thumb: ["bg-[#2D363D] h-[12px] w-[12px]"]}}/>
                                    <span className="text-sm">Manual</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-[200px] bg-[#3A4249] text-[#a3a3a3] rounded-lg p-6 cursor-pointer">
                            <div className="flex flex-col items-center">
                                <HiDocumentChartBar size={30} />
                                <p className="text-center text-white mt-4">Create a programmatic report</p>
                                <p className="text-center text-[12px] mb-4">Use this setup to create a programmatic report</p>
                                <p className="text-center text-white text-[12px] mt-2 underline">Create new report</p>
                            </div>
                        </div>
                    </ModalBody>
                        <p className="px-6 text-[12px]" >Click "Export now" to generate the file</p>
                    <ModalFooter className="pt-4 w-full gap-5 mt-5 flex justify-center">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1"
                            onPress={onClose}
                        >
                            Export Now
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>

        <UpgradeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    );
};

export default MonitoredUrlsExport;
