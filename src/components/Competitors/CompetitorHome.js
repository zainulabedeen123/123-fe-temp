import React, { useState } from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';
import { LuDot } from 'react-icons/lu';
import stockx from '../../images/stockx.png';
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";

const CompetitorHome = () => {
    const [competitors, setCompetitors] = useState([
        { competitorDomain: 'Nike.com', monitoredUrls: 0, prodMatched: '0%', yourPosition: '4/100', status: 'Active', isActive: true },
        { competitorDomain: 'Adidas.com', monitoredUrls: 0, prodMatched: '0%', yourPosition: '5/100', status: 'Inactive', isActive: false },
        // Add more competitors as needed
    ]);

    const toggleActive = (index) => {
        setCompetitors(prevCompetitors => {
            const newCompetitors = [...prevCompetitors];
            newCompetitors[index].isActive = !newCompetitors[index].isActive;
            newCompetitors[index].status = newCompetitors[index].isActive ? 'Active' : 'Inactive'; // update status text based on isActive
            return newCompetitors;
        });
    };

    const columns = [
        {
            label: 'Competitor Domain',
            field: 'competitorDomain',
            sortable: true,
            render: (value, row, index) => (
                <div className="flex items-center gap-2">
                    <img src={stockx} alt="Stockx" className='h-12' />
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
            label: 'Prod.Matched',
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
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${competitors[index]?.isActive ? 'text-[#00b62a] bg-[#28433b]' : 'text-[#fc0479] bg-[#423143]'} w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span className={competitors[index]?.isActive ? 'text-[#00b62a]' : 'text-[#fc0479]'}>{value}</span>
                </div>
            )
        },
        {
            label: 'Actions',
            field: 'actions',
            sortable: false,
            render: (value, row, index) => (
                <div className="flex items-center gap-2 w-[42px]">
                    {competitors[index]?.isActive ? <FiEye style={18} onClick={() => toggleActive(index)} /> : <FiEyeOff style={18} onClick={() => toggleActive(index)} />}
                    <MdOutlineDeleteForever style={18}/>
                </div>
            )
        }
    ];

    return (
        <div className="bg-[#2d363d] rounded-lg p-3 mt-10">
            <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                <div className="flex space-x-3 items-center">
                    <div className="text-[14px]">Add and manage your competitors</div>
                    <p className='px-2 text-pink-600 bg-[#423143] rounded-full py-1 text-[14px]'>5 active products</p>
                </div>
                <div className="flex space-x-5 items-center">
                    <Searchbar />
                </div>
            </div>
            <div className='mt-5 overflow-scroll scrollbar'>
                <CustomTable columns={columns} data={competitors} />
            </div>
        </div>
    );
}

export default CompetitorHome;
