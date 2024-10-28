import React, { useState } from 'react';
import { FiAlertTriangle, FiEye, FiEyeOff } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import repriceGray from '../../images/Reprice Grey.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Searchbar from '../Searchbar';
import CustomTable from '../CustomTable';

const RepricingRules = () => {
    const [data, setData] = useState(generateDummyData());

    const toggleActive = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].isActive = !newData[index].isActive;
            newData[index].status = newData[index].isActive ? 'Enabled' : 'Disabled'; // update status text based on isActive
            return newData;
        });
    };

    const columns = [
        {
            label: 'Rule Name',
            field: 'ruleName',
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <span className='flex gap-2 items-center'><RiMoneyDollarBoxLine /> {value}</span>
                </div>
            )
        },
        {
            label: 'Products',
            field: 'products',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <div className='text-white text-[12px] font-thin rounded-full bg-[#a3a3a3] w-8 h-8 flex items-center justify-center'>All</div>
                    <p>Show</p>
                </div>
            )
        },
        {
            label: 'Competitors',
            field: 'competitors',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <div className='text-white text-[12px] font-thin rounded-full bg-[#a3a3a3] w-8 h-8 flex items-center justify-center'>All</div>
                    <p>Show</p>
                </div>
            )
        },
        {
            label: 'Last Run',
            field: 'lastRun',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <FiAlertTriangle className='text-[#eb7301] ' size={18} />
                    <p>{value}</p>
                </div>
            )
        },
        {
            label: 'Repricing Type',
            field: 'repricingType',
            render: (value) => (
                <div className={`flex items-center rounded-full text-[#00b62a] bg-[#28433b] w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Status',
            field: 'status',
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${data[index].isActive ? 'text-[#00B62A] bg-[#00B62A] bg-opacity-10' : 'text-[#FB0078] bg-[#FB0078] bg-opacity-10'} w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: '',
            field: 'actions',
            render: (value, row, index) => (
                <div className="flex items-center gap-1 w-[42px]">
                    <img src={repriceGray} alt="" className='w-4' />
                    {data[index].isActive ? <FiEye onClick={() => toggleActive(index)} size={18} /> : <FiEyeOff onClick={() => toggleActive(index)} size={18} />}
                    <BsThreeDotsVertical size={18} />
                </div>
            )
        }
    ];

    function generateDummyData() {
        const rules = [
            { ruleName: 'Reprice 1 cent below my cheapest competitors', products: 'All', competitors: 'All', lastRun: '6 Days ago', repricingType: 'Preview', status: 'Enabled', isActive: true }
        ];
        const data = [];
        for (let i = 0; i < 10; i++) {
            const rule = rules[i % rules.length];
            data.push({
                ...rule,
            });
        }
        return data;
    }

    return (
        <div className="flex flex-col h-screen gap-4 bg-[#2d363d] rounded-lg p-3 mt-10">
            <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                    <div className="text-[14px] font-medium">Create or edit your repricing rule</div>
                </div>

                <div className="flex space-x-5 items-center">
                    <Searchbar />
                </div>
            </div>

            <div className='flex h-full overflow-scroll scrollbar'>
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default RepricingRules;
