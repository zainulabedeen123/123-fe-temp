import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const ManageUsersHome = () => {

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];

    return (
        <>


            <div className="flex items-start justify-between sticky">
                <div className=" flex items-center space-x-5 px-2 mb-8 ">
                    <p onClick={() => navigate('/manageuser')} className={`${window.location.pathname === '/manageuser' && 'text-white'} cursor-pointer`}>Profile</p>
                    <p onClick={() => navigate('/manageuser/changepassword')} className={`${pathname === 'changepassword' && 'text-white'} cursor-pointer`}>Change Password</p>
                    {/* <p onClick={() => navigate('/manageuser/users')} className={`${pathname === 'users' && 'text-white'} cursor-pointer`}>Users</p>
                    <p onClick={() => navigate('/manageuser/admin')} className={`${pathname === 'admin' && 'text-white'} cursor-pointer`}>Admin</p> */}
                </div>
            </div>

            <Outlet />


        </>
    )
}

export default ManageUsersHome