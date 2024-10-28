import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaCloudUploadAlt, FaInfoCircle, FaDownload } from "react-icons/fa";

const MonitoredUrlsImport = ({ isOpen, onClose }) => {

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-3xl"
            style={{ maxWidth: '600px' }}
        >
            <ModalContent>
                <div className="relative bg-[#2D363D] rounded-3xl p-6">
                    <h2 className="text-center text-xl font-semibold text-white">Monitored URLs Import</h2>
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center text-[#a3a3a3]">
                            <span>Import From CSV</span>
                            <FaInfoCircle className="ml-1" />
                        </div>
                        <a href="/path/to/template.csv" download className="flex items-center text-[#a3a3a3]">
                            Download CSV Template <FaDownload className="ml-1" />
                        </a>
                    </div>
                    <ModalBody className="flex flex-col items-center justify-center mt-2 mb-2">
                        <div className="w-full h-64 bg-[#3A4249] flex flex-col items-center justify-center rounded-md text-[#a3a3a3] cursor-pointer">
                            <input
                                type="file"
                                accept=".csv"
                                className="opacity-0 absolute h-full w-full cursor-pointer"
                            />
                            <FaCloudUploadAlt size={48} />
                            <span className="mt-4">Click here to upload a new CSV (max. 20MB)</span>
                        </div>
                    </ModalBody>
                    <ModalFooter className="w-full flex justify-end space-x-4">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default MonitoredUrlsImport;
