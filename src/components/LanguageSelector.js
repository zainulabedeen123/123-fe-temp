import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {


    const handleLanguageChange = (key) => {
        setSelectedLanguage(key);
    };

    return (
        <div className="ml-[38px] mr-3 md:mr-0">
            <Select
                selectedKeys={[selectedLanguage]}
                onSelectionChange={(key) => handleLanguageChange(Array.from(key)[0])}
                classNames={{
                    base: "w-10",
                    trigger: "p-1 rounded-md bg-[#2D363D] text-white text-center h-10 w-16 flex items-center justify-center",
                    listbox: "bg-[#2D363D] mr-[100px]",
                    popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[150px] ml-[-74px]",
                    innerWrapper: "text-[#ffffff] flex items-center justify-center h-full w-full",
                    value: "font-semi ml-2 text-white text-[14px]"
                }}
                aria-label="Language Selector"
                renderValue={() => selectedLanguage}
                // style={{ padding: '0 20px', }}
            >
                <SelectItem key="EN">English</SelectItem>
                <SelectItem key="ES">Spanish</SelectItem>
                <SelectItem key="NL">Dutch</SelectItem>
                <SelectItem key="FR">French</SelectItem>
                <SelectItem key="DE">German</SelectItem>
            </Select>
        </div>
    );
};

export default LanguageSelector;
