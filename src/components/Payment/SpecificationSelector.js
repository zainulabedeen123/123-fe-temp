import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const SpecificationSelector = ({ selectedField, setSelectedField }) => {

    return (
        <Select
            selectedKeys={[selectedField]}
            onSelectionChange={(key) => setSelectedField(Array.from(key)[0])}
            classNames={{
                base: "w-[150px]",
                trigger: "bg-transparent text-[#a3a3a3] border border-[#a3a3a3] rounded-md min-h-[30px] h-[30px]",
                listbox: "bg-[#1E252B] text-[#a3a3a3]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[220px] custom-listbox",
                innerWrapper: "text-[#a3a3a3]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Specification Selector"
            placeholder='Invoice Amount'
        >
            <SelectItem key="Invoice Amount">Invoice Amount</SelectItem>
        </Select>
    );
};

export default SpecificationSelector;
