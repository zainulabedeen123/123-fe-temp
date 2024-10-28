import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Select, SelectItem  } from "@nextui-org/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';
import { FaRegTrashCan } from "react-icons/fa6";
import { BsFiletypeCsv } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import FieldSelector from './FieldSelector';
import OperatorSelector from './OperatorSelector';

const AdvancedProductFilters = ({ isOpen, onClose }) => {
    const [filters, setFilters] = useState([{ field: '', operator: '', value: '' }]);
    const [products, setProducts] = useState([]);
    const [selectedField, setSelectedField] = useState('Choose a Field')
    const [selectedOperator, setSelectedOperator] = useState('Choose an Operator')

    const handleAddRule = () => {
        setFilters([...filters, { field: '', operator: '', value: '' }]);
    };

    const handleRemoveRule = (index) => {
        const newFilters = filters.filter((_, i) => i !== index);
        setFilters(newFilters);
    };

    const handleFieldChange = (index, value) => {
        const newFilters = [...filters];
        newFilters[index].field = value;
        setFilters(newFilters);
    };

    const handleOperatorChange = (index, value) => {
        const newFilters = [...filters];
        newFilters[index].operator = value;
        setFilters(newFilters);
    };

    const handleValueChange = (index, value) => {
        const newFilters = [...filters];
        newFilters[index].value = value;
        setFilters(newFilters);
    };

    const columns = [
        { label: 'Product Name', field: 'name', sortable: true },
        { label: 'Price', field: 'price', sortable: true },
        { label: 'Status', field: 'status', sortable: true }
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
                <div className="relative bg-[#2D363D] rounded-2xl p-6">
                    <ModalBody className="mb-2 flex justify-center">
                        <div className='flex flex-col text-center justify-center'>
                            <h2 className="text-[24px] font-semibold text-white mb-4">Advanced Product Filters</h2>
                            <p className="text-[#a3a3a3] mb-4">
                                Use these filters to select which products your rule will take in consideration
                            </p>
                        </div>

                        {filters.map((filter, index) => (
                            <div key={index} className="flex flex-col">
                                <div className='flex justify-between'>
                                    <div>

                                        <button className="px-2 py-1 bg-pink-600 text-white rounded-l-md">AND</button>
                                        <button className="px-2 py-1 bg-pink-600 bg-opacity-20 text-white rounded-r-md">OR</button>
                                    </div>
                                    <button className="flex text-sm items-center px-2 py-1 bg-transparent text-[#00faa0] gap-2 mr-10"><FaPlus /> Add Group</button>
                                </div>
                                <div className='flex mt-2 gap-3 justify-end'>

                                    <FieldSelector selectedField={selectedField} setSelectedField ={setSelectedField}/>

                                    <OperatorSelector selectedOperator={selectedOperator} setSelectedOperator={setSelectedOperator} />

                                    <input
                                        type="text"
                                        className=" p-2 min-w-[250px] rounded-md bg-transparent border border-[#a3a3a3] text-sm"
                                        value={filter.value}
                                        onChange={(e) => handleValueChange(index, e.target.value)}
                                        placeholder="Enter value"
                                    />
                                    <button
                                        className="pl-2"
                                        onClick={() => handleRemoveRule(index)}
                                    >
                                        <FaRegTrashCan size={20} />
                                    </button>
                                    
                                </div>
                                <button className="flex justify-end text-sm items-center px-2 py-1 bg-transparent gap-2 mr-10"><FaPlus /> Add Rule</button>
                            </div>
                        ))}

                        <div className="mt-6 text-sm flex justify-between gap-4 items-center">
                            <span className="flex gap-3 text-[#a3a3a3] w-[400px]">Products Preview <span className="text-pink-600 bg-pink-600 bg-opacity-20 py-1 px-2 rounded-full">0 Products</span></span>
                            <div className='' >

                            <Searchbar/>
                            </div>
                            <div className="flex justify-end space-x-2 text-sm w-[400px]">
                                <button className="flex items-center gap-2 p-2 bg-transparent border border-gray-400 text-gray-400 rounded-md"><BsFiletypeCsv />Export</button>

                                <button className="flex gap-2 items-center p-2 yellowBG text-white rounded-md"><FiEye />Preview Now</button>

                            </div>
                        </div>
                        <div className="mt-4 pb-10">
                            <CustomTable columns={columns} data={products} withSelectAll={false} />
                        </div>
                    </ModalBody>
                    <ModalFooter className="pt-4 w-full flex justify-center gap-5">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="yellowBG text-white rounded-md px-4 py-1"
                            onPress={onClose}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default AdvancedProductFilters;
