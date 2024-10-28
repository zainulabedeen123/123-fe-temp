import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { FaAngleRight } from 'react-icons/fa6';
import { Switch } from '@headlessui/react';
import RoleSelector from './RoleSelector';
import AddAppSelector from './AddAppSelector';

const EditUser = () => {
    const [enabledUser, setEnabledUser] = useState(true);
    const [selectedRole, setSelectedRole] =useState('Owner')

    const [permissions, setPermissions] = useState({
        perm1: true,
        perm2: false,
        perm3: true,
        perm4: false,
    });

    const handleToggle = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    return (
        <div className="">
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Link to="/organization/owner/dashboard" className="text-gray-400 hover:underline">Dashboard</Link>
                    <FaAngleRight size={14} />
                    <span className="text-[#F3941D]"> Edit User</span>
                </div>
            </div>

            <div className="bg-[#2D363D] rounded-2xl">
                <div className="text-[16px] text-white font-medium mb-4 border-b py-2">
                    <p className='px-5'>
                        Edit User
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 p-5">
                    <div>
                        <div className="mb-4 flex lg:flex-col justify-between">
                            <label className="block text-sm text-white w-full mb-1">Full Name</label>
                            <div className="flex gap-2 placeholder:text-[#A2A2A2]">
                                <input type="text" value="Louisa" className="  bg-[#3A4249] rounded text-[14px] px-2 py-1 w-full" />
                                <input type="text" value="Rebecca" className="  bg-[#3A4249] rounded text-[14px] px-2 py-1 w-full" />
                            </div>
                        </div>
                        <div className="mb-4 flex lg:flex-col justify-between">
                            <label className="block text-sm text-white w-full mb-1">Email Address</label>
                            <input type="email" value="louisa.reb@gmail.com" className="mt-1 bg-[#3A4249] rounded text-[14px] px-2 py-1 w-full placeholder:text-[#A2A2A2]" />
                        </div>
                        <div className="mb-4 flex lg:flex-col justify-between">
                            <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
                        </div>
                        <div className="mb-4 flex lg:flex-col justify-between">
                            <AddAppSelector/>
                        </div>
                        <div className="mb-4 flex lg:flex-col justify-end">
                            <div className="flex gap-2 justify-end">
                                <div className="flex items-center gap-2 rounded border px-2 py-1 text-sm">
                                    Research Pro
                                    <FiTrash2 />
                                </div>
                                <div className="flex items-center gap-2 rounded border px-2 py-1 text-sm">
                                    Inventory Management
                                    <FiTrash2 />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm">Enable User / Disable User</span>
                            <Switch
                                checked={enabledUser}
                                onChange={setEnabledUser}
                                className={`${enabledUser ? 'bg-[#FB0078]' : 'bg-[#e2e2e2]'} relative inline-flex items-center mt-1 h-4 rounded-full w-8`}
                            >
                                <span className="sr-only">Enable</span>
                                <span
                                    className={`${enabledUser ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div className='pl-2'>
                        <div className="grid grid-cols-3 gap-1">
                            <div className="text-sm col-span-1 text-white">Permissions</div>
                            <div className='col-span-2'>
                                {Object.keys(permissions).map((perm) => (
                                    <div key={perm} className="flex gap-2 mb-2">
                                        <Switch
                                            checked={permissions[perm]} onChange={() => handleToggle(perm)}
                                            className={`${permissions[perm] ? 'bg-[#FB0078]' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 mt-1 rounded-full w-9`}
                                        >
                                            <span className="sr-only">Enable</span>
                                            <span
                                                className={`${permissions[perm] ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`}
                                            />
                                        </Switch>
                                        <div>
                                            <h4 className="text-sm font-medium">Lorem Ipsum</h4>
                                            <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-2 p-5">
                    <button className="bg-[#FB0078] bg-opacity-30 font-medium text-[#FB0078] rounded px-2 py-1 text-[14px] flex gap-1 items-center"><FiTrash2 /> Delete User</button>
                    <button className="bg-[#F3941D] text-white rounded px-2 py-1 text-[14px]">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
