import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { FaCheck, FaTimes, FaFileCsv } from 'react-icons/fa';

const ImportExportSelector = ({ selectedAction, setSelectedAction, handleImport, handleExport }) => {
    const handleActionChange = (key) => {
        if (key === 'Import') {
            handleImport();
          }
          if (key === 'Export') {
            handleExport();
          }
        setSelectedAction(key);
    };

    return (
        <Select
            selectedKeys={[selectedAction]}
            onSelectionChange={(key) => handleActionChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Massive Action Selector"
            renderValue={() => selectedAction}
            placeholder='Import/Export'
        >
            <SelectItem key="Import" startContent={<FaFileCsv />} >
                Import
            </SelectItem>
            <SelectItem key="Export" startContent={<FaFileCsv />} >
                Export
            </SelectItem>
        </Select>
    );
};

export default ImportExportSelector;
