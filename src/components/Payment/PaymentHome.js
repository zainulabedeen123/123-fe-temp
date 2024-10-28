import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const PaymentHome = () => {

    const navigate = useNavigate();

    const pathname = useLocation().pathname.split('/')[2];

    return (
        <>

                <div className="flex items-start justify-between sticky">
                    <div className=" flex items-center space-x-5 px-2 mb-8 ">
                        <p onClick={() => navigate('/payment')} className={`${window.location.pathname === '/payment' && 'text-white'} cursor-pointer`}>Billing</p>
                        <p onClick={() => navigate('/payment/plans')} className={`${pathname === 'plans' && 'text-white'} cursor-pointer`}>Plans</p>
                    </div>
                </div>

                <Outlet />

        </>
    )
}

export default PaymentHome