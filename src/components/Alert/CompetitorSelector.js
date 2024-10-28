import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const CompetitorSelector = ({ selectedAction, setSelectedAction }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[120px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="Competitor Selector"
            renderValue={() => selectedAction}
            placeholder='Competitors'
        >
            <SelectItem key="Cheapest Competitors" >
                Cheapest Competitors
            </SelectItem>
            <SelectItem key="Highest Competitors" >
                Highest Competitors
            </SelectItem>
            <SelectItem key="Competitors" >
                Competitors
            </SelectItem>
        </Select>
    );
};

export default CompetitorSelector;
