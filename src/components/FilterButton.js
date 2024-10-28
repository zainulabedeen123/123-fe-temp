import React from 'react';
import { FiFilter } from 'react-icons/fi';

const FilterButton = () => (
    <button className="flex items-center px-2 py-1 rounded-md bg-transparent border border-[#a3a3a3]">
        <span className="mr-2">Filters</span>
        <FiFilter />
    </button>
);

export default FilterButton;
