import React, { useState } from 'react';
import { LuDot } from "react-icons/lu";
import nikeImg from '../../images/nike.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import repriceGray from '../../images/Reprice Grey.png';
import CustomTable from '../CustomTable'; 

const CompetitiveProducts = () => {
    const [products, setProducts] = useState(generateDummyData());

    const toggleActive = (index) => {
        setProducts(prevProducts => {
            const newProducts = [...prevProducts];
            newProducts[index].isActive = !newProducts[index].isActive;
            newProducts[index].status = newProducts[index].isActive ? 'Enabled' : 'Disabled';
            return newProducts;
        });
    };

    const columns = [
        {
            label: 'Product Name',
            field: 'productName',
            sortable: true,
            render: (value, row, index) => (
                <div className="flex items-center gap-2">
                    <img src={nikeImg} alt="Product" className='h-12' />
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
            label: 'Price',
            field: 'price',
            sortable: true,
        },
        {
            label: 'Diff',
            field: 'diff',
            sortable: true,
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${products[index].isActive ? 'text-[#00B62A] bg-[#00B62A] bg-opacity-10' : 'text-[#FB0078] bg-[#FB0078] bg-opacity-10'} w-fit pr-3 py-1`}>
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
                    <img src={repriceGray} alt="Reprice" className="h-4" />
                    {products[index].isActive ? <FiEye size={18} className="text-[#a3a3a3]" onClick={() => toggleActive(index)} /> : <FiEyeOff size={18} className="text-[#a3a3a3]" onClick={() => toggleActive(index)} />}
                </div>
            )
        }
    ];

    function generateDummyData() {
        const products = [
            { productName: 'Nike Air Max', code: '001', price: '$120', diff: '+$10', status: 'Enabled', isActive: true },
            { productName: 'Adidas Ultra Boost', code: '002', price: '$180', diff: '-$20', status: 'Disabled', isActive: false }
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
        <CustomTable columns={columns} data={products} />
    );
}

export default CompetitiveProducts;
