import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaCheck, FaXmark } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import CustomTable from '../CustomTable';
import Searchbar from '../Searchbar';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import GenerateReportsDropdown from './GenerateReportsDropdown';

const UserAccess = () => {
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;
  const [currentUser, setCurrentUser] = useState(null);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [data, setData] = useState([
    { userName: 'David Roger John', email: 'david.john@gmail.com', permission: 'pending' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', permission: 'pending' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', permission: 'Admin' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', permission: 'pending' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', permission: 'pending' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', permission: 'Admin' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', permission: 'pending' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', permission: 'pending' },
    { userName: 'David Roger John', email: 'david.john@gmail.com', permission: 'Ultimate' },
    { userName: 'Louisa Rebecca', email: 'louisa.reb@gmail.com', permission: 'pending' },
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
      label: 'Permissions',
      field: 'permission',
      sortable: true,
      render: (value, row, rowIndex) => (
        <div className="flex items-center gap-4">
          <div className='bg-[#00FBA0] text-[#00FBA0] bg-opacity-10 h-6 w-6 rounded p-[3px] cursor-pointer'>
            <FaCheck size={18} onClick={() => handleIconClick('accept', rowIndex)} />
          </div>
          <div className='bg-[#FB0078] text-[#FB0078] bg-opacity-10 h-6 w-6 rounded p-[3px] cursor-pointer'>
            <FaXmark size={18} onClick={() => handleIconClick('reject', rowIndex)} />
          </div>
        </div>
      ),
    },
  ];

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleIconClick = (type, rowIndex) => {
    const user = currentPageData[rowIndex];
    console.log(user);
    setCurrentUser(user);
    if (type === 'accept') {
      setAcceptModalOpen(true);
    } else if (type === 'reject') {
      setRejectModalOpen(true);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/organization/owner/dashboard" className="text-gray-400 hover:underline">Dashboard</Link>
          <FaAngleRight size={14} />
          <span className="text-[#F3941D]"> User Access</span>
        </div>

        <div className='bg-[#2D363D] rounded-2xl p-5 flex flex-col justify-start w-full pb-10'>
          <div className='flex items-center justify-between gap-2 mb-5'>
            <div className='flex items-center'>
              <p className='w-[210px] font-medium text-[14px] wrap-nowrap'>Customer Database</p>
              <Searchbar />
            </div>
            <div className='flex gap-2'>
              <button className="border border-[#fafafa] rounded-[9px] px-2 py-1 min-w-[90px] text-[14px]">Delete All</button>
              <button className='yellowBG text-white text-[12px] rounded-[4px] px-2 py-1 text-sm cursor-pointer min-w-[110px]'>Add New User</button>
              <GenerateReportsDropdown/>
            </div>
          </div>
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

      <AcceptModal
        isOpen={isAcceptModalOpen}
        onClose={() => setAcceptModalOpen(false)}
        user={currentUser}
      />
      <RejectModal
        isOpen={isRejectModalOpen}
        onClose={() => setRejectModalOpen(false)}
        user={currentUser}
      />

    </div>
  );
};

export default UserAccess;
