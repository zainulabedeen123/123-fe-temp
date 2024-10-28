import React, { useState } from 'react';
import { LuDot } from "react-icons/lu";
import nikeImg from '../../images/nike.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import repriceGray from '../../images/Reprice Grey.png';
import CustomTable from '../CustomTable'; 

const StockTable = () => {
    const [data, setData] = useState(generateDummyData());

    const toggleActive = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].isActive = !newData[index].isActive;
            newData[index].status = newData[index].isActive ? 'Active' : 'Inactive';
            return newData;
        });
    };

    const columns = [
        {
            label: 'Product Name',
            field: 'productName',
            sortable: true,
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <img src={nikeImg} alt="Product" className='h-12' />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Description',
            field: 'description',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Code',
            field: 'code',
            sortable: true,
        },
        {
            label: 'Quantity',
            field: 'quantity',
            sortable: true,
        },
        {
            label: 'Price',
            field: 'price',
            sortable: true,
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${data[index].isActive ? 'text-[#00B62A] bg-[#00B62A] bg-opacity-10' : 'text-[#FB0078] bg-[#FB0078] bg-opacity-10'} w-fit pr-3 py-1`}>
                    <LuDot size={20} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: '',
            field: 'actions',
            sortable: false,
            render: (value, row, index) => (
                <div className="flex items-center gap-2 w-[42px]">
                    {data[index].isActive ? <FiEye onClick={() => toggleActive(index)} className="text-[#a3a3a3]" size={18} /> : <FiEyeOff onClick={() => toggleActive(index)} className="text-[#a3a3a3]" size={18} />}
                    <img src={repriceGray} alt="Reprice" className="h-4" />
                </div>
            )
        }
    ];

    function generateDummyData() {
        const products = [
            { productName: 'Nike Flyknit', description: 'lorem ipsum', code: '001', quantity: 245, price: '$45', status: 'Active', isActive: true }
        ];
        const data = [];
        for (let i = 0; i < 10; i++) {
            const product = products[i % products.length];
            data.push({
                ...product,
                code: product.code + i,
            });
        }
        return data;
    }

    return (
        <CustomTable columns={columns} data={data} />
    );
}

export default StockTable;
