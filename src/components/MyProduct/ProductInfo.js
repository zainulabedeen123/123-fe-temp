import React from 'react';
import shoeimg from '../../images/Input.png';

const ProductInfo = () => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <img src={shoeimg} alt="Product" className=" flex items-center w-auto h-[220px] justify-center object-cover rounded-md" />
            <p className='my-5 text-white text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique corporis repellat sequi cum enim inventore delectus rerum in, saepe illum non quidem officia dolor fuga dolorem possimus eligendi aperiam dolorum.
            </p>
            <div className="grid grid-cols-2 text-white gap-5">
                <div className='col-span-1 flex'>
                    <span className='font-semibold text-[14px]'>Price:</span>
                    <span className='font-normal text-[14px] ml-2'>$12.00</span>
                </div>
                <div className='col-span-1 flex'>
                    <span className='font-semibold text-[14px]'>Code:</span>
                    <span className='font-normal text-[14px] ml-2'>E74848039</span>
                </div>
                <div className='col-span-1 flex'>
                    <span className='font-semibold text-[14px]'>Brand:</span>
                    <span className='font-normal text-[14px] ml-2'>Energizer</span>
                </div>
                <div className='col-span-1 flex'>
                    <span className='font-semibold text-[14px]'>SKU:</span>
                    <span className='font-normal text-[14px] ml-2'>4khdgb8</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
