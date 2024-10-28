import React from 'react';
import { FaAngleDown, FaPlus } from 'react-icons/fa';
import image from '../images/image.png';

const AddNew = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="flex space-x-5 px-2 items-center text-[14px] text-[#fafafa]">
                    <p>Adding your new product</p>
                </div>
                <div className="flex items-center text-[#a3a3a3] gap-3 mt-4 md:mt-0">
                    <div className="flex items-center border border-[#fafafa]  rounded-[9px] gap-2 px-2 py-1 text-[14px]">
                        <p>Add Column</p>
                        <FaAngleDown className='text-[#a3a3a3]' />
                    </div>
                    <div className="flex items-center border border-[#fafafa]  rounded-[9px] gap-2 px-2 py-1 text-[14px]">
                        <FaPlus />
                        <p>Add New Product</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#2d363d]  rounded-[9px] p-5">
                <p className='mb-5 text-sm'>Add a new product to my catalog</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="col-span-1 flex items-center w-auto h-[220px] justify-center bg-[#3a4249]  rounded-[9px]">
                        <img src={image} alt="Product" className="object-cover rounded-[9px]" />
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1 md:col-span-2">
                                <p htmlFor="title" className='text-sm mb-2'>Title</p>
                                <input type="text" className=' rounded-[9px] bg-[#3a4249] w-full outline-none px-3 py-1' />
                            </div>
                            <div className="col-span-1">
                                <p htmlFor="price" className='text-sm mb-2'>Price</p>
                                <input type="text" className=' rounded-[9px] bg-[#3a4249] w-full outline-none px-3 py-1' />
                            </div>
                            <div className="col-span-1">
                                <p htmlFor="stock" className='text-sm mb-2'>Stock</p>
                                <input type="text" className=' rounded-[9px] bg-[#3a4249] w-full outline-none px-3 py-1' />
                            </div>
                            <div className="col-span-1">
                                <p htmlFor="code" className='text-sm mb-2'>Code</p>
                                <input type="text" className=' rounded-[9px] bg-[#3a4249] w-full outline-none px-3 py-1' />
                            </div>
                            <div className="col-span-1">
                                <p htmlFor="brand" className='text-sm mb-2'>Brand</p>
                                <input type="text" className=' rounded-[9px] bg-[#3a4249] w-full outline-none px-3 py-1' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='yellowBG text-white text-[12px] rounded-[4px] px-4 py-1 h-[30px] text-sm w-fit mt-5 cursor-pointer'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddNew;
