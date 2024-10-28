import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import { CiFilter } from 'react-icons/ci';
import Searchbar from '../Searchbar';
import OrderListPage from './OrderListPage';
import StockTable from './StockTable';
import SoldItems from './SoldItems';
import FilterSelector2 from './FilterSelector2';
import MassiveActionSelector from './MassiveActionSelector';
import ExportSelector from './ExportSelector';
import ColumnSelector from './ColumnSelector';
import FilterSelector1 from './FilterSelector1';

const ViewAllTable = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [selectedAction, setSelectedAction] = useState('')
    const [selectedExport, setSelectedExport] = useState('')

    const handleViewAllClick = () => {
        navigate('/dashboard/inventorymanagement');
    };

    return (
        <div className="h-full flex flex-col">
            <div className="px-2 flex-shrink-0">
                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex items-center gap-2">
                        <p className="hover:underline cursor-pointer" onClick={handleViewAllClick}>Overview</p>
                        <FaAngleRight size={14} />
                        <p className="text-[#f3941d]">{state ? state.tablename : 'Table'}</p>
                    </div>

                    {state.tablename === 'No. of Stock' &&
                        <div className='flex gap-2'>

                            <FilterSelector2 />
                            <ColumnSelector/>
                            <MassiveActionSelector selectedAction={selectedAction} setSelectedAction={setSelectedAction} />
                            <ExportSelector selectedExport={selectedExport} setSelectedExport={setSelectedExport}  />

                        </div>
                    }

                    {state.tablename === 'No. of Sold Items' &&
                        <div className='flex gap-2'>
                            <MassiveActionSelector selectedAction={selectedAction} setSelectedAction={setSelectedAction}/>
                            <ExportSelector selectedExport={selectedExport} setSelectedExport={setSelectedExport}  />

                        </div>
                    }

                </div>
            </div>
            <div className="relative flex-1 overflow-y-scroll scrollbar shadow-md rounded-2xl mt-4">
                <div className="bg-[#2d363d] rounded-2xl h-full flex flex-col">
                    <div className="flex justify-between p-3 items-center mb-2">
                        <p className="text-[14px]">{state ? state.tablename : 'Table'}</p>
                        <div className="flex items-center space-x-2">
                            <Searchbar />
                            {state.tablename === 'Purchased Order List' &&
                        <div className='flex gap-2'>
                            <FilterSelector1 />
                        </div>
                    }
                        </div>
                    </div>
                    <div className="flex h-full overflow-scroll scrollbar">
                        {state && state.tablename === 'Purchased Order List' && <OrderListPage />}
                        {state && state.tablename === 'No. of Stock' && <StockTable />}
                        {state && state.tablename === 'No. of Sold Items' && <SoldItems />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllTable;
