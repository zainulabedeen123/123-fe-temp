import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const EqualSelector = ({ selectedAction, setSelectedAction, selectedStock, equalSelectorClearer }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
        equalSelectorClearer();
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
            aria-label="Equal Selector"
            renderValue={() => selectedAction}
            placeholder='is Equal to'
        // disabledKeys={selectedStock !== 'Expired Date' ? ["is Empty"] : []}
        >
            <SelectItem key="is Equal to" >
                is Equal to
            </SelectItem>
            <SelectItem key="is Greater than" >
                is Greater than
            </SelectItem>
            <SelectItem key="is Less than" >
                is Less than
            </SelectItem>
            <SelectItem key="is Empty" >
                is Empty
            </SelectItem>
        </Select>
    );
};

export default EqualSelector;
