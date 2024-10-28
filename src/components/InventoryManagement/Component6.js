import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import OrderListPage from './OrderListPage';
import Searchbar from '../Searchbar';
import { useNavigate } from 'react-router-dom';
import FilterSelector1 from './FilterSelector1';


const Component6 = ({ setDragging }) => {

    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/dashboard/inventorymanagement/table', { state: { tablename: 'Purchased Order List' } });
    }
    return (
        <div className="bg-[#2d363d] rounded-2xl h-full flex flex-col relative">
            <PiDotsSixVerticalBold
                className="text-[#a3a3a3] absolute top-2 right-2"
                size={20}
                onMouseEnter={() => setDragging(true)}
                onMouseLeave={() => setDragging(false)}
            />
            <div className="flex justify-between p-3 items-center mb-2 flex-wrap-reverse gap-4 mr-6">
                <p className="text-[14px]">Purchased Order List</p>
                <div className="flex items-center space-x-2">
                    {/* <div className='flex flex-1'> */}
                    <Searchbar />
                    {/* </div> */}
                    <div className="flex items-center gap-2">
                        <FilterSelector1 />
                    </div>
                </div>
            </div>
            <div className="flex h-full overflow-scroll scrollbar">
                <OrderListPage />
            </div>
            <button onClick={handleViewAllClick} className="text-right m-3 cursor-pointer yellowBG text-white px-2 rounded-md py-1 text-sm w-fit ml-auto">View all</button>

        </div>
    );
};

export default Component6;
