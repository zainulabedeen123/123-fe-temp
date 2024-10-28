import React, {useState} from 'react';
import PaidInvoiceItem from './PaidInvoiceItem';
import InvoicesSelector from './InvoicesSelector';

const PaidInvoiceList = ({ invoices }) => {
  const [selectedInvoice, setSelectedInvoice] = useState('')

  return (
    <>
      <h2 className='text-sm font-medium'>Open Invoices</h2>
      {invoices.map((invoice, index) => (
        <PaidInvoiceItem
          key={index}
          month={invoice.month}
          year={invoice.year}
          dueDate={invoice.dueDate}
          amount={invoice.amount}
          additionalInfo={invoice.additionalInfo}
          showSpecification={invoice.showSpecification}
        />
      ))}
      <div className="flex mt-4">
        <InvoicesSelector selectedField={selectedInvoice} setSelectedField={setSelectedInvoice} />
      </div>
    </>
  );
};

export default PaidInvoiceList;
