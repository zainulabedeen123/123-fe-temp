import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const CurrencySelector = ({selectedCurr, setSelectedCurr}) => {

    return (
        <Select
            selectedKeys={[selectedCurr]}
            onSelectionChange={(key) => setSelectedCurr(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Currency Selector"
            renderValue={() => selectedCurr}
            placeholder='EUR'
        >
            <SelectItem key="EUR">EUR</SelectItem>
            <SelectItem key="AMD">AMD</SelectItem>
            <SelectItem key="ANG">ANG</SelectItem>
            <SelectItem key="AOA">AOA</SelectItem>
            <SelectItem key="AQD">AQD</SelectItem>
            <SelectItem key="ARS">ARS</SelectItem>
            <SelectItem key="AUD">AUD</SelectItem>
            <SelectItem key="AWG">AWG</SelectItem>
            <SelectItem key="AZN">AZN</SelectItem>
        </Select>
    );
};

export default CurrencySelector;
