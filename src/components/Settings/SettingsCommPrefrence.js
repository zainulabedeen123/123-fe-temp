import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const SettingsCommPrefrence = () => {

    return (
        <>
            <div className="bg-[#2d363d] rounded-lg p-5 pb-8 ">

                <h1 className='text-[#fafafa] text-sm'>Manage from this page the communications you receive from us</h1>

                <table className='mt-8 text-sm'>

                    <thead>
                        <tr className='text-[#fafafa]'>
                            <td></td>
                            <td>Email</td>
                            <td>Slack</td>
                            <td>WhatsApp</td>
                        </tr>
                    </thead>

                    <tbody className=''>

                        <tr>
                            <td>New features</td>
                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>

                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>

                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td>Marketing communications</td>
                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>

                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>

                            <td className='py-8'>
                                <label className="container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td>Reports</td>
                            <td className='py-8'>
                                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>
                        </tr>

                        <tr>
                            <td>Alerts</td>
                            <td className='py-8'>
                                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>
                        </tr>

                        <tr>
                            <td>Repricing</td>
                            <td className='py-8'>
                                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>

                            <td className='py-8 px-2'>
                                -
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default SettingsCommPrefrence