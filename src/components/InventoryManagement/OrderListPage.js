import React from 'react';
import CustomTable from '../CustomTable';

const columns = [
    { label: 'Order Date', field: 'orderDate', sortable: true },
    { label: 'Purchase Order ID', field: 'purchaseOrderId', sortable: true },
    { label: 'Delivery Date', field: 'deliveryDate', sortable: true },
    { label: 'Order Amount', field: 'orderAmount', sortable: true },
    {
        label: 'Order Status', 
        field: 'orderStatus', 
        sortable: true, 
        render: (status) => {
            const statusColors = {
                'In Progress': '#00B62A',
                'Closed': '#5FB2FF',
                'Draft': '#EB7301',
                'On Hold': '#FB0078'
            };
            const statusBgColors = {
                'In Progress': 'bg-[#00B62A1A]',
                'Closed': 'bg-[#60B2FF1A]',
                'Draft': 'bg-[#EB73011A]',
                'On Hold': 'bg-[#FB00781A]'
            };
            return (
                <span className={`px-2 py-1 rounded-full ${statusBgColors[status]}`} style={{ color: statusColors[status] }}>
                    <span className={`inline-block w-2 h-2 rounded-full mr-1`} style={{ backgroundColor: statusColors[status] }}></span>
                    {status}
                </span>
            );
        }
    }
];

const data = [
    { orderDate: '10/04/2024', purchaseOrderId: 'PO-00123456789', deliveryDate: '20/04/2024', orderAmount: '$4,294', orderStatus: 'In Progress' },
    { orderDate: '10/04/2024', purchaseOrderId: 'PO-00123456789', deliveryDate: '20/04/2024', orderAmount: '$4,294', orderStatus: 'Closed' },
    { orderDate: '10/04/2024', purchaseOrderId: 'PO-00123456789', deliveryDate: '20/04/2024', orderAmount: '$4,294', orderStatus: 'Draft' },
    { orderDate: '10/04/2024', purchaseOrderId: 'PO-00123456789', deliveryDate: '20/04/2024', orderAmount: '$4,294', orderStatus: 'On Hold' },
    { orderDate: '10/04/2024', purchaseOrderId: 'PO-00123456789', deliveryDate: '20/04/2024', orderAmount: '$4,294', orderStatus: 'Draft' }
];

const OrderListPage = () => {
    return (
        <CustomTable columns={columns} data={data} />
    );
};

export default OrderListPage;
