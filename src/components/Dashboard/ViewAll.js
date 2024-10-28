import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import Top10CompetitorTable from './Top10CompetitorTable';
import CompetitiveProducts from './CompetitiveProducts';
import OverpricedProducts from './OverpricedProducts';
import Searchbar from '../Searchbar';
import { FiFilter } from 'react-icons/fi';
import MassiveActionSelector from './MassiveActionSelector';
import ExportSelector from './ExportSelector';
import FilterSelector from './FilterSelector';



const ViewAll = () => {

    const { state } = useLocation();
    const navigate = useNavigate()

    const [selectedAction, setSelectedAction] = useState("enable");
    const [selectedExport, setSelectedExport] = useState("csv");
    const [selectedFilter, setSelectedFilter] = useState("savedFilterSet");

    const [filterOpen, setFilterOpen] = useState(false)

    const handleFilterClick = () => {
        setFilterOpen(!filterOpen)
    }



    const [tableToggle, setTableToggle] = useState(1)

    const handleViewAllClick = () => {
        navigate('/');
    }

    return (
        <>

            <div className="px-2">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div className="flex items-center gap-2">
                        <p className='hover:underline cursor-pointer' onClick={handleViewAllClick}>Overview</p>
                        <FaAngleRight size={14} />
                        <p className='text-[#f3941d]'>{state.tablename}</p>
                    </div>

                    <div className="flex items-center text-[#a3a3a3] gap-3">

                        <FilterSelector
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                        />



                        <MassiveActionSelector
                            selectedAction={selectedAction}
                            setSelectedAction={setSelectedAction}
                        />

                        <ExportSelector
                            selectedExport={selectedExport}
                            setSelectedExport={setSelectedExport}
                        />

                    </div>

                </div>

            </div>

            <div className="bg-[#2d363d] rounded-2xl p-3 mt-5">

                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex space-x-5 text-[14px]">
                        <p onClick={() => navigate('/dashboard/view', { state: { tablename: 'Top 10 Competitors' } })} className={`${state.tablename === 'Top 10 Competitors' && 'text-white'} cursor-pointer`}>Top 10 Competitors</p>
                        <p onClick={() => navigate('/dashboard/view', { state: { tablename: 'Competitive Products' } })} className={`${state.tablename === 'Competitive Products' && 'text-white'} cursor-pointer`}>Competitive Products</p>
                        <p onClick={() => navigate('/dashboard/view', { state: { tablename: 'Overpriced Products' } })} className={`${state.tablename === 'Overpriced Products' && 'text-white'} cursor-pointer`}>Overpriced Products</p>
                    </div>

                    <div className="flex space-x-5 items-center">

                        <Searchbar />

                    </div>

                </div>



                <div className="relative overflow-x-auto mt-4 overflow-hidden">
                    <div className="overflow-y-scroll scrollbar h-[calc(100vh-352px)]">

                        {state.tablename === 'Top 10 Competitors' &&
                            <Top10CompetitorTable />
                        }
                        {state.tablename === 'Competitive Products' &&
                            <CompetitiveProducts />
                        }
                        {state.tablename === 'Overpriced Products' &&
                            <OverpricedProducts />
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default ViewAll