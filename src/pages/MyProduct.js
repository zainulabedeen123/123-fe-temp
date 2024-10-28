import React, {useState} from 'react';
import Searchbar from '../components/Searchbar';
import ProductInfo from '../components/MyProduct/ProductInfo';
import CompetitorTable from '../components/MyProduct/CompetitorTable';
import { FaAngleDown } from 'react-icons/fa';
import MassiveActionSelector from '../components/MyProduct/MassiveActionSelector';
import ExportSelector from '../components/MyProduct/ExportSelector';

const MyProduct = () => {
    const [selectedAction, setSelectedAction] = useState('')
    const [selectedExport, setSelectedExport] = useState('')
    return (<>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex space-x-5 px-2 items-center text-sm text-[#fafafa]">
                <p>My Product Collection</p>
            </div>
            <div className="flex items-center  gap-3 mt-4 md:mt-0">
                <MassiveActionSelector selectedAction={selectedAction} setSelectedAction ={setSelectedAction}  />
                <ExportSelector selectedExport={selectedExport} setSelectedExport ={setSelectedExport} />
            </div>
        </div>
        <div className="">
            <div className="bg-[#2d363d] rounded-md p-5">
                <p className='mb-5 text-sm'>Please enter a page of your competitor's store which contains product information</p>
                <div className=' mb-[40px]'>
                    <Searchbar/>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    <ProductInfo />
                    <CompetitorTable />
                </div>
            </div>
        </div>
    </>
    );
};

export default MyProduct;
