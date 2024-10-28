import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const ExpiredSelector = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[130px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Expired Selector"
            renderValue={() => selectedAction}
            placeholder='Expired date'
        >
            <SelectItem key="Purchased date" >
                Purchased date
            </SelectItem>
            <SelectItem key="Current date" >
                Current date
            </SelectItem>
            <SelectItem key="Expired date" >
                Expired date
            </SelectItem>
            <SelectItem key="No. of stock" >
                No. of stock
            </SelectItem>
            <SelectItem key="No. of solid items" >
                No. of solid items
            </SelectItem>
        </Select>
    );
};

export default ExpiredSelector;
