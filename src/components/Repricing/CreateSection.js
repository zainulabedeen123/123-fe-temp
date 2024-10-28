import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

export const CompetitorSelector = ({ selectedComp, setSelectedComp }) => {

    const handleCompChange = (key) => {
        setSelectedComp(key);
    };

    return (
        <Select
            selectedKeys={[selectedComp]}
            onSelectionChange={(key) => handleCompChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[200px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Competitor Selector"
            renderValue={() => selectedComp}
            placeholder='Cheapest Competitor'
        >
            <SelectItem key="Cheapest Competitor" >
                Cheapest Competitor
            </SelectItem>
            <SelectItem key="Highest Competitor" >
                Highest Competitor
            </SelectItem>
        </Select>
    );
};

export const ABSelector = ({ selectedAB, setSelectedAB }) => {

    const handleABChange = (key) => {
        setSelectedAB(key);
    };

    return (
        <Select
            selectedKeys={[selectedAB]}
            onSelectionChange={(key) => handleABChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="AB Selector"
            renderValue={() => selectedAB}
            placeholder='Below'
        >
            <SelectItem key="Below" >
                Below
            </SelectItem>
            <SelectItem key="Above" >
                Above
            </SelectItem>
            <SelectItem key="Equal" >
                Equal
            </SelectItem>
        </Select>
    );
};

export const CurrSelector = ({ selectedCurr, setSelectedCurr }) => {
    const handleCurrChange = (key) => {
        setSelectedCurr(key);
    };

    return (
        <Select
            selectedKeys={[selectedCurr]}
            onSelectionChange={(key) => handleCurrChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Currency Selector"
            renderValue={() => selectedCurr}
            placeholder='€'
        >
            <SelectItem key="€" >
                €
            </SelectItem>
            <SelectItem key="%" >
                %
            </SelectItem>
        </Select>
    );
}

export const OperatorSelector = ({ selectedOperator, setSelectedOperator }) => {
    const handleOperatorChange = (key) => {
        setSelectedOperator(key);
    };

    return (
        <Select
            selectedKeys={[selectedOperator]}
            onSelectionChange={(key) => handleOperatorChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => selectedOperator}
            placeholder='Plus'
        >
            <SelectItem key="Plus" >
                Plus
            </SelectItem>
            <SelectItem key="Minus" >
                Minus
            </SelectItem>
            <SelectItem key="Multiplied" >
                Multiplied
            </SelectItem>
            <SelectItem key="Divided" >
                Divided
            </SelectItem>
        </Select>
    );
}

export const ConditionSelector = ({ selectedCondition, setSelectedCondition }) => {
    const handleConditionChange = (key) => {
        setSelectedCondition(key);
    };

    return (
        <Select
            selectedKeys={[selectedCondition]}
            onSelectionChange={(key) => handleConditionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => selectedCondition}
            placeholder='No Condition'
        >
            <SelectItem key="No Condition" >
                No Condition
            </SelectItem>
            <SelectItem key="When" >
                When
            </SelectItem>
        </Select>
    );
}

export const StopConditionSelector = ({ selectedCondition, setSelectedCondition }) => {
    const handleConditionChange = (key) => {
        setSelectedCondition(key);
    };

    return (
        <Select
            selectedKeys={[selectedCondition]}
            onSelectionChange={(key) => handleConditionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => selectedCondition}
            placeholder='No Condition'
        >
            <SelectItem key="No Condition" >
                No Condition
            </SelectItem>
            <SelectItem key="New Price" >
                New Price
            </SelectItem>
        </Select>
    );
}

export const WhenSelector = ({ whenSelector, setWhenSelector }) => {
    const handleConditionChange = (key) => {
        setWhenSelector(key);
    };

    return (
        <Select
            selectedKeys={[whenSelector]}
            onSelectionChange={(key) => handleConditionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => whenSelector}
            placeholder='In Stock'
        >
            <SelectItem key="In Stock" >
                In Stock
            </SelectItem>
            <SelectItem key="Out Of Stock" >
                Out Of Stock
            </SelectItem>
        </Select>
    );
}

export const LowerHigherSelector = ({ value, setValue }) => {
    const handleConditionChange = (key) => {
        setValue(key);
    };

    return (
        <Select
            selectedKeys={[value]}
            onSelectionChange={(key) => handleConditionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => value}
            placeholder='Lower'
        >
            <SelectItem key="Lower" >
                Lower
            </SelectItem>
            <SelectItem key="Higher" >
                Higher
            </SelectItem>
            <SelectItem key="Lower/Higher" >
                Lower/Higher
            </SelectItem>
        </Select>
    );
}

export const MyPriceSelector = ({ value, setValue, lowerHigher }) => {
    const handleConditionChange = (key) => {
        setValue(key);
    };

    return (
        <Select
            selectedKeys={[value]}
            onSelectionChange={(key) => handleConditionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Operator Selector"
            renderValue={() => value}
            placeholder={lowerHigher === 'Lower/Higher' ? 'Min/Max Price' : 'My Price'}
            disabledKeys={lowerHigher === 'Lower/Higher' ? ["My Price", "Min Price", "Max Price", "My Cost"] : ["Min/Max Price"]}
        >
            <SelectItem key="My Price" >
                My Price
            </SelectItem>
            <SelectItem key="Min Price" >
                Min Price
            </SelectItem>
            <SelectItem key="Max Price" >
                Max Price
            </SelectItem>
            <SelectItem key="Min/Max Price" >
                Min/Max Price
            </SelectItem>
            <SelectItem key="My Cost" >
                My Cost
            </SelectItem>
        </Select>
    );
}