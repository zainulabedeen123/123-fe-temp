import React, { useState } from 'react';
import { Checkbox, Select, SelectItem, SelectSection, cn } from '@nextui-org/react';

const AddAppSelector = ({ selectedApps, setSelectedApps }) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [isSelected3, setIsSelected3] = useState(false);
    const [isSelected4, setIsSelected4] = useState(false);

    return (
        <Select
            selectedKeys={[selectedApps]}
            onSelectionChange={(key) => setSelectedApps(Array.from(key)[0])}
            classNames={{
                base: "w-full text-[#a3a3a3]",
                trigger: "rounded-md bg-[#3A4249] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] ",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Add App Selector"
            renderValue={() => selectedApps}
            placeholder='Add App'
        >
            <SelectSection title="Generate Reports" key="Generate Reports" classNames={{ title: "text-[#a3a3a3] text-sm pb-2" }}>
                <SelectItem isReadOnly key="All Users">
                    <Checkbox color="default" size='sm' isSelected={isSelected} onValueChange={setIsSelected} classNames={{
                        base: cn('text-[#a3a3a3]'),
                        label: 'text-[12px] text-[#a3a3a3]',
                    }}>
                        Research Pro
                    </Checkbox>
                </SelectItem>
                <SelectItem isReadOnly key="Selected Users">
                    <Checkbox color="default" size='sm' isSelected={isSelected2} onValueChange={setIsSelected2} classNames={{
                        base: cn('text-[#a3a3a3]'),
                        label: 'text-[12px] text-[#a3a3a3]',
                    }}>
                        Inventory Management
                    </Checkbox>
                </SelectItem>
                <SelectItem isReadOnly key="Selected Users">
                    <Checkbox color="default" size='sm' isSelected={isSelected3} onValueChange={setIsSelected3} classNames={{
                        base: cn('text-[#a3a3a3]'),
                        label: 'text-[12px] text-[#a3a3a3]',
                    }}>
                        Research Ultimate
                    </Checkbox>
                </SelectItem>
                <SelectItem isReadOnly key="Selected Users">
                    <Checkbox color="default" size='sm' isSelected={isSelected4} onValueChange={setIsSelected4} classNames={{
                        base: cn('text-[#a3a3a3]'),
                        label: 'text-[12px] text-[#a3a3a3]',
                    }}>
                        Inventory Management Ultimate
                    </Checkbox>
                </SelectItem>
            </SelectSection>
        </Select>
    );
};

export default AddAppSelector;
