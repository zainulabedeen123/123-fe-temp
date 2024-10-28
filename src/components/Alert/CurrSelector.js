import { Select, SelectItem } from "@nextui-org/react";

export const CurrSelector = ({ selectedCurr, setSelectedCurr }) => {
    const handleCurrChange = (key) => {
        setSelectedCurr(key);
    };

    return (
        <Select
            selectedKeys={[selectedCurr]}
            onSelectionChange={(key) => handleCurrChange(Array.from(key)[0])}
            classNames={{
                base: "w-[60px] text-[#a3a3a3]",
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