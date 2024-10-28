import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const CategorySelector = () => {
    const [selected, setSelected] = useState("Select an option");

    const handleChange = (key) => {
        setSelected(key);
    };

    return (
        <Select
            selectedKeys={[selected]}
            onSelectionChange={(key) => handleChange(key)}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-[#343E46] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Category Selector"
            renderValue={() => selected}
            placeholder='Category'
        >
            <SelectItem key="Alerts">Alerts</SelectItem>
            <SelectItem key="Filters">Filters</SelectItem>
            <SelectItem key="Scraping">Scraping</SelectItem>
            <SelectItem key="Onboarding">Onboarding</SelectItem>
            <SelectItem key="Import">Import</SelectItem>
            <SelectItem key="Charts">Charts</SelectItem>
            <SelectItem key="Export">Export</SelectItem>
            <SelectItem key="Uncategorized">Uncategorized</SelectItem>
        </Select>
    );
};

export default CategorySelector;
