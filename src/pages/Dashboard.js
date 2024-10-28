import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];


    return (
        <>

                <div className=" flex items-center justify-between sm:justify-normal sm:space-x-5 px-2 mb-8 gap-2 text-sm sm:text-base">
                    <p onClick={() => navigate('/')} className={`${window.location.pathname === '/' && 'text-white'} cursor-pointer`}>Overview</p>
                    <p onClick={() => navigate('/dashboard/research')} className={`${pathname === 'research' && 'text-white'} cursor-pointer`}>Research</p>
                    <p onClick={() => navigate('/dashboard/inventorymanagement')} className={`${pathname === 'inventorymanagement' && 'text-white'} cursor-pointer`}>Inventory Management</p>
                </div>

                <Outlet />

        </>
    )
}

export default Dashboard