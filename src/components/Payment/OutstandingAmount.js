import React, {useState} from 'react';
import PaySelector from './PaySelector';

const OutstandingAmount = ({ paymentArrears, totalOutstanding }) => {
    const [selectedField, setSelectedField] = useState('')
    return (
        <>
                <h1 className='text-sm font-medium my-5'>Direct Online Payment</h1>
                <p className='leading-4 text-sm'>
                    Do you pay your bills manually? Then you can easily make the payment below using <br />
                    iDeal. If you pay via direct debit, you don't need to make an iDeal payment.
                </p>
                <div className="my-8">
                    <p className='pb-[15px] text-sm'>Make a choice</p>
                    <div className='flex flex-col justify-start max-w-full gap-[15px]'>
                        <input
                            type="text"
                            className='flex outline-none rounded-[4px] text-sm bg-transparent border border-[#a3a3a3] px-[10px] py-[10px] lg:w-[430px]'
                            placeholder={`Payment arrears : $${paymentArrears}`}
                        />
                        <input
                            type="text"
                            className='flex outline-none rounded-[4px] text-sm bg-transparent border border-[#a3a3a3] px-[10px] py-[10px] lg:w-[430px]'
                            placeholder={`Total outstanding amount : $${totalOutstanding}`}
                        />
                    </div>
                </div>
                <PaySelector selectedField={selectedField} setSelectedField={setSelectedField} />
        </>
    );
};

export default OutstandingAmount;
