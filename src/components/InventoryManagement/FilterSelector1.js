import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector1 = () => {
    const [selectedOrderStatus, setSelectedOrderStatus] = useState("Select an option");

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
                        Order Status

                        <Select
                            selectedKeys={[selectedOrderStatus]}
                            onSelectionChange={(key) => setSelectedOrderStatus((key))}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Order Status"
                            renderValue={() => selectedOrderStatus}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="In Progress">In Progress</SelectItem>
                            <SelectItem key="Closed">Closed</SelectItem>
                            <SelectItem key="Draft">Draft</SelectItem>
                            <SelectItem key="On Hold">On Hold</SelectItem>
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

export default FilterSelector1;
