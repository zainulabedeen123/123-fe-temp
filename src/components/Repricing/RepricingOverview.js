import React from 'react';
import nikeImg from '../../images/nike.png';
import { LuDot } from 'react-icons/lu';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';

const StockTable = () => {
    const columns = [
        {
            label: 'Product Name',
            field: 'productName',
            render: (value) => (
                <div className="flex items-center gap-2 h-10">
                    <img src={nikeImg} alt="Nike Flyknit" className="h-8 w-8 rounded" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Price',
            field: 'price',
        },
        {
            label: 'Cost',
            field: 'cost',
        },
        {
            label: 'Markup',
            field: 'markup',
        },
        {
            label: 'New Price',
            field: 'newPrice',
        },
        {
            label: 'Min/Max Price',
            field: 'minMaxPrice',
        },
        {
            label: 'Competitor Prices',
            field: 'competitorPrices',
        },
        {
            label: 'Triggered Rule',
            field: 'triggeredRule',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <RiMoneyDollarBoxLine />
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
        }
    ];

    const data = [
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'Disabled'
        },
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'Enabled'
        },
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'Executed'
        },
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'In Progress'
        },
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'In Progress'
        },
        {
            productName: 'Nike Flyknit',
            price: '$50',
            cost: '$30',
            markup: '$20',
            newPrice: '$48',
            minMaxPrice: '$30-$48',
            competitorPrices: '$49',
            triggeredRule: 'Reprice 1 cent below my cheapest competitor',
            status: 'In Progress'
        }
    ];


    return (
        <div className="flex flex-col h-fit gap-4 bg-[#2d363d] rounded-lg p-3 mt-10">
            <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                    <div className="text-[14px] font-medium">See how to adjust your prices based on your repricing rules</div>
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

export default StockTable;
