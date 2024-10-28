import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import MassiveActionSelector2 from '../components/Repricing/MassiveActionSelector2';
import MassiveActionSelector1 from '../components/Repricing/MassiveActionSelector1';
import { FaAngleDown, FaPlus } from 'react-icons/fa6';
import { Button } from '@nextui-org/react';
import FilterSelector from '../components/Repricing/FilterSelector';
import ExportSelector from '../components/Repricing/ExportSelector';



const RepricingHome = () => {

    const [selectedRuleName, setSelectedRuleName] = useState("Select an option");
    const [selectedReseller, setSelectedReseller] = useState("Select a reseller");
    const [selectedMAP, setSelectedMAP] = useState("Select an option");
    const [selectedStatus, setSelectedStatus] = useState("Select an option");
    const [selectedExport, setSelectedExport] = useState('Import')

    const navigate = useNavigate();

    const handleAddRepricingRule = () => {
        navigate('/repricing/create');
    };

    const [selectedAction, setSelectedAction] = useState('')
    const [selectedAction2, setSelectedAction2] = useState('')
    const [selectedAction3, setSelectedAction3] = useState('')

    const pathname = useLocation().pathname.split('/')[2];
    console.log(pathname)

    const renderCustomButton = () => {
        switch (pathname) {
            case '':
                return (
                    <div className="flex items-center text-[#a3a3a3] gap-3">
                        <MassiveActionSelector1 selectedAction={selectedAction} setSelectedAction={setSelectedAction} />
                        <Button onClick={handleAddRepricingRule} className="flex items-center border border-[#a3a3a3] bg-transparent text-[#a3a3a3] rounded-md gap-2 px-2 py-1 text-[14px]">
                            <FaPlus />
                            <p>Add Repricing Rule</p>
                        </Button>
                    </div>
                )
            case 'repricingoverview':
                return (
                    <div className="flex items-center text-[#a3a3a3] gap-3">
                        <FilterSelector selectedRuleName={selectedRuleName} setSelectedRuleName={setSelectedRuleName} selectedReseller={selectedReseller} setSelectedReseller={setSelectedReseller} selectedMAP={selectedMAP} setSelectedMAP={setSelectedMAP} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                        <MassiveActionSelector2 selectedAction={selectedAction2} setSelectedAction={setSelectedAction2} />
                    </div>
                )
            case 'repricinghistory':
                return (
                    <div className="flex items-center text-[#a3a3a3] gap-3">
                        <ExportSelector selectedExport={selectedExport} setSelectedExport={setSelectedExport} />
                        <MassiveActionSelector2 selectedAction={selectedAction3} setSelectedAction={setSelectedAction3} />
                    </div>
                )
            default:
                return (
                    <div className="flex items-center text-[#a3a3a3] gap-3">
                        <MassiveActionSelector1 selectedAction={selectedAction} setSelectedAction={setSelectedAction} />
                        <Button onClick={handleAddRepricingRule} className="flex items-center border border-[#a3a3a3] bg-transparent text-[#a3a3a3] rounded-md gap-2 px-2 py-1 text-[14px]">
                            <FaPlus />
                            <p>Add Repricing Rule</p>
                        </Button>
                    </div>
                )
        }
    };

    return (
        <>


            <div className="flex items-center justify-between mb-8 flex-wrap-reverse gap-4">

                <div className=" flex space-x-5 px-2 items-center">
                    <p onClick={() => navigate('/repricing')} className={`${window.location.pathname === '/repricing' && 'text-white'} cursor-pointer whitespace-nowrap text-sm md:text-base`}>My Repricing Rules</p>
                    <p onClick={() => navigate('/repricing/repricingoverview')} className={`${pathname === 'repricingoverview' && 'text-white'} cursor-pointer whitespace-nowrap text-sm md:text-base`}>Repricing Overview</p>
                    <p onClick={() => navigate('/repricing/repricinghistory')} className={`${pathname === 'repricinghistory' && 'text-white'} cursor-pointer whitespace-nowrap text-sm md:text-base`}>Repricing History</p>
                </div>

                {renderCustomButton()}


            </div>

            <Outlet />


        </>
    )
}

export default RepricingHome