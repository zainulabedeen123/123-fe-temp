import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const OperatorSelector = ({selectedOperator, setSelectedOperator}) => {

    return (
        <Select
            selectedKeys={[selectedOperator]}
            onSelectionChange={(key) => setSelectedOperator(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => selectedOperator}
            placeholder='Choose an Operator'
        >
            <SelectItem key="Equal">Equal</SelectItem>
            <SelectItem key="Not Equal">Not Equal</SelectItem>
            <SelectItem key="In">In</SelectItem>
            <SelectItem key="Not In">Not In</SelectItem>
            <SelectItem key="Less">Less</SelectItem>
            <SelectItem key="Less or Equal">Less or Equal</SelectItem>
            <SelectItem key="Greater">Greater</SelectItem>
            <SelectItem key="Greater or Equal">Greater or Equal</SelectItem>
            <SelectItem key="Contains">Contains</SelectItem>
            <SelectItem key="Not Contains">Not Contains</SelectItem>
        </Select>
    );
};

export default OperatorSelector;
