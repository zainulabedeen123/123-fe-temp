import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import CustomTable from '../../CustomTable';

const KeywordTable = ({ array, type }) => {
    const isPaid = type === 'paid';
    const isOrganic = type === 'organic';

    const columns = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <span>Keyword</span>
                </div>
            ),
            field: 'keyword',
            sortable: true,
            render: (value) => (
                <div className="flex items-center gap-2">
                    <p>
                        stockx
                        <a href="https://stockx.com/" className='flex items-center gap-1'>
                            <FiExternalLink />
                            https://stockx.com/
                        </a>
                    </p>
                </div>
            ),
        },
        ...(isPaid ? [{
            label: 'Ad Copy',
            field: 'adCopy',
            sortable: true,
            render: () => (
                <span className="flex items-center">
                    <FiExternalLink className="mr-1" />
                    Ad Copy
                </span>
            ),
        }] : []),
        {
            label: 'Volume',
            field: 'volume',
            sortable: true,
        },
        ...(isOrganic ? [{
            label: 'Rank (Change)',
            field: 'rankChange',
            sortable: true,
        }] : []),
        ...(isOrganic ? [{
            label: 'SEO Clicks (Change)',
            field: 'seoClicksChange',
            sortable: true,
        }] : []),
        ...(isOrganic ? [{
            label: 'KD',
            field: 'kd',
            sortable: true,
        }] : []),
        ...(isPaid ? [{
            label: 'CPC (B)',
            field: 'cpc',
            sortable: true,
        }] : []),
        ...(isPaid ? [{
            label: 'Ads',
            field: 'ads',
            sortable: true,
        }] : []),
        ...(isPaid ? [{
            label: 'Paid Clicks',
            field: 'paidClicks',
            sortable: true,
        }] : []),
        ...(isPaid ? [{
            label: 'Mobile Searches',
            field: 'mobileSearches',
            sortable: true,
        }] : []),
        {
            label: '',
            field: 'actions',
            sortable: false,
            render: () => (
                <div>
                    <button className='text-white yellowBG px-2 py-0.5 rounded-sm text-xs inline-block'>Add</button>
                    <PiDotsThreeOutlineVerticalFill className='inline' />
                </div>
            ),
        },
    ];

    const data = array.map((item, index) => ({
        keyword: 'stockx',
        volume: '946k',
        rankChange: '1 -',
        seoClicksChange: '155k -',
        kd: '51',
        cpc: '$0.08',
        ads: '1',
        paidClicks: '26.7%',
        mobileSearches: '23.7%',
        actions: '',
    }));

    return (
        <div className='overflow-x-scroll scrollbar'>
            <CustomTable columns={columns} data={data} />
        </div>
    );
};

export default KeywordTable;
