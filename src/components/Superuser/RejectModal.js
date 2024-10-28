import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Select, Textarea, SelectItem, SelectSection } from "@nextui-org/react";

const RejectModal = ({ isOpen, onClose, user }) => {
    const firstName = user?.userName?.split(' ')[0] || '';
    const lastName = user?.userName?.split(' ')[1] || '';

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
                    <ModalBody className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="w-[125px] text-neutral-50 text-sm font-normal">Full Name</label>
                            <div className='flex gap-3 w-full'>
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
                                    placeholder="Louisa"
                                    defaultValue={firstName}
                                    variant="flat"
                                />
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
                                        ],
                                        input: "placeholder:text-[#a3a3a3]",
                                    }}
                                    placeholder="Rebecca"
                                    defaultValue={lastName}
                                    variant="flat"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="w-[125px] text-neutral-50 text-sm font-normal">Email</label>
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
                                    ],
                                    input: "placeholder:text-[#a3a3a3]",
                                }}
                                placeholder="Enter email"
                                defaultValue={user?.email || ''}
                                variant="flat"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="w-[125px] text-neutral-50 text-sm font-normal">Role</label>
                            <Select
                                classNames={{
                                    trigger: [
                                        "flex-1",
                                        "rounded-md",
                                        "bg-[#3A4249]",
                                        "text-[#a3a3a3]",
                                        "border-none",
                                        "p-2",
                                    ],
                                    listbox: "bg-[#3A4249]",
                                    popoverContent: "bg-[#3A4249] text-[#a3a3a3]",
                                }}
                                label=""
                                placeholder="Role"
                                defaultValue="Owner"
                                variant="flat"
                            >
                                <SelectItem key="Owner">Owner</SelectItem>
                                <SelectItem key="Owner">Admin</SelectItem>
                                <SelectItem key="Owner">Technical User</SelectItem>
                                <SelectItem key="Owner">User</SelectItem>
                            </Select>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="w-[125px] text-neutral-50 text-sm font-normal">Add App</label>
                            <Select
                                classNames={{
                                    trigger: [
                                        "flex-1",
                                        "rounded-md",
                                        "bg-[#3A4249]",
                                        "text-[#a3a3a3]",
                                        "border-none",
                                        "p-2",
                                    ],
                                    listbox: "bg-[#3A4249]",
                                    popoverContent: "bg-[#3A4249] text-[#a3a3a3]",
                                }}
                                label=""
                                placeholder="Add App"
                                defaultValue="add app"
                                variant="flat"
                            >
                                <SelectSection key="Generate Reports" classNames={{ title: "text-[#a3a3a3] text-sm pb-2" }}>
                                    <SelectItem key="all-users">
                                        <div className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark mt-3"></span>
                                            <span className="ml-5 text-[#a3a3a3] text-[12px]">Research Pro</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem key="selected-users">
                                        <div className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark mt-3"></span>
                                            <span className="ml-5 text-[#a3a3a3] text-[12px]">Inventory Management</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem key="selected-users">
                                        <div className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark mt-3"></span>
                                            <span className="ml-5 text-[#a3a3a3] text-[12px]">Research Ultimate</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem key="selected-users">
                                        <div className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark mt-3"></span>
                                            <span className="ml-5 text-[#a3a3a3] text-[12px]">Inventory Management Ultimate</span>
                                        </div>
                                    </SelectItem>
                                </SelectSection>
                            </Select>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="w-[125px] text-neutral-50 text-sm font-normal">Rejection Reason</label>
                            <Textarea
                                label=""
                                classNames={{
                                    inputWrapper: [
                                        "flex-1",
                                        "rounded-md",
                                        "bg-[#3A4249]",
                                        "text-[#a3a3a3]",
                                        "border-none",
                                        "p-2",
                                    ],
                                    textarea: "placeholder:text-[#a3a3a3]",
                                }}
                                placeholder="Enter rejection reason"
                            />
                        </div>
                    </ModalBody>

                    <ModalFooter className="pt-4 w-full ">
                        <div className=' flex w-[405px] space-x-4'>
                            <Button
                                className="text-neutral-400 bg-transparent border border-[#A3A3A3] rounded-md px-4 py-1 w-1/2"
                                variant="flat"
                                onPress={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1 w-1/2"
                                onPress={onClose}
                            >
                                Reject
                            </Button>
                        </div>
                    </ModalFooter>

                </div>
            </ModalContent>
        </Modal>
    );
};

export default RejectModal;
