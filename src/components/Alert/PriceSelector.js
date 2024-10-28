import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const PriceSelector = ({ selectedAction, setSelectedAction, selectedCompetitors }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[90px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Price Selector"
            renderValue={() => selectedAction}
            placeholder='Price'
            disabledKeys={selectedCompetitors !== 'Competitors' && ["Stock"]}
        >
            <SelectItem key="Price" >
                Price
            </SelectItem>
            <SelectItem key="Stock">
                Stock
            </SelectItem>
        </Select>
    );
};

export default PriceSelector;
