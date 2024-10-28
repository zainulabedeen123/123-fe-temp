import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    return (
        <div className="bg-[#a4a4a4] bg-opacity-5 lg:w-full h-[42px] p-[8px] text-[14px] flex items-center rounded-lg max:w-[270px] flex-1">
            <FaSearch className=" ml-2 mr-3" />
            <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="Search"
            />
            <p className='mr-2 ml-3'>⌘/</p>
        </div>
    )
}

export default Searchbar