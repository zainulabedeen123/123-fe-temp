import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const AlertSelector = ({ selectedAction, setSelectedAction, selectedEqual, selectedStock }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Alert Selector"
            renderValue={() => selectedAction}
            placeholder='Give Alert'
            disabledKeys={(selectedStock === 'Expired Date' && selectedEqual === 'is Empty' ? [] : ["Calculate Expiration Date"])}
        >
            <SelectItem key="Give Alert" >
                Give Alert
            </SelectItem>
            <SelectItem key="Enable" >
                Enable
            </SelectItem>
            <SelectItem key="Disable" >
                Disable
            </SelectItem>
            <SelectItem key="Delete" >
                Delete
            </SelectItem>
            <SelectItem key="Calculate Expiration Date" >
                Calculate Expiration Date
            </SelectItem>
        </Select>
    );
};

export default AlertSelector;
