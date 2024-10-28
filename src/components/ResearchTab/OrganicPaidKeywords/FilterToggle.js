import React from 'react'

const FilterToggle = ({ filterToggle, setFilterToggle }) => {
    return (
        <div className=" flex text-[14px] font-medium border-0 border-b border-[#4e4e4e] sticky">
            <div onClick={() => setFilterToggle('filters')} className={`w-1/2 text-center cursor-pointer ${filterToggle === 'filters' && 'text-[#fafafa] bg-[#3a4249]'} rounded-tl-2xl px-3 py-2`}>
                Filters
            </div>
            <div onClick={() => setFilterToggle('topics')} className={`w-1/2 text-center cursor-pointer ${filterToggle === 'topics' && 'text-[#fafafa] bg-[#3a4249]'} rounded-tr-2xl px-3 py-2`}>
                Topics
            </div>
        </div>
    )
}

export default FilterToggle
