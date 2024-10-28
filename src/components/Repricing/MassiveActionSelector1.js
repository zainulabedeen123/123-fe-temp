import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { FaCheck, FaTimes } from 'react-icons/fa';

const MassiveActionSelector1 = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Massive Action Selector"
            renderValue={() => selectedAction}
            placeholder='Massive Action'
        >
            <SelectItem key="Enable" >
                Enable
            </SelectItem>
            <SelectItem key="Disable" >
                Disable
            </SelectItem>
            <SelectItem key="Delete" >
                Delete
            </SelectItem>
        </Select>
    );
};

export default MassiveActionSelector1;
