import React from 'react'
import { LuCopy } from 'react-icons/lu'
import { RiFileCopy2Line, RiLock2Line } from 'react-icons/ri'

const SettingsAPIKeys = () => {
    return (
        <>
            <div className="bg-[#2d363d] rounded-lg p-5 pb-8 h-full">

                <div className="flex justify-between items-center">

                    <h1 className='text-white text-[16px]'>API Key</h1>

                    <p className='text-[#00fba0] text-[15px] underline'>Generate New Key</p>

                </div>

                <div className="bg-[#3a4249] border border-[#A4A4A4] flex items-center rounded-md p-1 space-x-2 px-3 my-5">

                    <input
                        type="text"
                        placeholder='Search'
                        className='bg-transparent outline-none  w-full'
                    />

                    <LuCopy />


                </div>

                <p className='my-2 gap-3 text-white flex items-center text-sm'><RiLock2Line className='text-[#fb0078]' size={20} /> Manage your API key like a password</p>

                <p className='text-[12px] leading-4'>
                    Anyone who has your REST API key will be able to send notifications from your app. Do not expose the REST API key in your application
                    code. Do not share it on GitHub or anywhere else online.
                </p>

                <div className="flex justify-between items-center mt-5">

                    <p className='text-[#00fba0] text-[15px] underline flex items-center gap-1'><RiFileCopy2Line className='rotate-180' size={18} />Our API docs</p>

                    <p className='text-[#00fba0] text-[15px] underline flex items-center gap-1'><RiFileCopy2Line className='rotate-180' size={18} />Postman Workspace</p>

                </div>

            </div>
        </>
    )
}

export default SettingsAPIKeys