import React from 'react';
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import './TrendingSelector.css'

const TrendingSelector = ({
  selectedSort,
  setSelectedSort,
  selectedFilter,
  setSelectedFilter,
  isOpen,
  setIsOpen
}) => {

  const handleSortSelection = (key) => {
    setSelectedSort(Array.from(key)[0]);
    setIsOpen(true); // Keep the select component open
  };

  const handleFilterSelection = (key) => {
    setSelectedFilter(Array.from(key)[0]);
    setIsOpen(false); // Close the select component
  };

  return (
    <Select
      selectedKeys={[selectedSort]}
      onSelectionChange={handleSortSelection}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      classNames={{
        base: "w-[120px] text-[#a3a3a3]",
        trigger: "bg-transparent text-[#fafafa]",
        listbox: "bg-[#1E252B] text-[#a3a3a3] trending-selector",
        helperWrapper: "text-white",
        popoverContent: "bg-[#1E252B] text-[#a3a3a3] min-w-[220px] custom-listbox",
        innerWrapper: "text-[#a3a3a3]",
        value: "font-semi text-[#fafafa] text-[14px]",
      }}
      aria-label="Field Selector"
      renderValue={() => selectedSort}
      placeholder='Trending'
    >
      <SelectSection title="">
        <SelectItem key="Sort" className='text-[#ffffff] opacity-100'>Sort</SelectItem>
        <SelectItem key="Trending" className='' onPress={() => handleSortSelection("Trending")}>Trending</SelectItem>
        <SelectItem key="Top" className='' onPress={() => handleSortSelection("Top")}>Top</SelectItem>
        <SelectItem key="New" className='' onPress={() => handleSortSelection("New")}>New</SelectItem>
      </SelectSection>
      <SelectSection title="">
        <SelectItem key="Filter" className='text-[#ffffff] opacity-100' onPress={() => handleFilterSelection("Filter")}>Filter</SelectItem>
        <SelectItem key="Under Review" className='' onPress={() => handleFilterSelection("Under Review")}>Under Review</SelectItem>
        <SelectItem key="Planned" className='' onPress={() => handleFilterSelection("Planned")}>Planned</SelectItem>
        <SelectItem key="In Progress" className='' onPress={() => handleFilterSelection("In Progress")}>In Progress</SelectItem>
        <SelectItem key="Unplanned" className='' onPress={() => handleFilterSelection("Unplanned")}>Unplanned</SelectItem>
      </SelectSection>
    </Select>
  );
};

export default TrendingSelector;
