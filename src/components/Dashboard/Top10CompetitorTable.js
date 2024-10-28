import React from 'react';
import { BiUpArrowCircle } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import stockx from '../../images/stockx.png';
import CustomTable from '../CustomTable';

const Top10CompetitorTable = () => {
    const columns = [
        {
            label: 'Competitor Domain',
            field: 'domain',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <img src={row.image} alt="" className='h-12' />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Monitored URLs',
            field: 'monitoredUrls',
            sortable: true,
            render: value => (
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#a3a3a3] text-center text-white flex items-center justify-center text-sm">{value}</div>
                    <span>Show</span>
                </div>
            )
        },
        {
            label: 'Prod. Matched',
            field: 'prodMatched',
            sortable: true,
            render: value => (
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-transparent text-center text-green-600 flex items-center justify-center border-2">{value}</div>
                    <span>0/0</span>
                </div>
            )
        },
        {
            label: 'Your Position',
            field: 'yourPosition',
            sortable: true,
            render: value => (
                <div className="flex items-center gap-4">
                    <BiUpArrowCircle className='text-[#00fba0]' size={25} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: value => (
                <div className="flex items-center rounded-full bg-[#28433b] text-[#00b62a] w-fit pr-3 py-1">
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        }
    ];

    const baseData = {
        domain: 'Stockx.com',
        image: stockx,
        monitoredUrls: 0,
        prodMatched: '0%',
        yourPosition: '4/100',
        status: 'Active'
    };

    const data = Array.from({ length: 10 }, () => baseData);


    return <CustomTable columns={columns} data={data} />;
};

export default Top10CompetitorTable;
