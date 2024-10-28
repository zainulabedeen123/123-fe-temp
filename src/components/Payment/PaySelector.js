import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const PaySelector = ({ selectedField, setSelectedField }) => {

    return (
        <Select
            selectedKeys={[selectedField]}
            onSelectionChange={(key) => setSelectedField(Array.from(key)[0])}
            className='text-[#fafafa]'
            classNames={{
                base: "w-[150px] text-white",
                trigger: "yellowBG text-[#fafafa] rounded-md min-h-[30px] h-[30px]",
                listbox: "bg-[#1E252B] text-[#a3a3a3]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[220px] custom-listbox",
                innerWrapper: "text-[#a3a3a3]",
                value: "font-semi text-[#fafafa] text-[12px]",
            }}
            aria-label="Pay Selector"
            renderValue={() => <span className="text-[#fafafa]">{selectedField}</span>}
            placeholder='Pay with iDeal'
        >
            <SelectItem key="Pay with iDeal">Pay with iDeal</SelectItem>
            <SelectItem key="Pay with Credit Card Visa">Pay with Credit Card Visa</SelectItem>
            <SelectItem key="Pay with Debit Card">Pay with Debit Card</SelectItem>
            <SelectItem key="Pay with Paypal">Pay with Paypal</SelectItem>
        </Select>
    );
};

export default PaySelector;
