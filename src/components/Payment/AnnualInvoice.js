import React from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';

const AnnualInvoice = ({ years, selectedYear, onYearChange, onCancel, onDownload }) => {
  return (
    <>
      <div className="mt-[25px] mb-[50px] text-sm bg-[#252d33] w-fit px-5 py-3 rounded-md flex items-center gap-4">
        <div className="">
          <h1 className='font-medium text-white'>Download yearly invoice overview</h1>
          <p>Select and download a yearly overview of your invoices</p>
        </div>
        <LiaAngleRightSolid size={20} />
      </div>
      <div className="text-sm">
        <p className='font-medium'>Do you want a yearly overview of your invoices? Please select the year for which you want to download the overview</p>
        <p className='my-5 font-medium'>Select year</p>
        {years.map((year) => (
          <label key={year} className="containerRadio my-5">
            {year}
            <input
              type="radio"
              name="year"
              value={year}
              checked={selectedYear === year}
              onChange={() => onYearChange(year)}
            />
            <span className="checkmarkRadio"></span>
          </label>
        ))}
        <div className="flex mt-10 gap-5">
          <button className='rounded-md bg-transparent border border-[#a3a3a3] h-[30px] w-[70px] px-2 py-1 text-[12px]' onClick={onCancel}>
            Cancel
          </button>
          <button className='yellowBG h-[30px] p-1 px-2 text-[12px] text-white rounded-md w-[90px]' onClick={onDownload}>
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default AnnualInvoice;
