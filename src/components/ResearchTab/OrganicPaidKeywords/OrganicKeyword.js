import React, { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import FilterToggle from './FilterToggle';
import OrganicFilters from './OrganicFilters';
import Topics from './Topics';
import StatsHeader from './StatsHeader';
import KeywordTable from './KeywordTable';
import SubscriptionPrompt from './SubscriptionPrompt';
import { FaAngleDown } from 'react-icons/fa';

const OrganicKeyword = () => {
    const [filterToggle, setFilterToggle] = useState('filters');
    const [yourObject, setYourObject] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

    const setKeyToOne = (key) => {
        setYourObject(prevState => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(k => {
                newState[k] = (k === key) ? (newState[k] === 1 ? 0 : 1) : 0;
            });
            return newState;
        });
    };

    const options = [{ value: 'Group By: Search Volume', label: 'Group By: Search Volume' }, { value: 'Group By: Search Count', label: 'Group By: Search Count' }];
    const customStyles = {
        option: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
                backgroundColor: 'lightgray',
                color: 'black'
            },
        }),
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <>
            <div className="">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <Breadcrumbs />
                    <div className="flex items-center text-[#a3a3a3] gap-3 text-sm sm:text-base">
                        <div className="relative">
                            <select className="appearance-none bg-transparent border border-[#fafafa] rounded-md gap-2 px-2 py-1 pr-8">
                                <option>Most Valuable Keywords</option>
                                <option>Least Valuable Keywords</option>
                                <option>Alphabetical</option>
                            </select>
                            <FaAngleDown className='absolute top-1/2 right-2 transform -translate-y-1/2 text-[#a3a3a3]' />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-transparent border border-[#fafafa] rounded-md gap-2 px-2 py-1 pr-8">
                                <option>Columns</option>
                                <option>Column 1</option>
                                <option>Column 2</option>
                                <option>Column 3</option>
                            </select>
                            <FaAngleDown className='absolute top-1/2 right-2 transform -translate-y-1/2 text-[#a3a3a3]' />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-transparent border border-[#fafafa] rounded-md gap-2 px-2 py-1 pr-8">
                                <option>Export All</option>
                                <option>Export Selected</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-8 gap-4 ">
                <div className="col-span-2 md:col-span-1 bg-[#2d363d] rounded-2xl overflow-hidden">
                    <FilterToggle filterToggle={filterToggle} setFilterToggle={setFilterToggle} />
                    <div className="overflow-y-scroll h-[430px] text-[12px] scrollbar">
                        {filterToggle === 'filters' ? <OrganicFilters /> : <Topics options={options} customStyles={customStyles} yourObject={yourObject} setKeyToOne={setKeyToOne} />}
                    </div>
                </div>
                <div className="col-span-2 md:col-span-3 bg-[#2d363d] rounded-2xl">
                    <div className="overflow-y-scroll scrollbar h-[460px]">
                        <StatsHeader type="organic" />
                        <div className="overflow-hidden no-scrollbar">
                            <div className="overflow-scroll h-[350px] no-scrollbar">
                                <KeywordTable array={array} type="organic" />
                            </div>
                        </div>
                        <SubscriptionPrompt />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrganicKeyword;
