import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector2 = () => {
    const [selectedName, setSelectedName] = useState("Select an option");
    const [selectedDescription, setSelectedDescription] = useState("Select an option");
    const [selectedCode, setSelectedCode] = useState("Select an option");
    const [selectedQuantity, setSelectedQuantity] = useState("Select an option");
    const [selectedPrice, setSelectedPrice] = useState("Select an option");

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
                        Description

                        <Select
                            selectedKeys={[selectedDescription]}
                            onSelectionChange={(key) => setSelectedDescription(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Description"
                            renderValue={() => selectedDescription}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Code

                        <Select
                            selectedKeys={[selectedCode]}
                            onSelectionChange={(key) => setSelectedCode(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Code"
                            renderValue={() => selectedCode}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Quantity

                        <Select
                            selectedKeys={[selectedQuantity]}
                            onSelectionChange={(key) => setSelectedQuantity(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Quantity"
                            renderValue={() => selectedQuantity}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Price

                        <Select
                            selectedKeys={[selectedPrice]}
                            onSelectionChange={(key) => setSelectedPrice(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Price"
                            renderValue={() => selectedPrice}
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

export default FilterSelector2;
