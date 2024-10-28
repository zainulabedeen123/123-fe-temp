import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { FaAngleRight } from 'react-icons/fa6';
import { Switch } from '@headlessui/react';
import RoleSelector from './RoleSelector';
import AddAppSelector from './AddAppSelector';

const AdminEditUser = () => {
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
                    <Link to="/organization/admin/dashboard" className="text-gray-400 hover:underline">Dashboard</Link>
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
                <div className="flex flex-col gap-4 p-5">

                        <div className="">
                            <label className="block text-sm text-white w-full mb-1">Full Name</label>
                            <div className="flex gap-2 placeholder:text-[#A2A2A2]">
                                <input type="text" value="Louisa" className=" bg-[#3A4249] rounded text-[14px] px-2 py-2 w-full" />
                                <input type="text" value="Rebecca" className="  bg-[#3A4249] rounded text-[14px] px-2 py-2 w-full" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block text-sm text-white w-full mb-1">Email Address</label>
                            <input type="email" value="louisa.reb@gmail.com" className="  bg-[#3A4249] rounded text-[14px] px-2 py-2 w-full placeholder:text-[#A2A2A2]" />
                        </div>
                        <div className="">
                            <p className="block text-sm text-white w-full mb-1">Role</p>
                            <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
                        </div>
                        <div className="">
                                <p className="block text-sm text-white w-full mb-1">Add App</p>
                                <AddAppSelector/>
                        </div>

                        <div className="flex flex-col gap-2">
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

                <div className="flex justify-end gap-2 p-5">
                    <button className="bg-[#FB0078] bg-opacity-30 font-medium text-[#FB0078] rounded px-2 py-1 text-[14px] flex gap-1 items-center"><FiTrash2 /> Delete User</button>
                    <button className="bg-[#F3941D] text-white rounded px-2 py-1 text-[14px]">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditUser;
