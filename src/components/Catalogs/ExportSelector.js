import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { FaFileCsv, FaFilePdf, FaFileExcel, FaClipboard } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

const ExportSelector = ({ selectedExport, setSelectedExport }) => {
    const handleExportChange = (key) => {
        setSelectedExport(key);
    };

    return (
        <Select
            selectedKeys={[selectedExport]}
            onSelectionChange={(key) => handleExportChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px]",
                trigger: "rounded-md bg-transparent border border-[#a3a3a3] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[200px]",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[14px]"
            }}
            aria-label="Export Selector"
            renderValue={() => selectedExport}
            placeholder='Export'
        >
            <SelectItem key="CSV" startContent={<FaFileCsv />}>
                Export as CSV
            </SelectItem>
            <SelectItem key="Google Sheets" startContent={<SiGooglesheets />}>
                Export to Google Sheets
            </SelectItem>
            <SelectItem key="PDF" startContent={<FaFilePdf />}>
                Export as PDF
            </SelectItem>
            <SelectItem key="Excel" startContent={<FaFileExcel />}>
                Export to Excel
            </SelectItem>
            <SelectItem key="Copy Keywords" startContent={<FaClipboard />}>
                Copy Keywords to Clipboard
            </SelectItem>
            <SelectItem key="Copy Table" startContent={<FaClipboard />}>
                Copy Table to Clipboard
            </SelectItem>
        </Select>
    );
};

export default ExportSelector;
