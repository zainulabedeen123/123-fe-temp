import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector = () => {
    const [selectedName, setSelectedName] = useState("Select an option");
    const [selectedType, setSelectedType] = useState("Select an option");
    const [selectedFrequency, setSelectedFrequency] = useState("Select an option");
    const [selectedLastRun, setSelectedLastRun] = useState("Select an option");
    const [selectedStatus, setSelectedStatus] = useState("Select an option");

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
                        Name

                        <Select
                            selectedKeys={[selectedName]}
                            onSelectionChange={(key) => setSelectedName((key))}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Name"
                            renderValue={() => selectedName}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Type

                        <Select
                            selectedKeys={[selectedType]}
                            onSelectionChange={(key) => setSelectedType(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Type"
                            renderValue={() => selectedType}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Frequency

                        <Select
                            selectedKeys={[selectedFrequency]}
                            onSelectionChange={(key) => setSelectedFrequency(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Frequency"
                            renderValue={() => selectedFrequency}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Last Run

                        <Select
                            selectedKeys={[selectedLastRun]}
                            onSelectionChange={(key) => setSelectedLastRun(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Last Run"
                            renderValue={() => selectedLastRun}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
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
                            renderValue={() => selectedStatus}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Enabled">Enabled</SelectItem>
                            <SelectItem key="Disabled">Disabled</SelectItem>
                            <SelectItem key="In Progress">In Progress</SelectItem>
                            <SelectItem key="Scraping Failed">Scraping Failed</SelectItem>
                            <SelectItem key="Not Found">Not Found</SelectItem>
                            <SelectItem key="Missing Price">Missing Price</SelectItem>
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
