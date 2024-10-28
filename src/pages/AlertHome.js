import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AlertHome = () => {

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];

    return (
        <div className=''>
            <div className="flex items-center justify-between mb-8 flex-wrap-reverse gap-4">

                <div className=" flex space-x-5 px-2 items-center">
                    <p onClick={() => navigate('/alert')} className={`${window.location.pathname === '/alert' && 'text-white'} cursor-pointer`}>Alert Rule</p>
                    <p onClick={() => navigate('/alert/pricealert')} className={`${pathname === 'pricealert' && 'text-white'} cursor-pointer`}>Price Alert</p>
                    <p onClick={() => navigate('/alert/inevntoryalert')} className={`${pathname === 'inevntoryalert' && 'text-white'} cursor-pointer`}>Inventory Alert</p>
                    <p onClick={() => navigate('/alert/researchalert')} className={`${pathname === 'researchalert' && 'text-white'} cursor-pointer`}>Research Alert</p>
                </div>

                {window.location.pathname !== '/alert' &&
                    <div className="flex items-center border border-[#fafafa] rounded-md gap-2 px-2 py-1 text-sm ml-auto">
                        <p>Save</p>
                    </div>
                }

            </div>

                <Outlet />
                
        </div>
    )
}

export default AlertHome