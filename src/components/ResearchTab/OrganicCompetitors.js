import React, { useState } from 'react';
import { FaAngleRight, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import OrganicCompetitorMenu from './OrganicCompetitorMenu';
import CompetitorGraph from './CompetitorGraph';
import OrganicCompetitorTable from './OrganicCompetitorTable';
import SubscriptionPrompt from './OrganicPaidKeywords/SubscriptionPrompt';
import ExportSelector from './ExportSelector';

const initialCompetitors = [
    { domain: 'stockx.com', overlap: 0, commonKeywords: '-', numberofKeywords: '2M', monthlyClicks: '3.61M', monthlyValueOfClicks: '$911k', color: '#FA0078', data: [20, 21, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { domain: 'virtueplug.store', overlap: 100, commonKeywords: 1, numberofKeywords: '923k', monthlyClicks: '1.63M', monthlyValueOfClicks: '$322k', color: '#00FBA0', data: [9, 2, 1, 3, 4, 4, 6, 7, 9, 9, 10, 10] },
    { domain: 'kickpredict.co', overlap: 50, commonKeywords: 2, numberofKeywords: '779k', monthlyClicks: '783k', monthlyValueOfClicks: '$300k', color: '#EB7301', data: [8, 2, 8, 3, 4, 9, 6, 7, 8, 9, 9, 11] },
    { domain: 'alias.org', overlap: 70, commonKeywords: 4, numberofKeywords: '530k', monthlyClicks: '863k', monthlyValueOfClicks: '$122k', color: '#9134DB', data: [7, 8, 5, 7, 8, 7, 6, 7, 8, 7, 8, 15] },
    { domain: 'goat.com', overlap: 100, commonKeywords: 4, numberofKeywords: '532k', monthlyClicks: '329k', monthlyValueOfClicks: '$134k', color: '#0B97B6', data: [6, 3, 9, 3, 1, 5, 6, 7, 8, 9, 7, 7] },
];

const OrganicCompetitors = () => {
    const [competitors, setCompetitors] = useState(initialCompetitors);
    const [selectedCompetitors, setSelectedCompetitors] = useState(competitors.map(competitor => competitor.domain));

    const toggleCompetitor = (domain) => {
        setSelectedCompetitors(prevSelected =>
            prevSelected.includes(domain)
                ? prevSelected.filter(comp => comp !== domain)
                : [...prevSelected, domain]
        );
    };

    return (
        <div className="px-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/dashboard/research" className="hover:underline">Research</Link>
                    <FaAngleRight size={14} />
                    <p className='text-[#f3941d]'>Organic Competitors</p>
                </div>
                <div className="flex items-center text-[12px] text-[#a3a3a3] gap-3">
                    <Link to="/dashboard/research/paidcompetitors" className="flex text-[12px] border border-[#a3a3a3] rounded-md gap-2 px-2 items-center h-[40px]">
                        <p>View PPC Competitors</p>
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
                    <OrganicCompetitorMenu
                        competitors={initialCompetitors}
                        selectedCompetitors={selectedCompetitors}
                        toggleCompetitor={toggleCompetitor}
                    />
                    <CompetitorGraph competitors={competitors.filter(comp => selectedCompetitors.includes(comp.domain))} />
                </div>
            </div>
            <div className="w-full bg-[#2d363d] rounded-2xl">
                <div className="overflow-y-scroll scrollbar">
                    <OrganicCompetitorTable competitors={initialCompetitors} />
                </div>
                <div className="overflow-hidden">
                    <SubscriptionPrompt />
                </div>
            </div>
        </div>
    );
}

export default OrganicCompetitors;
