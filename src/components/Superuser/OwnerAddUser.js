import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const OwnerAddUser = () => {
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
                    <span className="text-[#F3941D]"> Add User</span>
                </div>
            </div>

            <div className="bg-[#2D363D] p-4 rounded-2xl">
                <div className="flex justify-between gap-2 mb-4">
                    <div className="text-[16px] text-white font-medium">
                        User Information
                    </div>
                    <button className="bg-[#F3941D] text-white rounded px-3 py-1 text-[14px]">Save</button>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Name</label>
                            <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">E-mail</label>
                            <input type="email" placeholder="E-mail" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Company Name</label>
                            <input type="text" placeholder="123 scraper" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Connect Your Slack</label>
                            <input type="text" placeholder="Slack" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Surname</label>
                            <input type="text" placeholder="Surname" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Country</label>
                            <input type="text" placeholder="Netherland" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Phone</label>
                            <div className="flex h-[33.5px] items-center bg-[#3A4249] text-[#A3A3A3] rounded-[9px]">
                                <div className="flex items-center gap-3 px-3 py-2 border-r border-[#A3A3A3] text-sm">+31 <FaAngleDown /></div>
                                <input type="text" placeholder="Phone" className="w-full outline-none bg-[#3A4249] text-sm px-3 placeholder:text-neutral-400" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#F9F9F9]">Assigned Role</label>
                            <input type="text" placeholder="Role" className="w-full px-4 py-2 bg-[#3A4249] text-neutral-400 text-sm font-normal leading-tight rounded-[9px] placeholder:text-neutral-400" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full container gap-2 mt-4">
                    <label htmlFor="agree" className="container text-neutral-400 text-xs font-normal leading-tight flex items-center gap-2">
                        <input type="checkbox" id="agree"></input >
                        <span className="checkmark mt-3"></span>
                        <span className='w-full ml-5'>
                            I am aware of the additional costs per user and hereby agree to the terms.
                        </span>
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={12} />
                            </IconButton>
                        </Tooltip>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default OwnerAddUser;
