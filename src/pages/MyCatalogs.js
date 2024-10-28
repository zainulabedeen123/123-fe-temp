import React, { useState } from 'react';
import { BiPlus, BiUpArrowCircle } from 'react-icons/bi';
ectDatafeedOpen] = useState(false);

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
                <div className="flex items-center gap-2 p-2">
                    <img src={stool} alt="" className="w-6 h-6" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Brand',
            field: 'brand',
            sortable: true,
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
            label: 'Min. Price',
            field: 'minPrice',
            sortable: true,
        },
        {
            label: 'Max. Price',
            field: 'maxPrice',
            sortable: true,
        },
        {
            label: 'Competitor URL',
            field: 'competitorUrl',
            sortable: true,
        },
        {
            label: 'Position',
            field: 'position',
            sortable: true,
            render: (value) => (
                <div className="flex items-center gap-4">
                    <BiUpArrowCircle className='text-[#00fba0]' size={25} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            label: 'Status',
            field: 'status',
            sortable: true,
            render: (value, row, index) => (
                <div className={`flex items-center rounded-full ${products[index].isActive ? 'text-[#00b62a] bg-[#28433b]' : 'text-[#fc0479] bg-[#423143]'} w-fit pr-3 py-1`}>
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
                <div className="w-[100px] flex gap-1 ">
                    <img src={repriceGray} alt="" className='w-4' />
                    {products[index].isActive ? <FiEye size={18} onClick={() => toggleActive(index)} /> : <FiEyeOff size={18} onClick={() => toggleActive(index)} />}
                </div>
            )
        }
    ];

    function generateDummyData() {
        const products = [
            { productName: 'Simple Tradition Stool', brand: 'Simplo', code: '9urhhfj88...', price: '$45', minPrice: '$15', maxPrice: '$75', competitorUrl: 'www.shopify.com', position: '4/100', status: 'Enabled', isActive: true }
        ];
        const data = [];
        for (let i = 0; i < 5; i++) {
            const product = products[i % products.length];
            data.push({
                ...product,
                id: i,
            });
        }
        return data;
    }

    const handleExportClick = () => {
        setIsExportModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsExportModalOpen(false);
    };

    const handleConnectDatafeedClick = () => {
        setIsConnectDatafeedOpen(true);
    };

    const handleCloseConnectDatafeed = () => {
        setIsConnectDatafeedOpen(false);
    };

    const handleAddClick = () => {
        setIsAddModalOpen(true);
    };

    const handleAddCloseModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <>
            <div className="flex items-center justify-between mb-5 text-[14px] flex-wrap-reverse gap-4">
                <div className="flex gap-2 px-2 items-center">
                    <p className=''>Import and manage your product </p>
                    <p className='px-2 text-pink-600 bg-[#423143] rounded-full py-1'>5 active products</p>
                </div>
                <div className="flex items-center text-[#a3a3a3] gap-2">
                    <div className="flex items-center border border-[#a3a3a3]] rounded-md gap-2 px-2 py-1 h-[38px]">
                        <p>Columns</p>
                        <FaAngleDown className='text-[#a3a3a3]' />
                    </div>
                    <FilterSelector/>
                    <Button className="flex items-center border bg-transparent text-[#a3a3a3] border-[#a3a3a3] rounded-md gap-2 px-2 py-1 cursor-pointer" onClick={handleConnectDatafeedClick}>
                        <p>Connect Datafeed</p>
                        <VscCloudUpload />
                    </Button>
                    <Button className="flex items-center border bg-transparent text-[#a3a3a3] border-[#a3a3a3] rounded-md gap-2 px-2 py-1 cursor-pointer" onClick={handleExportClick}>
                        <p>Export</p>
                    </Button>
                </div>
            </div>

            <div className="bg-[#2d363d] rounded-lg p-3 pb-5 mt-5 h-fit overflow-y-scroll scrollbar">
                <div className="flex items-center justify-between flex-wrap-reverse gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-2">
                            <p className='text-[14px]'>
                                Your Customer Data
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Searchbar />
                        <button className='flex w-[220px] items-center text-[12px] rounded-md yellowBG text-white px-3 py-3' onClick={handleAddClick}>
                            <BiPlus className='flex space-x-1' />Add Monitored URL
                        </button>
                    </div>
                </div>

                <div className='mt-5 overflow-scroll scrollbar'>
                    <CustomTable columns={columns} data={products} />
                </div>
            </div>

            <CatalogExportModal isOpen={isExportModalOpen} onClose={handleCloseModal} />
            <AddCompetitorUrlModal isOpen={isAddModalOpen} onClose={handleAddCloseModal} />
            <ConnectDatafeed isOpen={isConnectDatafeedOpen} onClose={handleCloseConnectDatafeed} />
        </>
    );
}

export default MyCatalogs;
