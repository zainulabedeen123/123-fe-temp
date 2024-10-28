import { Select, SelectItem } from "@nextui-org/react";

export const LowerSelector = ({ selectedLower, setSelectedLower }) => {
    const handleCurrChange = (key) => {
        setSelectedLower(key);
    };

    return (
        <Select
            selectedKeys={[selectedLower]}
            onSelectionChange={(key) => handleCurrChange(Array.from(key)[0])}
            classNames={{
                base: "w-[100px] text-[#a3a3a3]",
                trigger: "rounded-sm bg-transparent border border-[#a3a3a3] text-white ",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[150px]",
                innerWrapper: "text-[#ffffff] ",
                value: "font-semi text-[#a3a3a3] text-[14px]",
            }}
            aria-label="Lower Selector"
            renderValue={() => selectedLower}
            placeholder='Lower'
        >
            <SelectItem key="Lower" >
                Lower
            </SelectItem>
            <SelectItem key="Higher" >
                Higher
            </SelectItem>
        </Select>
    );
}