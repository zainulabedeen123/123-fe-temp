import React from 'react'
import Select from 'react-select'
import { MdArrowForwardIos } from 'react-icons/md'

const Topics = ({ options, customStyles, yourObject, setKeyToOne }) => {
    return (
        <>
            <div className="py-5 px-3">
                <Select options={options} className='w-full' styles={customStyles} />
            </div>
            <div className="border-0 border-b border-t border-[#4e4e4e] text-center py-3 font-medium text-sm">
                All Keyword
            </div>
            <div className="">
                {Object.keys(yourObject).map((element, index) => (
                    <div className="w-full border-0 border-b border-[#4e4e4e] p-3" key={index}>
                        <button onClick={() => setKeyToOne(index.toString())} className="flex items-center justify-between w-full" >
                            <span className='flex items-center gap-2'><MdArrowForwardIos style={{ rotate: yourObject[index] === 1 ? '90deg' : '0deg', transition: 'all 0.5s ease' }} /> nike</span>
                            <span>7.24am</span>
                        </button>
                        <div className={`mt-1`} style={{ display: yourObject[index] === 1 ? 'block' : 'none', transition: 'all 0.5s ease' }}>
                            {/* Keyword details */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="border border-[#4e4e4e] rounded-lg text-center mx-3 mb-8 mt-3 flex items-center text-sm justify-center gap-2 text-white py-2">
                <MdArrowForwardIos className='rotate-90' size={16} /> View All Topics
            </div>
        </>
    )
}

export default Topics
