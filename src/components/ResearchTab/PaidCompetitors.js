import React, { useState } from 'react';
import { FaAngleRight, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import PaidCompetitorMenu from './PaidCompetitorMenu';
import CompetitorGraph from './CompetitorGraph';
import PaidCompetitorTable from './PaidCompetitorTable';
import SubscriptionPrompt from './OrganicPaidKeywords/SubscriptionPrompt';
import ExportSelector from './ExportSelector';

const initialCompetitors = [
    { domain: 'stockx.com', status: 0, commonKeywords: '-', monthlyPaidKeywords: '2.02M', monthlyPaidClicks: '170k', monthlyAdBudget: '$92.5k', color: '#FA0078', data: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
    { domain: 'goat.com', status: 75, commonKeywords: '311k', monthlyPaidKeywords: '730K', monthlyPaidClicks: '122k', monthlyAdBudget: '$79.2k', color: '#00FBA0', data: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
    { domain: 'kickscrew.com', status: 60, commonKeywords: '300k', monthlyPaidKeywords: '504K', monthlyPaidClicks: 0, monthlyAdBudget: '$0.00', color: '#EB7301', data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { domain: 'flightclub.com', status: 50, commonKeywords: '222k', monthlyPaidKeywords: '396K', monthlyPaidClicks: 0, monthlyAdBudget: '$0.00', color: '#9134DB', data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { domain: 'sneakernews.com', status: 50, commonKeywords: '208k', monthlyPaidKeywords: '396K', monthlyPaidClicks: 0, monthlyAdBudget: '$0.00', color: '#0B97B6', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];

const PaidCompetitors = () => {
    const [competitors, setCompetitors] = useState(initialCompetitors);
    const [selectedCompetitors, setSelectedCompetitors] = useState(initialCompetitors.map(comp => comp.domain));

    const toggleCompetitor = (domain) => {
        setSelectedCompetitors(prevSelected =>
            prevSelected.includes(domain) ? prevSelected.filter(item => item !== domain) : [...prevSelected, domain]
        );
    };

    return (
        <div className="px-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/dashboard/research" className="hover:underline">Research</Link>
                    <FaAngleRight size={14} />
                    <p className='text-[#f3941d]'>Paid Competitors</p>
                </div>
                <div className="flex items-center text-[12px] text-[#a3a3a3] gap-3">
                    <Link to="/dashboard/research/organiccompetitors" className="flex text-[12px] border border-[#a3a3a3] rounded-md gap-2 px-2 h-[40px] items-center">
                        <p>View SEO Competitors</p>
                    </Link>
                    <ExportSelector/>
                </div>
            </div>

            <div className="bg-[#2d363d] rounded-2xl h-full p-3 pb-5 my-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-white">
                        <div className="yellowBG px-3 py-1 rounded-md border border-yellow-500 text-[12px]">
                            <p className='flex items-center justify-between'>
                                <span>View PPC Keywords</span>
                            </p>
                        </div>
                        <div className="px-3 py-1 rounded-md border border-yellow-500 text-[12px]">
                            <p className='flex items-center justify-between'>
                                <span>View Monthly Clicks</span>
                            </p>
                        </div>
                        <div className="px-3 py-1 rounded-md border border-yellow-500 text-[12px]">
                            <p className='flex items-center justify-between'>
                                <span>View Monthly Value</span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#3a4249] flex items-center rounded-md">
                        <Searchbar />
                        <div className="ml-auto flex items-center text-sm gap-1 h-[40px] p-1 px-2 bg-[#fb0078] rounded-tr-md rounded-br-md text-white">
                            <FaPlus /> Add
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-3">
                    <PaidCompetitorMenu competitors={initialCompetitors} selectedCompetitors={selectedCompetitors} toggleCompetitor={toggleCompetitor} />
                    <CompetitorGraph competitors={competitors.filter(comp => selectedCompetitors.includes(comp.domain))} />
                </div>
            </div>

            <div className="w-full bg-[#2d363d] rounded-2xl">
                <div className="overflow-y-scroll scrollbar">
                    <PaidCompetitorTable competitors={initialCompetitors} />
                </div>
                <div className="overflow-hidden">
                    <SubscriptionPrompt />
                </div>
            </div>
        </div>
    );
}

export default PaidCompetitors;
