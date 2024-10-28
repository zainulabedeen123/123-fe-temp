import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa6';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { LuDot } from 'react-icons/lu';
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';
import { useNavigate } from 'react-router-dom';
import UpgradeModal from '../UpgradeModal';
import FilterSelector from './FilterSelector';
import { Button } from '@nextui-org/react';

const ReportHome = () => {
    const [data, setData] = useState(generateDummyData());
    const [upgraded, setUpgraded] = useState(false);
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false); // false for Modal, true for redirect page

    const toggleActive = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].isActive = !newData[index].isActive;
            newData[index].status = newData[index].isActive ? 'Enabled' : 'Disabled';
            return newData;
        });
    };

    const columns = [
        {
            label: 'Name',
            field: 'name',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Type',
            field: 'type',
            sortable: true,
        },
        {
            label: 'Frequency',
            field: 'frequency',
            sortable: true,
        },
        {
            label: 'External Link',
            field: 'externalLink',
            sortable: true,
        },
        {
            label: 'Last Run',
            field: 'lastRun',
            sortable: true,
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
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
            sortable: false,
            render: (value, row, index) => (
                <div className="flex items-center gap-3 w-[42px]">
                    {data[index].isActive ? <FiEye size={18} onClick={() => toggleActive(index)} /> : <FiEyeOff size={18} onClick={() => toggleActive(index)} />}
                    <BsThreeDotsVertical />
                </div>
            )
        }
    ];

    function generateDummyData() {
        const reports = [
            { name: 'Competitors Cheaper Than Me', type: 'Excel (send report)', frequency: 'Weekly', externalLink: 'disabled', lastRun: '5 days ago', status: 'Enabled', isActive: true }
        ];
        const data = [];
        for (let i = 0; i < 5; i++) {
            const report = reports[i % reports.length];
            data.push({
                ...report,
                id: i,
            });
        }
        return data;
    }

    const navigate = useNavigate();

    const handleAddNewClick = () => {
        if (!upgraded) {
            setIsUpgradeModalOpen(true);
        } else {
            navigate('/report/addnew');
        }
    };

    return (
        <>
            <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                <div className="flex space-x-5 px-2 items-center text-[14px] text-[#fafafa]">
                    <p>Showing report from your database</p>
                </div>

                <div className="flex items-center text-[#a3a3a3] gap-3">
                    <FilterSelector/>
                    <Button className="flex items-center border bg-transparent text-[#a3a3a3] cursor-pointer border-[#a3a3a3] rounded-md gap-2 px-2 py-1 text-[14px]">
                        <FaPlus />
                        <p onClick={handleAddNewClick}>Add New Report</p>
                    </Button>
                </div>
            </div>

            <div className="flex flex-col bg-[#2d363d] rounded-lg p-3 mt-5 h-full">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                        <p className='text-[14px] font-semibold'>Report List</p>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <Searchbar />
                    </div>
                </div>
                <div className='flex overflow-scroll scrollbar mt-5 h-full'>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>

            <UpgradeModal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)} />
        </>
    );
};

export default ReportHome;
