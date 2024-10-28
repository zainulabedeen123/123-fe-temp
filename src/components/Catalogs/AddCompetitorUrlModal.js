import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Input, Button } from "@nextui-org/react";
import { IoMdClose } from "react-icons/io";
import image from '../../images/image.png'

const AddCompetitorUrlModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-3xl"
            style={{ maxWidth: '600px'}}
        >
            <ModalContent>
                <div className="relative bg-[#2D363D] rounded-3xl p-3">
                    <div className="bg-transparent rounded-md  flex justify-end cursor-pointer" onClick={onClose}>
                        <IoMdClose size={20} />
                    </div>
                    <ModalBody className="space-y-4">

                        <h2 className="text-center text-xl font-semibold text-white">Add Competitor Url</h2>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#a3a3a3] text-sm">Please enter a page of your competitor's store which contains product information</label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    label=""
                                    classNames={{
                                        inputWrapper: [
                                            "flex-1",
                                            "rounded-md",
                                            "bg-[#3A4249]",
                                            "text-[#a3a3a3]",
                                            "border-none",
                                            "p-2",
                                            "group-data-[has-value=true]:text-[#a3a3a3]"
                                        ],
                                        input: ["placeholder:text-[#a3a3a3]", "text-[#a3a3a3]"],
                                    }}
                                    placeholder="Enter URL"
                                    variant="flat"
                                />
                                <Button className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1">
                                    Check Now
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4 h-[230px]">
                            <div className="col-span-2 bg-[#3A4249] rounded-2xl h-full flex items-center justify-center">
                                <div className="text-[#a3a3a3]">
                                    <img src={image} alt="Placeholder" className="h-10 w-10" />
                                </div>
                            </div>
                            <div className="col-span-2 gap-4 h-40 flex flex-col items-center">
                                <Input
                                    label="Title"
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
                                <div className='col-span-2 gap-4 flex '>
                                    <div className='col-span-1 gap-4 flex flex-col'>

                                        <Input
                                            label="Price"
                                            classNames={{
                                                inputWrapper: [
                                                    "flex-1",
                                                    "rounded-md",
                                                    "bg-[#3A4249]",
                                                    "text-[#a3a3a3]",
                                                    "border-none",
                                                    "p-2",
                                                ],
                                                input: "placeholder:text-[#a3a3a3]",
                                            }}
                                            labelPlacement="outside"
                                            placeholder=" "
                                            variant="flat"
                                        />
                                        <Input
                                            label="Code"
                                            classNames={{
                                                inputWrapper: [
                                                    "flex-1",
                                                    "rounded-md",
                                                    "bg-[#3A4249]",
                                                    "text-[#a3a3a3]",
                                                    "border-none",
                                                    "p-2",
                                                ],
                                                input: "placeholder:text-[#a3a3a3]",
                                            }}
                                            labelPlacement="outside"
                                            placeholder=" "
                                            variant="flat"
                                        />
                                    </div>
                                    <div className='col-span-1 gap-4 flex flex-col'>
                                        <Input
                                            label="Stock"
                                            classNames={{
                                                inputWrapper: [
                                                    "flex-1",
                                                    "rounded-md",
                                                    "bg-[#3A4249]",
                                                    "text-[#a3a3a3]",
                                                    "border-none",
                                                    "p-2",
                                                ],
                                                input: "placeholder:text-[#a3a3a3]",
                                            }}
                                            labelPlacement="outside"
                                            placeholder=" "
                                            variant="flat"
                                        />
                                        <Input
                                            label="Brand"
                                            classNames={{
                                                inputWrapper: [
                                                    "flex-1",
                                                    "rounded-md",
                                                    "bg-[#3A4249]",
                                                    "text-[#a3a3a3]",
                                                    "border-none",
                                                    "p-2",
                                                ],
                                                input: "placeholder:text-[#a3a3a3]",
                                            }}
                                            labelPlacement="outside"
                                            placeholder=" "
                                            variant="flat"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="pt-4 w-full flex justify-end space-x-4">
                        <Button
                            className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1"
                            onPress={onClose}
                        >
                            Match
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default AddCompetitorUrlModal;
