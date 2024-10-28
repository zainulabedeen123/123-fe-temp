import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';

const AlertRules = () => {
    const [rules, setRules] = useState([
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        { ruleName: 'My Competitors are 5% cheaper than me', competitors: 'All', alert: 'View Alerts', latestEmail: 'Never', updatedAt: '12 Hours ago', status: 'Enabled', isActive: true },
        { ruleName: 'Price drop alert', competitors: 'All', alert: 'View Alerts', latestEmail: 'Yesterday', updatedAt: '1 Day ago', status: 'Enabled', isActive: true },
        // Add more rules as needed
    ]);

    const toggleActive = (index) => {
        setRules(prevRules => {
            const newRules = [...prevRules];
            newRules[index].isActive = !newRules[index].isActive;
            newRules[index].status = newRules[index].isActive ? 'Enabled' : 'Disabled';
            return newRules;
        });
    };

    const handleEdit = () => {
        navigate('/alert/pricealert');
    };

    const columns = [
        {
            label: 'Rule Name',
            field: 'ruleName',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center p-2 gap-2">
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Competitors',
            field: 'competitors',
            sortable: true,
            render: (value) => (
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#a3a3a3] text-center text-white flex items-center justify-center text-sm font-thin">{value}</div>
                    <span className='cursor-pointer' onClick={() => navigate('/alert/pricealert')}>Show</span>
                </div>
            )
        },
        {
            label: 'Alert',
            field: 'alert',
            sortable: true,
        },
        {
            label: 'Latest Email Sent',
            field: 'latestEmail',
            sortable: true,
        },
        {
            label: 'Updated At',
            field: 'updatedAt',
            sortable: true,
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${rules[index].isActive ? 'text-[#00b62a] bg-[#28433b]' : 'text-[#fc0479] bg-[#423143]'} w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Actions',
            field: 'actions',
            sortable: false,
            render: (value, row, index) => (
                <div className="flex items-center gap-2 w-[80px]">
                    {rules[index].isActive ? <FiEye onClick={() => toggleActive(index)} size={18} /> : <FiEyeOff onClick={() => toggleActive(index)} size={18} />}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                isIconOnly
                                variant="light"
                                className="p-0 text-[#a3a3a3]"
                            >
                                <BsThreeDotsVertical size={18} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Action menu" 
                            className="bg-[#1e252b] text-[#8a8b8c]"
                            style={{ minWidth: '120px' }}
                        >
                            <DropdownItem key="edit" onClick={handleEdit}>Edit</DropdownItem>
                            <DropdownItem key="run">Run</DropdownItem>
                            <DropdownItem key="delete" className="text-[#8a8b8c]">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            )
        }
    ];

    return (
        <>
            <div className="bg-[#2D363D] p-3 rounded-2xl">
                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex space-x-3 text-[#fafafa] text-sm">Create or edit your price and stock alert rules</div>

                    <div className="flex gap-2 items-center justify-between">
                        <Searchbar />
                        <button className='flex items-center rounded-md yellowBG text-white text-sm w-[200px] px-3 py-2 font-thin'>
                            <BiPlus className='mr-1' /> Add Alert Rule
                        </button>
                    </div>
                </div>
                <div className='h-full mt-5 overflow-scroll scrollbar'>
                    <CustomTable columns={columns} data={rules} />
                </div>
            </div>
        </>
    );
}

export default AlertRules;
