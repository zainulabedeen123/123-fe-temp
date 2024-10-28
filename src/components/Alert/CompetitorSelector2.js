import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const CompetitorSelector2 = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[180px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Competitor Selector"
            renderValue={() => selectedAction}
            placeholder='Select a competitor'
        >
            <SelectItem key="Select a competitor" >
                Select a competitor
            </SelectItem>
            <SelectItem key="All competitors" >
                All competitors
            </SelectItem>
            <SelectItem key="kicks.com" >
                kicks.com
            </SelectItem>
            <SelectItem key="restocks.com" >
                restocks.com
            </SelectItem>
            <SelectItem key="stockx.com" >
                stockx.com
            </SelectItem>
        </Select>
    );
};

export default CompetitorSelector2;
