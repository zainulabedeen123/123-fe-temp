import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { FiFilter } from 'react-icons/fi';


const FilterSelector = ({selectedSavedFilterSet, setSelectedSavedFilterSet, selectedCompetitor, setSelectedCompetitor, selectedBrand, setSelectedBrand, selectedStock, setSelectedStock, selectedStatus, setSelectedStatus,selectedDiff, setSelectedDiff}) => {


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
                <DropdownSection title="Options">
                    <DropdownItem isReadOnly>
                        Saved Filter Set

                        <Select
                            selectedKeys={[selectedSavedFilterSet]}
                            onSelectionChange={(key) => setSelectedSavedFilterSet((key))}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Saved Filter Set"
                            renderValue={() => selectedSavedFilterSet}
                            placeholder='Saved Filter Set'
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Competitors Cheaper Than Me">Competitors Cheaper Than Me</SelectItem>
                            <SelectItem key="Competitors Products Out Of Stock">Competitors Products Out Of Stock</SelectItem>
                            <SelectItem key="Competitors URLs Not Reachable">Competitors URLs Not Reachable</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Competitor

                        <Select
                            selectedKeys={[selectedCompetitor]}
                            onSelectionChange={(key) => setSelectedCompetitor(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Competitor"
                            renderValue={() => selectedCompetitor}
                            placeholder='Competitor'
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="kicks.com">kicks.com</SelectItem>
                            <SelectItem key="restocks.com">restocks.com</SelectItem>
                            <SelectItem key="sstock.com">sstock.com</SelectItem>
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
                            placeholder="Brand"
                            renderValue={() => selectedBrand}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="Brand 1">Brand 1</SelectItem>
                            <SelectItem key="Brand 2">Brand 2</SelectItem>
                            <SelectItem key="Brand 3">Brand 3</SelectItem>
                        </Select>
                    </DropdownItem>

                    <DropdownItem isReadOnly>
                        Stock

                        <Select
                            selectedKeys={[selectedStock]}
                            onSelectionChange={(key) => setSelectedStock(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Saved Filter Set"
                            placeholder="Saved Filter Set"
                            renderValue={() => selectedStock}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="In Stock">In Stock</SelectItem>
                            <SelectItem key="Out Of Stock">Out Of Stock</SelectItem>
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
                            placeholder="Status"
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

                    <DropdownItem isReadOnly>
                        Diff

                        <Select
                            selectedKeys={[selectedDiff]}
                            onSelectionChange={(key) => setSelectedDiff(Array.from(key)[0])}
                            classNames={{
                                trigger: "w-full rounded-md bg-transparent border border-[#a3a3a3] text-white px-4 py-2 mt-2",
                                listbox: "bg-[#2D363D]",
                                popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[200px]",
                                innerWrapper: "text-[#ffffff]",
                                value: "font-semi text-white text-[14px]"
                            }}
                            aria-label="Diff"
                            placeholder="Diff"
                            renderValue={() => selectedDiff}
                        >
                            <SelectItem key="Select an option">Select an option</SelectItem>
                            <SelectItem key="You Win">You Win</SelectItem>
                            <SelectItem key="Same Price">Same Price</SelectItem>
                            <SelectItem key="You Lose">You Lose</SelectItem>
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
