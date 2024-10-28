import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaAmazon, FaGoogle, FaEbay, FaStore } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const AddCompetitor = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleAddMarketplaceClick = () => {
        navigate('/competitors/addnewmarketplace');
        onClose()
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-3xl"
            style={{ maxWidth: '650px' }}
        >
            <ModalContent>
                <div className="relative bg-[#2D363D] rounded-3xl p-6">
                <div className="bg-transparent rounded-md  flex justify-end cursor-pointer" onClick={onClose}>
                        <IoMdClose size={20} />
                    </div>
                    <h2 className="text-center text-xl font-semibold text-white mb-4">Add Competitor</h2>
                    <p className="text-center text-[14px] text-[#a3a3a3] mb-6">
                        Please choose the kind of competitor you want to add. Marketplace for competitors like Amazon, eBay and Google Shopping or eCommerce Website for any other online store.
                    </p>
                    <ModalBody className="grid grid-cols-2">
                        <div className="flex flex-col items-center justify-between bg-[#3A4249] rounded-lg p-6 h-[250px]">
                            <h3 className="text-[#a3a3a3] mb-4">Marketplace</h3>
                            <div className="flex flex-col justify-around w-full mb-4 text-[#a3a3a3]">
                                <div className='flex justify-around'>
                                    <FaAmazon size={32} />
                                    <FaGoogle size={32} />
                                </div>
                                <div className='flex justify-center'>

                                <FaEbay size={50} />
                                </div>
                            </div>
                            <p onClick={handleAddMarketplaceClick} className="text-center text-[12px] underline text-[#F9F9F9] cursor-pointer">Start monitoring a marketplace</p>
                        </div>
                        <div className="flex flex-col items-center justify-between bg-[#3A4249] rounded-lg p-6 h-[250px]">
                            <h3 className="text-[#a3a3a3] mb-4">E-commerce Website</h3>
                            <div className="flex justify-center w-full mb-4 text-[#a3a3a3]">
                                <FaStore size={50} />
                            </div>
                            <p className="text-center text-[12px] underline text-[#F9F9F9]">Start monitoring an ecommerce website</p>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter className="pt-4 w-full flex justify-center space-x-4">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter> */}
                </div>
            </ModalContent>
        </Modal>
    );
};

export default AddCompetitor;
