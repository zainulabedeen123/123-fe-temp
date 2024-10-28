import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const FieldSelector = ({selectedField, setSelectedField}) => {

    return (
        <Select
            selectedKeys={[selectedField]}
            onSelectionChange={(key) => setSelectedField(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Field Selector"
            renderValue={() => selectedField}
            placeholder='Choose a Field'
        >
            <SelectItem key="Price">Price</SelectItem>
            <SelectItem key="Cost">Cost</SelectItem>
            <SelectItem key="MAP">MAP</SelectItem>
            <SelectItem key="Brand">Brand</SelectItem>
            <SelectItem key="Min Price">Min Price</SelectItem>
            <SelectItem key="Max Price">Max Price</SelectItem>
            <SelectItem key="SKU">SKU</SelectItem>
            <SelectItem key="GTIN/EAN/ASIN">GTIN/EAN/ASIN</SelectItem>
            <SelectItem key="Name">Name</SelectItem>
            <SelectItem key="Brand">Brand</SelectItem>
        </Select>
    );
};

export default FieldSelector;
