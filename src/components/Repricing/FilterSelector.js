import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector = ({selectedRuleName, setSelectedRuleName, selectedReseller, setSelectedReseller, selectedMAP, setSelectedMAP, selectedStatus, setSelectedStatus }) => {

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    size="md"
                    radius="sm"
                    variant="flat"
                    endContent={<FiFilter />}
                    className="bg-transparent border border-[#a3a3a3] text-[#a3a3a3]"
                >
                    Filters
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Filter Options"
                variant="borderedflat"
                className="bg-[#1E252B] text-[#a3a3a3] max-h-[400px] overflow-scroll scrollbar rounded-lg w-64"
                classNames={{
                    base: "p-2",
                    list: "flex",
                }}
            >
                <DropdownSection title="">
                    <DropdownItem isReadOnly>
                        Rule Name

                        <Select
                            selectedKeys={[selectedRuleName]}
                            onSelectionChange={(key) => setSelectedRuleName((key))}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Rule Name"
                            placeholder='Select an Option'
                            renderValue={() => selectedRuleName}
                        >
                            <SelectItem sele key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Reprice 1 cent below my cheapest competitor">Reprice 1 cent below my cheapest competitor</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Reseller

                        <Select
                            selectedKeys={[selectedReseller]}
                            onSelectionChange={(key) => setSelectedReseller(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Reseller"
                            renderValue={() => selectedReseller}
                            placeholder='Select a Reseller'
                        >
                            <SelectItem key="Select a reseller">Select a reseller</SelectItem>
                            <SelectItem key="kicks.com">kicks.com</SelectItem>
                            <SelectItem key="restocks.com">restocks.com</SelectItem>
                            <SelectItem key="stockx.com">stockx.com</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        MAP Status

                        <Select
                            selectedKeys={[selectedMAP]}
                            onSelectionChange={(key) => setSelectedMAP(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="MAP Status"
                            placeholder='Select an Option'
                            renderValue={() => selectedMAP}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Respected">Respected</SelectItem>
                            <SelectItem key="Infringed">Infringed</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Status

                        <Select
                            selectedKeys={[selectedStatus]}
                            onSelectionChange={(key) => setSelectedStatus(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Status"
                            placeholder='Select an Option'
                            renderValue={() => selectedStatus}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Skipped">Skipped</SelectItem>
                            <SelectItem key="Repriced">Repriced</SelectItem>
                            <SelectItem key="Suggested">Suggested</SelectItem>
                            <SelectItem key="In Error">Repriced</SelectItem>
                        </Select>
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection title=""
                    classNames={{
                        base: "flex",
                        group: "flex gap-20"
                    }}
                >
                    <DropdownItem
                        key="delete"
                        className="text-amber-600"
                        classNames={{
                            base: "flex w-[70px] underline"
                        }}
                    >
                        Clear
                    </DropdownItem>
                    <DropdownItem
                        key="delete"
                        className=""
                        classNames={{
                            base: "flex w-[70px] text-center text-[12px] text-white yellowBG"
                        }}
                    >
                        Apply
                    </DropdownItem>
                </DropdownSection>

            </DropdownMenu>
        </Dropdown>
    );
};

export default FilterSelector;
