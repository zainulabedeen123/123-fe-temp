import React from 'react';
import CustomTable from '../CustomTable';

const OrganicCompetitorTable = ({ competitors }) => {
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
            label: 'Overlap',
            field: 'overlap',
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
            label: 'Number of Keywords',
            field: 'numberofKeywords',
            sortable: true
        },
        {
            label: 'Monthly Clicks',
            field: 'monthlyClicks',
            sortable: true
        },
        {
            label: 'Monthly Value of Clicks',
            field: 'monthlyValueOfClicks',
            sortable: true
        }
    ];

    return (
        <CustomTable columns={columns} data={competitors} />
    );
}

export default OrganicCompetitorTable;
