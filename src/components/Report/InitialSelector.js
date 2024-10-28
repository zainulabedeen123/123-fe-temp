import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const InitialSelector = () => {
    const [selectedInitial, setSelectedInitial] = useState("Select an option");

    const handleInitialChange = (key) => {
        setSelectedInitial(key);
    };

    return (
        <Select
            selectedKeys={[selectedInitial]}
            onSelectionChange={(key) => handleInitialChange(key)}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Initial Selector"
            renderValue={() => selectedInitial}
            placeholder='Initials'
        >
            <SelectItem key="Rules">Rules</SelectItem>
            <SelectItem key="Resellers">Resellers</SelectItem>
            <SelectItem key="MAP Status">MAP Status</SelectItem>
            <SelectItem key="Status">Status</SelectItem>
            <SelectItem key="Expiration date">Expiration date</SelectItem>
            <SelectItem key="Brand">Brand</SelectItem>
            <SelectItem key="Stock">Stock</SelectItem>
            <SelectItem key="Diff">Diff</SelectItem>
            <SelectItem key="Competitor">Competitor</SelectItem>
            <SelectItem key="Name">Name</SelectItem>
            <SelectItem key="Description">Description</SelectItem>
            <SelectItem key="Price">Price</SelectItem>
            <SelectItem key="Quantity">Quantity</SelectItem>
            <SelectItem key="Code">Code</SelectItem>
            <SelectItem key="SKU">SKU</SelectItem>
            <SelectItem key="Category">Category</SelectItem>
            <SelectItem key="Location">Location</SelectItem>
            <SelectItem key="Filter">Filter</SelectItem>
            <SelectItem key="Position">Position</SelectItem>
            <SelectItem key="Condition">Condition</SelectItem>
            <SelectItem key="Products matched">Products matched</SelectItem>
        </Select>
    );
};

export default InitialSelector;
