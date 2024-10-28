import React, { useState } from 'react';
import './styles.css';
import TrendingSelector from './TrendingSelector';
import AllCategoriesSelector from './AllcategoriesSelector';

const FilterOptions = () => {
  const [selectedSort, setSelectedSort] = useState('Trending');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedField, setSelectedField] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  const handleSortSelection = (key) => {
    setSelectedSort(Array.from(key)[0]);
    setIsOpen(true); // Keep the select component open
  };

  const handleFilterSelection = (key) => {
    setSelectedFilter(Array.from(key)[0]);
    setIsOpen(false); // Close the select component
  };

  return (
    <div className='w-full h-[70px] text-[#fafafa] text-[14px] rounded bg-[#252D33] flex items-center justify-start gap-4 px-4 overflow-x-scroll scrollbar'>
      <div>Showing</div>
      <div>
        <TrendingSelector
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className='whitespace-nowrap'>Posts in</div>
      <AllCategoriesSelector selectedField={selectedField} setSelectedField={setSelectedField}/>
    </div>
  );
};

export default FilterOptions;
