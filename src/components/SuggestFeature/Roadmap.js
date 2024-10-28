import React from 'react';
import BoardFeature from './BoardFeature';
import Searchbar from '../Searchbar';
import Planned from './Planned';
import InProgress from './InProgress';
import Complete from './Complete';
import FilterMenu from './FilterMenu';

const Roadmap = () => {
    const requests = [
        { title: "Price comparison Websites", category: "FEATURES REQUESTS", count: 1 },
        { title: "Use Google Shopping XML file to import and automatically update own pricing", category: "FEATURES REQUESTS", count: 1 },
        { title: "Ability to add user to the account", category: "FEATURES REQUESTS", count: 4 },
        { title: "Missing Data fields in the export records", category: "FEATURES REQUESTS", count: 1 },
        { title: "Export all competitor prices on one report", category: "FEATURES REQUESTS", count: 2 },
        { title: "Scraping time in overviews", category: "FEATURES REQUESTS", count: 1 }
    ];

    return (
        <div className="min-h-screen">
            <Searchbar />
            <BoardFeature />
            <div className="rounded-2xl bg-[#2D363D] px-[25px] py-[30px]">
                <div className='flex justify-between items-center mb-[25px]'>
                    <h2 className="flex text-[16px] text-[#fafafa] font-medium">Roadmap</h2>
                    <FilterMenu />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                    <Planned />
                    <InProgress />
                    <Complete requests={requests} />
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
