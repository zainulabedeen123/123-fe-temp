import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const MarketPlaceSelector = ({selectedMP, setSelectedMP}) => {

    return (
        <Select
            selectedKeys={[selectedMP]}
            onSelectionChange={(key) => setSelectedMP(Array.from(key)[0])}
            classNames={{
                base: "mt-2 text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] ]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Marketplace Selector"
            renderValue={() => selectedMP}
            placeholder='Select a marketplace'
        >
            <SelectItem key="Amazon">Amazon</SelectItem>
            <SelectItem key="Google Shopping">Spanish</SelectItem>
            <SelectItem key="eBay">eBay</SelectItem>
        </Select>
    );
};

export default MarketPlaceSelector;
