import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";

const RoleSelector = ({selectedRole, setSelectedRole}) => {

    return (
        <Select
            selectedKeys={[selectedRole]}
            onSelectionChange={(key) => setSelectedRole(Array.from(key)[0])}
            classNames={{
                base: "w-full text-[#a3a3a3]",
                trigger: "rounded-md bg-[#3A4249] text-white",
                listbox: "bg-[#1E252B]",
                popoverContent: "bg-[#1E252B] text-[#a3a3a3] ",
                innerWrapper: "text-[#ffffff]",
                value: "font-semi text-[#a3a3a3] text-[12px]",
            }}
            aria-label="Role Selector"
            renderValue={() => selectedRole}
            placeholder='Owner'
        >
            <SelectItem key="Owner">Owner</SelectItem>
            <SelectItem key="Admin">Admin</SelectItem>
            <SelectItem key="Technical User">Technical User</SelectItem>
            <SelectItem key="User">User</SelectItem>
        </Select>
    );
};

export default RoleSelector;
