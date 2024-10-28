import React, {useState} from 'react';
import { LuCalendar } from 'react-icons/lu';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import PaySelector from './PaySelector';


const OutstandingInvoice = ({ month, year, dueDate, amount, status, paymentOptions }) => {
  const [selectedField, setSelectedField] = useState('')

  return (
    <div className="flex items-center gap-8 mb-5">
      <div className="flex items-start gap-4 w-[400px]">
        {status === 'due' ? <LuCalendar size={20} className='mt-1' /> : <HiOutlineInformationCircle size={20} className='mt-1' />}
        <div className="text-sm w-full md:w-auto">
          <h3 className='text-white font-medium'>{month} {year}</h3>
          <p className='font-normal'>{dueDate ? `The final payment date is ${dueDate}.` : 'The invoice has not been paid yet'}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 w-full">
        <button className='rounded-md bg-transparent border border-[#a3a3a3] h-[30px] px-4 py-1 text-[12px]'>Specification</button>
        <PaySelector selectedField={selectedField} setSelectedField={setSelectedField} />

        <p className='text-[12px] w-full md:w-auto text-right md:text-left'>${amount}</p>
      </div>
    </div>
  );
};

export default OutstandingInvoice;
