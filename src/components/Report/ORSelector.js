import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const ORSelector = () => {
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
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="OR Selector"
            renderValue={() => selected}
            placeholder='OR'
        >
            <SelectItem key="OR">OR</SelectItem>
            <SelectItem key="AND">AND</SelectItem>
        </Select>
    );
};

export default ORSelector;
