import React from 'react'
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';

const Organization = () => {
    const { userRole } = useOutletContext();

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];


    return (
        <>

            <div className=" flex space-x-5 px-2 mb-8">
                {userRole === 'owner' && (
                    <p onClick={() => navigate('/organization/owner/dashboard')} className={`${pathname === 'owner' && 'text-white'} cursor-pointer`}>
                        Users
                    </p>
                )}
                {userRole === 'admin' && (
                    <p onClick={() => navigate('/organization/admin/dashboard')} className={`${pathname === 'admin' && 'text-white'} cursor-pointer`}>
                        Admin
                    </p>
                )}
            </div>

            <Outlet />

        </>
    )
}


export default Organization