import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector = () => {
    const [selectedStatus, setSelectedStatus] = useState("Select an option");
    const [selectedMatched, setSelectedMatched] = useState("Select an option");
    const [selectedBrand, setSelectedBrand] = useState("Select an option");

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
                        Status

                        <Select
                            selectedKeys={[selectedStatus]}
                            onSelectionChange={(key) => setSelectedStatus((key))}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Status"
                            renderValue={() => selectedStatus}
                        >
                            <SelectItem key="All Status">All Status</SelectItem>
                            <SelectItem key="Only Enabled">Only Enabled</SelectItem>
                            <SelectItem key="Only Disabled">Only Disabled</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Matched

                        <Select
                            selectedKeys={[selectedMatched]}
                            onSelectionChange={(key) => setSelectedMatched(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Matched"
                            renderValue={() => selectedMatched}
                        >
                            <SelectItem key="Matched">Matched</SelectItem>
                            <SelectItem key="Unmatched">Unmatched</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Brand

                        <Select
                            selectedKeys={[selectedBrand]}
                            onSelectionChange={(key) => setSelectedBrand(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Brand"
                            renderValue={() => selectedBrand}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
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
