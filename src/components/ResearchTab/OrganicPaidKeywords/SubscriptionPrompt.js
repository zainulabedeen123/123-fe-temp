import React from 'react'
import { BsFunnelFill, BsFillHddStackFill } from 'react-icons/bs'
import { PiFileArrowDown } from 'react-icons/pi'

const SubscriptionPrompt = () => {
    return (
        <div className="pt-10">
            <h1 className='text-center text-2xl font-medium'>Want to view more results?</h1>
            <p className='text-center leading-none'>To view more data, subscribe to one of our plans.</p>
            <div className="w-3/5 mx-auto mt-10">
                <div className="flex gap-10">
                    <div className="flex flex-col items-center">
                        <BsFunnelFill size={60} />
                        <p className='text-center'>Advanced filtering and sorting options</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BsFillHddStackFill size={60} />
                        <p className='text-center'>Huge keyword database at your finger tips</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <PiFileArrowDown size={60} />
                        <p className='text-center'>Export data into an excel or csv file</p>
                    </div>
                </div>
                <div className='bg-[#fb0078] rounded-md text-white py-1 mx-auto text-center w-4/5 my-8'>See Plans and Pricing</div>
            </div>
        </div>
    )
}

export default SubscriptionPrompt
