import React, {useState} from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import MarketPlaceSelector from './MarketPlaceSelector';
import CountrySelector from './CountrySelector';

const AddNewMarketplace = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split('/')[2];

    const [selectedMP, setSelectedMP] = useState('Select a marketplace')
    const [selectedCountry, setSelectedCountry] = useState('Select country')

    const handleClick = () => {
        navigate('/competitors');
    };

    return (
        <div className=" flex flex-col">
            <div className="px-2 flex-shrink-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p className="hover:underline cursor-pointer" onClick={handleClick}>Competitors</p>
                        <FaAngleRight size={14} />
                        <p className="text-[#f3941d]"> Add Competitor</p>
                    </div>
                </div>
            </div>
            <div className="relative flex-1 overflow-y-scroll scrollbar shadow-md rounded-2xl mt-4">
                <div className="bg-[#2d363d] rounded-2xl h-full flex flex-col p-6">
                    <form className="space-y-4">
                        <div className='flex justify-between'>
                            <div className='flex-col'>
                                <h2 className="text-lg font-semibold mb-4">Add New Marketplace</h2>
                                <p className="text-[14px] mb-6">Choose the type of marketplace and the country you want to start monitoring</p>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-[#f3941d] h-[40px] text-white py-1 px-4 rounded-md">Save</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[16px] text-[#a3a3a3] mb-1">Select marketplace</label>
                            <span className='text-[14px]'>Select which marketplace you want to start monitoring</span>
                            <MarketPlaceSelector selectedMP={selectedMP} setSelectedMP={setSelectedMP} />
                        </div>
                        <div>
                            <label className="block text-[#a3a3a3] mb-2">Select Country</label>
                            <span className='text-[14px]'>Please select the marketplace's country</span>
                            <CountrySelector selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}  />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddNewMarketplace;
