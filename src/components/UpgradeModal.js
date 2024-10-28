import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const UpgradeModal = ({ isOpen, onClose }) => {
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
                    <ModalBody className="space-y-4 mb-4">
                        <div className="flex justify-center">
                            <div className="bg-[#264737] rounded-full p-2">
                            <IoMdCheckmarkCircleOutline className='h-8 w-8 p-1 text-[#00B62A] bg-[#1d5a2f] rounded-full'/>
                            </div>
                        </div>
                        <h2 className="text-center text-xl font-semibold text-white">Upgrade to unlock this feature</h2>
                        <p className="text-center text-[#a3a3a3]">This feature is available for higher profiles, upgrade to unlock.</p>
                    </ModalBody>
                    <ModalFooter className="pt-4 w-full flex justify-center space-x-4">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1"
                            onPress={() => { /* handle See Plans action */ }}
                        >
                            See Plans
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default UpgradeModal;
