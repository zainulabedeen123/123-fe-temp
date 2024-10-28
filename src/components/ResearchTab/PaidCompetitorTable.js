import React from 'react';
import CustomTable from '../CustomTable';

const PaidCompetitorTable = ({ competitors }) => {
    const columns = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <span>Domain</span>
                </div>
            ),
            field: 'domain',
            sortable: true,
            render: (value, row, index) => (
                <div className="flex items-center p-2 gap-2">
                    <p>{value}</p>
                </div>
            )
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value) => (
                <div className="w-full bg-gray-700 h-3 p-[3px]">
                    <div className="h-full" style={{ width: `${value}%`, backgroundColor: '#00FBA0' }}></div>
                </div>
            )
        },
        {
            label: 'Common Keywords',
            field: 'commonKeywords',
            sortable: true
        },
        {
            label: 'Monthly Paid Keywords',
            field: 'monthlyPaidKeywords',
            sortable: true
        },
        {
            label: 'Monthly Paid Clicks',
            field: 'monthlyPaidClicks',
            sortable: true
        },
        {
            label: 'Monthly Ad Budget',
            field: 'monthlyAdBudget',
            sortable: true
        },
        {
            label: '',
            field: 'actions',
            sortable: false,
            render: (value, row, index) => (
                <button className='text-white yellowBG px-2 py-0.5 rounded-sm text-xs inline-block'>Add</button>
            )
        }
    ];

    return (
        <CustomTable columns={columns} data={competitors} />
    );
};

export default PaidCompetitorTable;
