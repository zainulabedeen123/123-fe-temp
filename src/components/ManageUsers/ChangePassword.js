import React from 'react'
import { FiEyeOff } from "react-icons/fi";

const ChangePassword = () => {
    return (
        <>
            <div className="bg-[#2d363d] rounded-lg p-5 pb-8 ">

                <div className="flex items-start justify-between">

                    <div className="">
                        <h1 className='text-[#fafafa] text-[16px] mb-1'>Password</h1>
                        <p className='text-sm'>Use this section to change or update your password</p>
                    </div>

                    <button className='yellowBG text-white w-fit text-[12px] rounded-md px-[20px] py-1 mr-3'>Change Password</button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-5 mt-8 mb-5 text-white">

                    <label htmlFor="" className='col-span-1'>
                        Old Password

                        <div className="flex items-center text-[#a3a3a3] bg-[#3a4249] rounded-md mt-2 px-3 py-1 w-full">
                            <input type="password" className='w-full outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm' placeholder='' />
                            <FiEyeOff />
                        </div>
                    </label>

                    <label htmlFor="" className='col-span-1'>
                        New Password

                        <div className="flex items-center text-[#a3a3a3] bg-[#3a4249] rounded-md mt-2 px-3 py-1">
                            <input type="password" className='w-full outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm' placeholder='' />
                            <FiEyeOff />
                        </div>
                    </label>

                    <label htmlFor="" className='col-span-1'>
                        Confirm Password

                        <div className=" flex items-center text-[#a3a3a3] bg-[#3a4249] rounded-md mt-2 px-3 py-1">
                            <input type="password" className='w-full outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm' placeholder='' />
                            <FiEyeOff />
                        </div>
                    </label>

                </div>

            </div>
        </>
    )
}

export default ChangePassword