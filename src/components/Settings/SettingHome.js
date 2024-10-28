import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const SettingHome = () => {

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];

    return (
        <>


            <div className="flex items-start justify-between sticky">
                <div className=" flex items-center space-x-5 px-2 mb-8 ">
                    <p onClick={() => navigate('/settings')} className={`${window.location.pathname === '/settings' && 'text-white'} cursor-pointer`}>General</p>
                    <p onClick={() => navigate('/settings/communicationprefrence')} className={`${pathname === 'communicationprefrence' && 'text-white'} cursor-pointer`}>Communication Prefrence</p>
                    <p onClick={() => navigate('/settings/APIkeys')} className={`${pathname === 'APIkeys' && 'text-white'} cursor-pointer`}>API Keys</p>
                </div>

                {pathname !== 'APIkeys' &&
                    <button className="flex items-center border border-[#A3A3A3] rounded-md gap-2 px-4 py-1 text-[12px] ml-auto">
                        <p>Save</p>
                    </button>
                }
            </div>

            <Outlet />


        </>
    )
}

export default SettingHome