import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const PaidInvoiceItem = ({ month, year, dueDate, amount, additionalInfo, showSpecification }) => {
  return (
    <div className="flex text-sm items-center gap-8 my-5">
      <div className="flex gap-4 w-[400px]">
        {additionalInfo ? <HiOutlineInformationCircle size={20} className='mt-1' /> : <IoMdCheckmarkCircleOutline size={20} className='mt-1' />}
        <div className="w-full md:w-auto">
          <h3 className='font-medium text-white'>{month} {year}</h3>
          <p className='text-sm'>{dueDate ? `The final payment date is ${dueDate}.` : additionalInfo}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 w-full">
        <button className={`${showSpecification ? 'flex' : 'invisible'} rounded-md bg-transparent border border-[#a3a3a3] h-[30px] px-4 py-1 text-[12px]`}>Specification</button>
        <button className='flex yellowBG h-[30px] px-3 py-1 text-[12px] text-white rounded-md w-[100px]'>
          Invoice
        </button>
        <p className='text-[12px] w-full md:w-auto text-right md:text-left'>{amount}</p>
      </div>
    </div>
  );
};

export default PaidInvoiceItem;
