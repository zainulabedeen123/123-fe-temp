import React, { useState } from 'react';
import { Checkbox, Select, SelectItem, SelectSection, cn } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const GenerateReportsDropdown = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);


  const handleSelectionChange = (keys) => {
    const selectedArray = Array.from(keys);
    setSelectedKeys(keys);
    if (selectedArray.includes('user-access')) {
      navigate('/organization/owner/dashboard/useraccess');
    }
  };

  return (
    <Select
      placeholder="Generate Reports"
      variant="flat"
      classNames={{
        base: "w-full",
        trigger: "bg-[#2D363D] text-[#ffffff] p-2 rounded-md border border-[#a3a3a3] min-w-[100px]",
        popoverContent: "bg-[#2D363D] w-[200px]",
        listboxWrapper: "bg-[#2D363D] p-2 rounded-md",
        listbox: "space-y-1",
        selectorIcon: "text-[#ffffff]",
        value: "text-[#a3a3a3]",
      }}
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
    >
      <SelectSection title="Generate Reports" key="Generate Reports" classNames={{ title: "text-[#a3a3a3] text-sm pb-2" }}>
        <SelectItem isReadOnly key="All Users">
          <Checkbox color="default" size='sm' isSelected={isSelected} onValueChange={setIsSelected} classNames={{
            base: cn('text-[#a3a3a3]'),
            label: 'text-[12px] text-[#a3a3a3]',
          }}>
            All Users
          </Checkbox>
        </SelectItem>
        <SelectItem isReadOnly key="Selected Users">
          <Checkbox color="default" size='sm' isSelected={isSelected2} onValueChange={setIsSelected2} classNames={{
            base: cn('text-[#a3a3a3]'),
            label: 'text-[12px] text-[#a3a3a3]',
          }}>
            Selected Users
          </Checkbox>
        </SelectItem>
      </SelectSection>
      <SelectSection classNames={{ title: "text-[#a3a3a3] text-sm pt-2 pb-1" }}>
        <SelectItem key="user-access" className="text-[#a3a3a3] text-sm">User Access</SelectItem>
        <SelectItem key="rejected-users" className="text-[#a3a3a3] text-sm">Rejected Users</SelectItem>
        <SelectItem key="accepted-users" className="text-[#a3a3a3] text-sm">Accepted Users</SelectItem>
      </SelectSection>
    </Select>
  );
};

export default GenerateReportsDropdown;
