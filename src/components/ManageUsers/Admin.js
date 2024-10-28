import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { RiArrowUpDownFill } from 'react-icons/ri';
import CustomTable from '../CustomTable';

const Admin = () => {
    const [users, setUsers] = useState([
        { name: 'John Doe', email: 'john@example.com', status: 'Active', permission: 'Admin' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', permission: 'Editor' },
        // Add more users as needed
    ]);

    const columns = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <span>Name</span>
                    <RiArrowUpDownFill className='inline-block' />
                </div>
            ),
            field: 'name',
            sortable: true,
            render: (value) => (
                <span>{value}</span>
            )
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    E-mail <RiArrowUpDownFill className='inline-block' />
                </div>
            ),
            field: 'email',
            sortable: true
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    Status <RiArrowUpDownFill className='inline-block' />
                </div>
            ),
            field: 'status',
            sortable: true
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    Permission <RiArrowUpDownFill className='inline-block' />
                </div>
            ),
            field: 'permission',
            sortable: true
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    Action <RiArrowUpDownFill className='inline-block' />
                </div>
            ),
            field: 'action',
            sortable: false,
            render: (value, row) => (
                <button className='text-white yellowBG px-2 py-0.5 rounded-sm text-xs inline-block'>Edit</button>
            )
        }
    ];

    return (
        <>
            <div className="bg-[#2d363d] rounded-lg p-5 pb-8 h-full">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className='flex items-center gap-3 text-[14px] mb-1'>
                            User Management <span className='w-fit px-3 text-[12px] py-1 text-[#fc0479] bg-[#423143] rounded-full'>{users.length} Users</span>
                        </h1>
                        <p className='text-[12px]'>Create, edit or delete new user for this account</p>
                    </div>
                    <button className='yellowBG text-white w-fit text-[12px] rounded-md px-3 py-1 flex items-center gap-1'>
                        <GoPlus /> Add New
                    </button>
                </div>
                <div className="mt-2 overflow-auto scrollbar">
                    <CustomTable columns={columns} data={users} />
                </div>
            </div>
        </>
    );
};

export default Admin;
