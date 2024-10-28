import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector1 = ({selectedDomain, setSelectedDomain, selectedStatus, setSelectedStatus}) => {


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
                <DropdownItem isReadOnly>
                    Competitor Domain

                    <Select
                        selectedKeys={[selectedDomain]}
                        onSelectionChange={(key) => setSelectedDomain((key))}
                        classNames={{
                            trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                            listbox: "bg-[#2D363D]",
                            popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                            innerWrapper: "text-[#ffffff]",
                            value: "font-semi text-white text-[14px]"
                        }}
                        aria-label="Competitor Domain"
                        placeholder='Competitor Domain'
                        renderValue={() => selectedDomain}
                    >
                        <SelectItem key="Select an option">Select an option</SelectItem>
                    </Select>
                </DropdownItem>

                <DropdownItem isReadOnly>
                    Competitor Status

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
                        aria-label="Competitor Status"
                        placeholder='Competitor Status'
                        renderValue={() => selectedStatus}
                    >
                        <SelectItem key="Select an option">Select an option</SelectItem>
                        <SelectItem key="Active">Active</SelectItem>
                        <SelectItem key="Disabled">Disabled</SelectItem>
                        <SelectItem key="Pending Approval">Pending Approval</SelectItem>
                        <SelectItem key="Hidden">Hidden</SelectItem>
                    </Select>
                </DropdownItem>





            </DropdownMenu>
        </Dropdown>
    );
};

export default FilterSelector1;
