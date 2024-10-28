import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const LanguageSelector = ({selectedLang, setSelectedLang}) => {
    // const [selected, setSelected] = useState("Select an option");

    return (
        <Select
            selectedKeys={[selectedLang]}
            onSelectionChange={(key) => setSelectedLang(Array.from(key)[0])}
            classNames={{
                base: "w-[150px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Language Selector"
            renderValue={() => selectedLang}
            placeholder='English'
        >
            <SelectItem key="English">English</SelectItem>
            <SelectItem key="Spanish">Spanish</SelectItem>
            <SelectItem key="Dutch">Dutch</SelectItem>
            <SelectItem key="French">French</SelectItem>
            <SelectItem key="German">German</SelectItem>
        </Select>
    );
};

export default LanguageSelector;
