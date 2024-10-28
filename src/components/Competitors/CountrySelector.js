import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const CountrySelector = ({ selectedCountry, setSelectedCountry }) => {

    return (
        <Select
            selectedKeys={[selectedCountry]}
            onSelectionChange={(key) => setSelectedCountry(Array.from(key)[0])}
            classNames={{
                base: "mt-2 text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Country Selector"
            renderValue={() => selectedCountry}
            placeholder='Select Country'
        >
            <SelectItem key="Austria">Austria</SelectItem>
            <SelectItem key="Belgium">Belgium</SelectItem>
            <SelectItem key="Bulgaria">Bulgaria</SelectItem>
            <SelectItem key="Croatia">Croatia</SelectItem>
            <SelectItem key="Cyprus">Cyprus</SelectItem>
            <SelectItem key="Czech Republic">Czech Republic</SelectItem>
            <SelectItem key="Denmark">Denmark</SelectItem>
            <SelectItem key="Estonia">Estonia</SelectItem>
            <SelectItem key="Finland">Finland</SelectItem>
            <SelectItem key="France">France</SelectItem>
            <SelectItem key="Germany">Germany</SelectItem>
            <SelectItem key="Greece">Greece</SelectItem>
            <SelectItem key="Hungary">Hungary</SelectItem>
            <SelectItem key="Ireland">Ireland</SelectItem>
            <SelectItem key="Italy">Italy</SelectItem>
            <SelectItem key="Latvia">Latvia</SelectItem>
            <SelectItem key="Lithuania">Lithuania</SelectItem>
            <SelectItem key="Luxembourg">Luxembourg</SelectItem>
            <SelectItem key="Malta">Malta</SelectItem>
            <SelectItem key="Netherlands">Netherlands</SelectItem>
            <SelectItem key="Poland">Poland</SelectItem>
            <SelectItem key="Portugal">Portugal</SelectItem>
            <SelectItem key="Romania">Romania</SelectItem>
            <SelectItem key="Slovakia">Slovakia</SelectItem>
            <SelectItem key="Slovenia">Slovenia</SelectItem>
            <SelectItem key="Spain">Spain</SelectItem>
            <SelectItem key="Sweden">Sweden</SelectItem>

        </Select>
    );
};

export default CountrySelector;
