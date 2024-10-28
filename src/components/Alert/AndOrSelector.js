import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const AndOrSelector = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[80px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="And Selector"
            renderValue={() => selectedAction}
            placeholder='And'
        >
            <SelectItem key="And" >
                And
            </SelectItem>
            <SelectItem key="Or" >
                Or
            </SelectItem>
            <SelectItem key="-" >
                -
            </SelectItem>
        </Select>
    );
};

export default AndOrSelector;
