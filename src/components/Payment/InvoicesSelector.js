import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const InvoicesSelector = ({ selectedField, setSelectedField }) => {

    return (
        <Select
            selectedKeys={[selectedField]}
            onSelectionChange={(key) => setSelectedField(Array.from(key)[0])}
            classNames={{
                base: "w-[200px]",
                trigger: "bg-transparent text-[#a3a3a3] border border-[#a3a3a3] rounded-md min-h-[30px] h-[30px]",
                listbox: "bg-[#1E252B] text-[#a3a3a3]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[220px] custom-listbox",
                innerWrapper: "text-[#a3a3a3]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Invoice Selector"
            placeholder='Show more invoices (19)'
        >
            <SelectItem key="Show more invoices (19)">Show more invoices (19)</SelectItem>
        </Select>
    );
};

export default InvoicesSelector;
