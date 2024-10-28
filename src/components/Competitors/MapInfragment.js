import React from 'react';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import CustomTable from '../CustomTable'; 
import Searchbar from '../Searchbar';

const MapInfringement = () => {
    const columns = [
        {
            label: 'Reseller URL',
            field: 'resellerURL',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center gap-2">
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
                    <div className="h-8 w-8 rounded-full bg-[#a3a3a3] text-center text-white flex items-center justify-center text-sm">{value}</div>
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Reseller Price',
            field: 'resellerPrice',
            sortable: true,
        },
        {
            label: 'MAP',
            field: 'map',
            sortable: true,
        },
        {
            label: 'MAP Status',
            field: 'mapStatus',
            sortable: true,
            render: value => (
                <div className={`flex items-center rounded-full ${value === 'MAP Infringement Detected' ? 'text-green-600 bg-green-600 bg-opacity-10' : value === 'Action Required' ? 'text-orange-600 bg-orange-600 bg-opacity-10' : 'text-blue-600 bg-blue-600 bg-opacity-10'} w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Diff',
            field: 'diff',
            sortable: true,
        },
        {
            label: 'Actions',
            field: 'actions',
            sortable: false,
            render: () => (
                <button className='flex items-center text-[12px] rounded-md yellowBG text-white px-3 py-1 font-thin'>Contact Reseller</button>
            )
        }
    ];

    const data = [
        { resellerURL: 'Stockx.com', prodMatched: '0%', resellerPrice: '$30', map: '$25-$45', mapStatus: 'MAP Infringement Detected', diff: '$10', actions: '' },
        { resellerURL: 'Stockx.com', prodMatched: '0%', resellerPrice: '$30', map: '$25-$45', mapStatus: 'Action Required', diff: '$10', actions: '' },
        { resellerURL: 'Stockx.com', prodMatched: '0%', resellerPrice: '$30', map: '$25-$45', mapStatus: 'Non Found', diff: '$10', actions: '' }
    ];

    return (
        <>
            <div className="bg-[#2d363d] rounded-lg p-3 pb-5 mt-10 h-fit">
                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-2">
                            <p className='text-[14px]'>
                                Monitor your resellers MAP infringements
                            </p>
                            <p className='px-2 w-[50px] text-center text-pink-600 bg-[#423143] rounded-full py-1 text-[14px]'>0 Url</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Searchbar />
                        <button className='flex w-[200px] items-center text-[12px] rounded-md yellowBG text-white px-3 py-3 font-thin'><BiPlus className='flex space-x-1' />Add Monitored URL</button>
                    </div>
                </div>

                <div className='mt-5 overflow-scroll scrollbar'>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    )
}

export default MapInfringement;
