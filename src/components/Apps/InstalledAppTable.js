import React from 'react';
import CustomTable from '../CustomTable';

const InstalledAppTable = ({ apps, toggleAppStatus }) => {
    const columns = [
        {
            label: 'App Name',
            field: 'appName',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <span>{value}</span>
                </div>
            ),
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row) => (
                <div className={`flex items-center rounded-full ${row.isActive ? 'text-[#00b62a] bg-[#28433b]' : 'text-[#fc0479] bg-[#423143]'} w-fit px-3 py-1`}>
                    <span>{value}</span>
                </div>
            ),
        },
        {
            label: 'Action',
            field: 'action',
            sortable: false,
            render: (value, row, index) => (
                <button
                    className={` px-5 py-1 rounded-md text-[12px] w-[90px] ${row.actionText === 'Buy Now' ? 'yellowBG text-white' : `border border-${row.actionColor} text-${row.actionColor} bg-transparent`} font-thin`}
                    onClick={() => toggleAppStatus(index)}
                >
                    {row.actionText}
                </button>
            ),
        },
    ];

    return <CustomTable columns={columns} data={apps} />;
};

export default InstalledAppTable;
