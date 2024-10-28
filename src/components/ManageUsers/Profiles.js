import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const Profiles = () => {
    return (
        <div className="bg-[#2d363d] rounded-lg p-5 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <h1 className="text-white text-[16px] mb-2">Personal Information</h1>
                    <p className="text-sm">Manage your Profiles</p>
                </div>
                <button className="yellowBG text-white w-fit text-[12px] rounded-md px-[20px] py-1 mt-3 md:mt-0">Edit Profile</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mt-8 text-white text-sm">
                <label htmlFor="name" className="col-span-1">
                    Name
                    <input type="text" id="name" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" placeholder="John" />
                </label>
                <label htmlFor="surname" className="col-span-1">
                    Surname
                    <input type="text" id="surname" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" placeholder="Doe" />
                </label>
                <label htmlFor="name" className="col-span-1">
                    <div className="flex justify-between items-center">
                        <span className="text-white">E-mail</span>
                        <span className="text-[#00FBA0] cursor-pointer">Change e-mail</span>
                    </div>
                    <input type="text" id="name" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" placeholder="john@email.com" />
                </label>
                <label htmlFor="surname" className="col-span-1">
                    Country
                    <input type="text" id="surname" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" placeholder="Netherland" />
                </label>
                <label htmlFor="address" className="col-span-1 sm:col-span-2">
                    Street Address
                    <input type="text" id="address" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
                <label htmlFor="city" className="col-span-1">
                    City
                    <input type="text" id="city" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
                <label htmlFor="state" className="col-span-1">
                    State/Province
                    <input type="text" id="state" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
                <label htmlFor="zip" className="col-span-1">
                    ZIP/Postal Code
                    <input type="text" id="zip" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
                <label htmlFor="phone" className="col-span-1">
                    Phone
                    <div className="flex items-center bg-[#3a4249] h-[40px] text-[#a3a3a3] rounded-md mt-2">
                        <div className="flex items-center gap-3 border-0 px-3 border-r  py-1 border-[#a3a3a3] text-sm h-full">+31 <FaAngleDown /></div>
                        <input type="text" id="phone" className="w-full outline-none bg-[#3a4249] text-sm px-3 py-1" />
                    </div>
                </label>
                <label htmlFor="company" className="col-span-1">
                    Company Name
                    <input type="text" id="company" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" placeholder="123 Scraper" />
                </label>
                <label htmlFor="tax" className="col-span-1">
                    Tax Vat
                    <input type="text" id="tax" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
                <label htmlFor="slack" className="col-span-1">
                    Connect Your Slack
                    <input type="text" id="slack" className="h-[40px] w-full mt-2 outline-none bg-[#3a4249] rounded-md px-3 py-1 text-sm" />
                </label>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10">
                <div>
                    <h1 className="text-white">Account Delete</h1>
                    <p className="text-sm">If you want to delete this account click this button</p>
                </div>
                <div className="w-fit text-sm rounded-md px-3 py-1 mt-3 md:mt-0 border border-[#a3a3a3]">Delete My Account</div>
            </div>
        </div>
    );
};

export default Profiles;
