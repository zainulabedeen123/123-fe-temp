import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { LuDot } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Searchbar from '../Searchbar';
import repriceGray from '../../images/Reprice Grey.png';
import CustomTable from '../CustomTable';
import stockx from '../../images/stockx.png';

const MonitoredURL = () => {
    const [data, setData] = useState([
        { competitorURL: 'Stockx.com', prodMatched: '0/0', compPrice: '$245', myPrice: '$200', diff: '$45', stock: 'No Data', status: 'Enabled', isActive: true },
        { competitorURL: 'Stockx.com', prodMatched: '0/0', compPrice: '$245', myPrice: '$200', diff: '$45', stock: 'Analyzing...', status: 'Disabled', isActive: false },
    ]);

    const toggleStatus = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].status = newData[index].status === 'Enabled' ? 'Disabled' : 'Enabled';
            newData[index].isActive = !newData[index].isActive;
            return newData;
        });
    };

    const columns = [
        {
            label: 'Competitor URL',
            field: 'competitorURL',
            sortable: true,
            render: (value) => (
                <div className="flex items-center gap-2">
                    <img src={stockx} alt="Product" className='h-12' />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Prod Matched',
            field: 'prodMatched',
            sortable: true,
            render: value => (
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#a3a3a3] text-center text-white flex items-center justify-center text-sm">{value.split('/')[1]}</div>
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Comp. Price',
            field: 'compPrice',
            sortable: true,
        },
        {
            label: 'My Price',
            field: 'myPrice',
            sortable: true,
        },
        {
            label: 'Diff',
            field: 'diff',
            sortable: true,
        },
        {
            label: 'Stock',
            field: 'stock',
            sortable: true,
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${data[index].status === 'Enabled' ? 'text-[#00B62A] bg-[#00B62A] bg-opacity-10' : 'text-[#FB0078] bg-[#FB0078] bg-opacity-10'} w-fit pr-3 py-1`}>
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
                <div className="flex items-center gap-2 w-[42px]">
                    <img src={repriceGray} alt="Reprice" className="h-4" />
                    {data[index].isActive ? <FiEye style={18} onClick={() => toggleStatus(index)} /> : <FiEyeOff style={18} onClick={() => toggleStatus(index)} />}
                </div>
            )
        }
    ];

    return (
        <div className="bg-[#2d363d] rounded-lg p-3 pb-5 mt-10 h-fit overflow-x-scroll scrollbar">
            <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                        <p className='text-[14px]'>
                            Add and manage your competitors
                        </p>
                        <p className='px-2 w-[50px] text-center text-pink-600 bg-[#423143] rounded-full py-1 text-[14px]'>0 Url</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <Searchbar />
                    <button className='flex w-[220px] items-center text-[12px] rounded-md yellowBG text-white px-3 py-3 font-thin'><BiPlus className='flex space-x-1' />Add Monitored URL</button>
                </div>
            </div>

            <div className='mt-5 overflow-scroll scrollbar'>
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default MonitoredURL;
