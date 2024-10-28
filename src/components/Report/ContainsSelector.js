import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const ContainsSelector = () => {
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
            aria-label="Is Selector"
            renderValue={() => selected}
            placeholder='Is'
        >
            <SelectItem key="Contains">Contains</SelectItem>
            <SelectItem key="is equal to">is equal to</SelectItem>
            <SelectItem key="is greater than">is greater than</SelectItem>
            <SelectItem key="is less than">is less than</SelectItem>
        </Select>
    );
};

export default ContainsSelector;
