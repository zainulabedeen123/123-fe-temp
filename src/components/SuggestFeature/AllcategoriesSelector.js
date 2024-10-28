import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const AllCategoriesSelector = ({ selectedField, setSelectedField }) => {

    return (
        <Select
            selectedKeys={[selectedField]}
            onSelectionChange={(key) => setSelectedField(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "bg-transparent text-[#fafafa]",
                listbox: "bg-[#1E252B] text-[#a3a3a3]",
                helperWrapper: "text-white",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[220px] custom-listbox",
                innerWrapper: "text-[#a3a3a3]",
                value: "font-semi text-[#fafafa] text-[14px]",
            }}
            aria-label="Categories Selector"
            renderValue={() => selectedField}
            placeholder='All categories'
        >
            <SelectItem key="All categories">All categories</SelectItem>
            <SelectItem key="Alerts">Alerts</SelectItem>
            <SelectItem key="Filters">Filters</SelectItem>
            <SelectItem key="Scraping">Scraping</SelectItem>
            <SelectItem key="Onboarding">Onboarding</SelectItem>
            <SelectItem key="Import">Import</SelectItem>
            <SelectItem key="Charts">Charts</SelectItem>
            <SelectItem key="Export">Export</SelectItem>
        </Select>
    );
};

export default AllCategoriesSelector;
