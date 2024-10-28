import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../Searchbar';
import CustomTable from '../CustomTable';
import { FaRegEdit } from "react-icons/fa";
import { FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import GenerateReportsDropdown from './GenerateReportsDropdown';

const OwnerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  const navigate = useNavigate();

  const [data, setData] = useState([
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'User', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Owner', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Admin', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'User', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Owner', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Admin', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'User', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Owner', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Ultimate', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'User', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Owner', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Admin', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'User', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Owner', status: 'Active' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Owner', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Ultimate', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'User', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'Owner', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Admin', status: 'Active' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', role: 'User', status: 'Inactive' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', role: 'Owner', status: 'Active' },
  ]);

  const columns = [
    {
      label: 'User Name',
      field: 'userName',
      sortable: false,
      render: (value) => (
        <div className="flex items-center gap-2">
          <span>{value}</span>
        </div>
      ),
    },
    {
      label: 'Email Address',
      field: 'email',
      sortable: true,
    },
    {
      label: 'Role',
      field: 'role',
      sortable: true,
    },
    {
      label: 'Status',
      field: 'status',
      sortable: true,
      render: (value) => (
        <div className={`flex items-center gap-1 rounded-full ${value === 'Active' ? 'bg-[#28433b] text-[#00b62a]' : 'bg-[#423143] text-[#fc0479]'} w-fit px-2 py-0.5 text-sm`}>
          <span>•</span>
          <span>{value}</span>
        </div>
      ),
    },
    {
      label: 'Action',
      field: 'action',
      render: (value, row, index) => (
        <div className="flex items-center gap-2 w-[42px]">
          <FaRegEdit size={18} className='cursor-pointer' onClick={() => navigate('/organization/owner/dashboard/edit')} />
          {row.status === 'Active' ? (
            <FiEye className="text-[#a3a3a3]" size={18} onClick={() => toggleStatus(index)} />
          ) : (
            <FiEyeOff className="text-[#a3a3a3]" size={18} onClick={() => toggleStatus(index)} />
          )}
          <FiTrash2 className="text-[#a3a3a3]" size={18} />
        </div>
      ),
    },
  ];

  const toggleStatus = (index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].status = newData[index].status === 'Active' ? 'Inactive' : 'Active';
      return newData;
    });
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <>


      <div className='bg-[#2D363D] rounded-2xl p-5 flex flex-col justify-start w-full pb-10'>
        <div className='flex items-center justify-between gap-2 mb-5'>
          <div className='flex items-center justify-start'>
            <p className='w-[130px] font-medium text-[14px] wrap-nowrap'>Customer Database</p>
            <div className='rounded-full bg-[#FB0078] bg-opacity-10 text-[#FB0078] px-2 py-1'>
              1,050
            </div>
          </div>
          <Searchbar />
          <div className='flex gap-2'>
            <button className="border border-[#fafafa] rounded-[9px] px-2 py-1 min-w-[90px] text-[14px]">Delete All</button>
            <button className='yellowBG text-white text-[12px] rounded-[4px] px-2 py-1 text-sm cursor-pointer min-w-[110px]' onClick={() => navigate('/organization/owner/dashboard/add')}>Add New User</button>
            <GenerateReportsDropdown/>
          </div>
        </div>
        <div className='overflow-scroll scrollbar'>
          <CustomTable columns={columns} data={currentPageData} />
        </div>
      </div>
      <div className="flex justify-end mt-4 w-full">
        <ReactPaginate
          previousLabel={<IoIosArrowBack size={18} />}
          nextLabel={<IoIosArrowForward size={18} />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousClassName={"previous"}
          nextClassName={"next"}
          disabledClassName={"disabled"}
        />
      </div>
    </>
  );
};

export default OwnerDashboard;
