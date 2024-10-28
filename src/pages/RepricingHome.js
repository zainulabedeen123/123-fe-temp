import React, { useState } from 'react'
i
    };

    const [selectedAction, setSelectedAction] = useState('')
    const [selectedAction2, setSelectedAction2] = useState('')
    const [selectedAc
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
                      

    return (
        <>


            <div className="flex items-center justify-between mb-8 flex-wrap-reverse gap-4">

            </div>

            <Outlet />


        </>
    )
}

export default RepricingHome
