import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const MyStockSelector = ({ selectedAction, setSelectedAction, myStockSelectorClearer }) => {
    const handleActionChange = (key) => {
        setSelectedAction(key);
        myStockSelectorClearer();
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[110px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="My Stock Selector"
            renderValue={() => selectedAction}
            placeholder='My Stock'
        >
            <SelectItem key="My Stock" >
                My Stock
            </SelectItem>
            <SelectItem key="Expired Date" >
                Expired Date
            </SelectItem>
            <SelectItem key="Purchased Date" >
                Purchased Date
            </SelectItem>
            <SelectItem key="Current Date" >
                Current Date
            </SelectItem>
            <SelectItem key="No. of Stock" >
                No. of Stock
            </SelectItem>
            <SelectItem key="No. of Sold Items" >
                No. of Sold Items
            </SelectItem>
            {/* <SelectItem key="-" >
                -
            </SelectItem> */}
        </Select>
    );
};

export const MyStockSelector2 = ({ selectedAction, setSelectedAction, selectedStock, selectedEqual }) => {

    let disabledKeys = [];

    const handleActionChange = (key) => {
        setSelectedAction(key);
    };


    if (selectedStock === 'My Stock' || selectedStock === 'No. of Stock' || selectedStock === 'No. of Sold Items') {
        disabledKeys = ["Expired Date", "Purchased Date", "Current Date", "-"];
    }
    else {
        disabledKeys = ["My Stock", "No. of Stock", "No. of Sold Items", "-"];
    }
    if (selectedEqual === 'is Empty') {
        disabledKeys = ["Expired Date", "Purchased Date", "Current Date", "My Stock", "No. of Stock", "No. of Sold Items"];
    }

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[110px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="My Stock Selector"
            renderValue={() => selectedAction}
            placeholder='My Stock'
            disabledKeys={[...disabledKeys, selectedStock]}
        >
            <SelectItem key="My Stock" >
                My Stock
            </SelectItem>
            <SelectItem key="Expired Date" >
                Expired Date
            </SelectItem>
            <SelectItem key="Purchased Date" >
                Purchased Date
            </SelectItem>
            <SelectItem key="Current Date" >
                Current Date
            </SelectItem>
            <SelectItem key="No. of Stock" >
                No. of Stock
            </SelectItem>
            <SelectItem key="No. of Sold Items" >
                No. of Sold Items
            </SelectItem>
            <SelectItem key="-" >
                -
            </SelectItem>
        </Select>
    );
};

export const MyStockSelector3 = ({ selectedAction, setSelectedAction, selectedStock, selectedEqual }) => {

    let disabledKeys = [];

    const handleActionChange = (key) => {
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[110px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="My Stock Selector"
            renderValue={() => selectedAction}
            placeholder='My Stock'
            disabledKeys={disabledKeys}
        >
            <SelectItem key="My Stock" >
                My Stock
            </SelectItem>
            <SelectItem key="Expired Date" >
                Expired Date
            </SelectItem>
            <SelectItem key="Purchased Date" >
                Purchased Date
            </SelectItem>
            <SelectItem key="Current Date" >
                Current Date
            </SelectItem>
            <SelectItem key="No. of Stock" >
                No. of Stock
            </SelectItem>
            <SelectItem key="No. of Sold Items" >
                No. of Sold Items
            </SelectItem>
            {/* <SelectItem key="-" >
                -
            </SelectItem> */}
        </Select>
    );
};

export const MyStockSelector4 = ({ selectedAction, setSelectedAction, selectedStock3, selectedEqual2 }) => {

    let disabledKeys = [];

    const handleActionChange = (key) => {
        setSelectedAction(key);
    };


    if (selectedStock3 === 'My Stock' || selectedStock3 === 'No. of Stock' || selectedStock3 === 'No. of Sold Items') {
        disabledKeys = ["Expired Date", "Purchased Date", "Current Date", "-"];
    }
    else {
        disabledKeys = ["My Stock", "No. of Stock", "No. of Sold Items", "-"];
    }
    if (selectedEqual2 === 'is Empty') {
        disabledKeys = ["Expired Date", "Purchased Date", "Current Date", "My Stock", "No. of Stock", "No. of Sold Items"];
    }

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[110px]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[170px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-white text-[14px]",
            }}
            aria-label="My Stock Selector"
            renderValue={() => selectedAction}
            placeholder='My Stock'
            disabledKeys={[...disabledKeys, selectedStock3]}
        >
            <SelectItem key="My Stock" >
                My Stock
            </SelectItem>
            <SelectItem key="Expired Date" >
                Expired Date
            </SelectItem>
            <SelectItem key="Purchased Date" >
                Purchased Date
            </SelectItem>
            <SelectItem key="Current Date" >
                Current Date
            </SelectItem>
            <SelectItem key="No. of Stock" >
                No. of Stock
            </SelectItem>
            <SelectItem key="No. of Sold Items" >
                No. of Sold Items
            </SelectItem>
            <SelectItem key="-" >
                -
            </SelectItem>
        </Select>
    );
};

export default MyStockSelector;
