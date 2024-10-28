import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import shopify from '../../images/shopify.png';
import woocommerce from '../../images/woocommerce.png';
import wix from '../../images/wix.png';
import googleshopping from '../../images/googleshopping.png';
import magento from '../../images/magento.png';
import prestashop from '../../images/prestashop.png';
import bol from '../../images/bol.png';
import amazon from '../../images/amazon.png';
import ebay from '../../images/ebay.png';
import alibaba from '../../images/alibaba.png';
import aliexpress from '../../images/aliexpress.png';

const ConnectDatafeed = ({ isOpen, onClose }) => {
    const platforms = [
        { name: 'Shopify', icon: shopify },
        { name: 'WooCommerce', icon: woocommerce },
        { name: 'WIX', icon: wix },
        { name: 'Google Shopping', icon: googleshopping },
        { name: 'Magento', icon: magento },
        { name: 'PrestaShop', icon: prestashop },
    ];

    const marketplaces = [
        { name: 'Bol', icon: bol },
        { name: 'Amazon', icon: amazon },
        { name: 'eBay', icon: ebay },
        { name: 'Alibaba', icon: alibaba },
        { name: 'AliExpress', icon: aliexpress },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-2xl overflow-scroll scrollbar"
            style={{ maxWidth: '800px', maxHeight: '500px' }}
        >
            <ModalContent>
                <div className="relative bg-[#2D363D] rounded-2xl p-4">
                    <div className="bg-transparent rounded-md  flex justify-end cursor-pointer" onClick={onClose}>
                        <IoMdClose size={20} />
                    </div>
                    <ModalBody className="flex flex-col justify-start">
                        <div className="mb-6">
                            <h2 className="text-[24px] font-semibold text-white mb-4">Import Your Products</h2>
                            <p className="text-[14px]">Select the method you prefer to use to import your catalog</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* CSV Datafeed Section */}
                            <div className="flex flex-col pr-6 w-full md:w-1/2 border-r">
                                <div className="flex font-semibold text-lg mb-4">CSV Datafeed</div>
                                <div className="text-sm flex items-center gap-2 text-[#f9f9f9] mb-4">Download CSV Template <IoMdDownload /></div>

                                <div className="text-neutral-400 text-sm font-normal ">Click here to import your product using a CSV file</div>

                                <div className="bg-[#343E46] rounded-lg p-4 mt-2 h-[300px] flex flex-col items-center justify-center text-center mb-4 cursor-pointer">
                                    <MdOutlineCloudUpload size={48} className="text-[#a3a3a3]" />
                                    <p className="text-[12px] text-white mt-2">Click here to upload a new CSV (max. 20MB)</p>
                                </div>

                                <div className="flex font-semibold text-lg mb-4">CSV Datafeed URL</div>
                                <p className="text-sm mb-2">Let us pick your catalog every day using a public URL</p>

                                <div className="flex items-center ml-[120px] my-2">
                                    <label className="container text-[#a3a3a3]">
                                        <input type="checkbox" id="passwordProtected" />
                                        <span className="checkmark mt-2"></span>
                                        <p className='ml-5 text-[12px]'>This URL is password protected</p>
                                    </label>
                                </div>
                                <div className='flex justify-between p-2 rounded-md border border-[#a3a3a3] text-sm mb-2'>
                                    <input type="text" placeholder="File URL" className="bg-transparent outline-none border-none" />
                                    <div className="text-amber-600 rounded-md px-4 py-1">Save</div>
                                </div>
                            </div>
                            {/* Connect Your Platform Section */}
                            <div className="flex flex-col w-full md:w-1/2 gap-6">
                                <div>
                                    <h3 className="text-white text-lg mb-2">Connect Your Platform</h3>
                                    <div className="text-neutral-400 text-xs font-normal mb-4">Use Zikkio to connect and keep in sync your catalog</div>

                                    <div className='flex gap-2 text-white items-center justify-end p-1 mb-2'>
                                        <IoMdAdd />
                                        <p className='text-[12px]'>Add Platform</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {platforms.map((platform, index) => (
                                            <button key={index} className="flex items-center gap-4 p-2 rounded-lg bg-[#3A4249] text-white w-full">
                                                <img src={platform.icon} alt={platform.name} className="object-contain w-[80px] h-[40px]" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-2 text-white items-center justify-between p-1 mb-2'>
                                        <h4 className="text-md text-[#a3a3a3]">Marketplace</h4>
                                        <div className='flex gap-2'>
                                            <IoMdAdd />
                                            <p className='text-[12px]'>Add Marketplace</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {marketplaces.map((marketplace, index) => (
                                            <button key={index} className="flex items-center gap-4 p-2 rounded-lg bg-[#3A4249] text-white w-full">
                                                <img src={marketplace.icon} alt={marketplace.name} className="object-contain  w-[80px] h-[40px]" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </div>
            </ModalContent>
        </Modal>
    );
};

export default ConnectDatafeed;
