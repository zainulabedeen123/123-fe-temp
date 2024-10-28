import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const ProductSelector = ({ selectedAction, setSelectedAction }) => {
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
            placeholder='Inventory Products'
        >
            <SelectItem key="Inventory Products" >
                Inventory Products
            </SelectItem>
            <SelectItem key="Monitored Products" >
                Monitored Products
            </SelectItem>
            {/* <SelectItem key="disable" >
                disable
            </SelectItem> */}
            {/* <SelectItem key="Remove" >
                Remove
            </SelectItem>
            <SelectItem key="Calculate & enter expired date" >
                Calculate & enter expired date
            </SelectItem> */}
        </Select>
    );
}

export default ProductSelector