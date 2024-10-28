import React, { useState } from 'react'
import Specification from './Specification'
import OutstandingInvoice from './OutstandingInvoiceCard'
import PaidInvoiceList from './PaidInvoiceList'
import AnnualInvoice from './AnnualInvoice'
import OutstandingAmount from './OutstandingAmount';
import SpecificationSelector from './SpecificationSelector'

const invoices = [
    { month: 'February', year: '2024', dueDate: 'April 21, 2024', amount: '€ 31,07', showSpecification: true },
    { month: 'January', year: '2024', dueDate: '', amount: '€ 46,07', additionalInfo: 'The invoice has not been paid yet', showSpecification: true },
    { month: 'December', year: '2023', dueDate: '', amount: '€ 29,39', additionalInfo: 'The invoice has not been paid yet', showSpecification: true },
    { month: 'Debit Note', year: '', dueDate: '', amount: '€ 25,00', additionalInfo: 'Additional invoice, please review the invoice for more details.', showSpecification: false },
    { month: 'November', year: '2023', dueDate: '', amount: '€ 44,39', additionalInfo: 'The invoice has not been paid yet', showSpecification: true },
];


const PaymentBilling = () => {
    const [selectedField, setSelectedField] = useState('')

    const [selectedYear, setSelectedYear] = useState('2024');
    const years = ['2024', '2023', '2022'];

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    const handleCancel = () => {
        setSelectedYear(null);
    };

    const handleDownload = () => {
        // Handle download action
    };

    return (
        <div className="">
            {/* Outstanding Amount Card */}
            <h1 className='text-sm font-medium text-white mb-5'>Outstanding Amount</h1>

            <div className="bg-[#2d363d] my-3 rounded-2xl p-5 pb-8 ">
                <OutstandingAmount
                    paymentArrears="3107"
                    totalOutstanding="6214"
                />


            </div>

            {/* Outstanding Invoice Card */}
            <h1 className='text-sm font-medium text-white mb-5'>Outstanding Invoice</h1>
            <div className='bg-[#2d363d] my-3 rounded-2xl p-5'>

                <h1 className='text-sm font-medium my-5'>Open Invoice</h1>

                <OutstandingInvoice
                    month="April"
                    year="2024"
                    dueDate="April 21, 2024"
                    amount="3,107"
                    status="due"
                />
                <OutstandingInvoice
                    month="March"
                    year="2024"
                    dueDate=""
                    amount="3,107"
                    status="not paid"
                />
            </div>

            {/* Paid Invoice Card */}
            <h1 className='text-sm font-medium text-white my-5'>Paid Invoice</h1>

            <div className="bg-[#2d363d] my-3 rounded-2xl p-5 pb-8 ">
                <PaidInvoiceList invoices={invoices} />
            </div>

            {/* Annual Invoice Card */}
            <h1 className='text-sm font-medium text-white my-5'>Anuual Overview of Invoice</h1>

            <div className="bg-[#2d363d] my-3 rounded-2xl p-5 pb-8">

                <h2 className='text-sm font-medium my-5'>Invoice overview for the year</h2>

                <AnnualInvoice
                    years={years}
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                    onCancel={handleCancel}
                    onDownload={handleDownload}
                />


            </div>

            {/* Specifications Card */}
            <div className="my-5 flex items-center justify-between">
                <h1 className='text-sm font-medium text-white'>Specifications</h1>
                <SpecificationSelector selectedField={selectedField} setSelectedField={setSelectedField}  />
            </div>

            <div className="bg-[#2d363d] my-3 rounded-lg p-5 pb-8 ">
                <Specification />
            </div>

        </div>
    )
}

export default PaymentBilling