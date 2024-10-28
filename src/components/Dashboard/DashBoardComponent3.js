import React, { useState } from 'react'
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import Top10CompetitorTable from './Top10CompetitorTable';
import CompetitiveProducts from './CompetitiveProducts';
import OverpricedProducts from './OverpricedProducts';
import Searchbar from '../Searchbar';

const DashBoardComponent3 = ({ setDragging }) => {

    const navigate = useNavigate();

    const [tableToggle, setTableToggle] = useState(1)


    return (
        <>
            <div className="bg-[#2d363d] rounded-2xl p-3  overflow-x-scroll scrollbar">

                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex space-x-3">
                        <p onClick={() => setTableToggle(1)} className={`${tableToggle === 1 && 'text-white'} cursor-pointer text-[14px]`}>Top 10 Competitors</p>
                        <p onClick={() => setTableToggle(2)} className={`${tableToggle === 2 && 'text-white'} cursor-pointer text-[14px]`}>Competitive Products</p>
                        <p onClick={() => setTableToggle(3)} className={`${tableToggle === 3 && 'text-white'} cursor-pointer text-[14px]`}>Overpriced Products</p>
                    </div>

                    <div className="flex space-x-5 items-center justify-between w-full lg:w-fit">
                        <Searchbar />
                        <PiDotsSixVerticalBold className='' onMouseEnter={() => setDragging(true)} onMouseLeave={() => setDragging(false)} />
                    </div>

                </div>



                <div className="relative  overflow-x-scroll scrollbar mt-5">
                    <div className="overflow-y-scroll h-[300px] scrollbar">
                        {tableToggle === 1 &&
                            <Top10CompetitorTable />
                        }
                        {tableToggle === 2 &&
                            <CompetitiveProducts />
                        }
                        {tableToggle === 3 &&
                            <OverpricedProducts />
                        }
                    </div>
                </div>

                <div onClick={() => navigate('/dashboard/view', { state: { tablename: tableToggle === 1 ? 'Top 10 Competitors' : tableToggle === 2 ? 'Competitive Products' : 'Overpriced Products' } })} className="text-right mt-2 cursor-pointer viewAllBg w-fit ml-auto">View all</div>
            </div>
        </>
    )
}

export default DashBoardComponent3