import React from 'react';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { LuDot } from 'react-icons/lu';
import { BsTag } from 'react-icons/bs';
import nikeImg from '../../images/nike.png'; // Make sure the image path is correct
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';

const RepricingHistory = () => {
    const columns = [
        {
            label: 'Executed at',
            field: 'executedAt',
        },
        {
            label: 'Rule Name',
            field: 'ruleName',
            render: (value) => (
                <div className="flex items-center gap-2 h-10">
                    <RiMoneyDollarBoxLine />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Repriced Products',
            field: 'repricedProducts',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <img src={nikeImg} alt="Nike Flyknit" className="h-8 w-8 rounded" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Status',
            field: 'status',
            render: (value) => {
                const statusColors = {
                    'Disabled': 'text-[#FB0078] bg-[#FB0078] bg-opacity-10',
                    'Enabled': 'text-[#00B62A] bg-[#00B62A] bg-opacity-10',
                    'Executed': 'text-[#60B2FF] bg-[#60B2FF] bg-opacity-10',
                    'In Progress': 'text-[#EB7301] bg-[#EB7301] bg-opacity-10'
                };
                return (
                    <div className={`flex items-center rounded-full ${statusColors[value]} w-fit pr-3 py-1`}>
                        <LuDot size={20} />
                        <span>{value}</span>
                    </div>
                );
            }
        },
        {
            label: 'Actions',
            field: 'actions',
            render: () => (
                <div className="flex items-center gap-2">
                    <BsTag className="text-[#a3a3a3]" style={34} />
                </div>
            )
        }
    ];

    const data = [
        {
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Disabled'
        },
        {
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Enabled'
        },
        {
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Running'
        },
        {
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Executed'
        },
        {
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Disabled'
        },{
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Disabled'
        },{
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Disabled'
        },{
            executedAt: '10/11/23 at 10 AM',
            ruleName: 'Reprice 1 cent below my cheapest competitor',
            repricedProducts: 'Nike Flyknit',
            status: 'Disabled'
        },
    ];

    return (
        <div className="flex flex-col h-fit gap-4 bg-[#2d363d] rounded-lg p-3 mt-10">
            <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                    <div className="text-[14px] rounded-full py-2 px-4 text-[#FB0078] bg-[#FB0078] bg-opacity-10 font-medium">0 Runs</div>
                </div>

                <div className="flex space-x-5 items-center">
                    <Searchbar />
                </div>
            </div>

            <div className='flex overflow-scroll scrollbar'>
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default RepricingHistory;
