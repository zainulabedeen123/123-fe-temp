import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const StockSelector = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    console.log(selectedAction);


    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[110px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Price Selector"
            renderValue={() => selectedAction}
            placeholder='In Stock'
        >
            <SelectItem key="In Stock" >
                In Stock
            </SelectItem>
            <SelectItem key="Out Of Stock">
                Out Of Stock
            </SelectItem>
            <SelectItem key="In Stock / Out Of Stock">
                In Stock / Out Of Stock
            </SelectItem>
        </Select>
    );
};
export default StockSelector