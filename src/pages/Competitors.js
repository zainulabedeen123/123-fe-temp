import React, { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { FaPlus, FaAngleDown } from 'react-icons/fa6';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AddCompetitorModal from '../components/Compe

  const handleExport = () => {
    setIsExportModalOpen(true);
  };

  const handleCloseAddCompetitorModal = () => {
    setIsAddCompetitorModalOpen(false);
  };

  const handleCloseExportModal = () => {
    setIsExportModalOpen(false);
  };

  const handleImport = () => {
    setIsImportModalOpen(true);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'import') {
      handleImport();
    }
    if (selectedOption === 'export') {
      handleExport();
    }
  };

  const handleCloseImportModal = () => {
    setIsImportModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8 flex-wrap-reverse gap-4">
        <div className=" flex space-x-5 text-[15px] mr-2 items-center">
          <p onClick={() => navigate('/competitors')} className={`${window.location.pathname === '/competitors' && 'text-white'} cursor-pointer`}>Competitors</p>
          <p onClick={() => navigate('/competitors/montioredurl')} className={`${pathname === 'montioredurl' && 'text-white'} cursor-pointer whitespace-nowrap`}>Monitored URLs</p>
          <p onClick={() => navigate('/competitors/mapinfragment')} className={`${pathname === 'mapinfragment' && 'text-white'} cursor-pointer whitespace-nowrap`}>Map Infringement</p>
        </div>

        <div className="flex items-center text-[#a3a3a3] gap-3">
          {pathname === undefined && (
            <>
              <FilterSelector1 selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain}  selectedStatus={selectedStatus1} setSelectedStatus={setSelectedStatus2} />
              <MassiveActionSelector selectedAction={selectedMassiveAction1} setSelectedAction={setSelectedMassiveAction1}  />
              <Button
                className="flex items-center bg-transparent border border-[#a3a3a3] text-[#a3a3a3] rounded-md text-[14px] px-2 py-1"
                onClick={handleAddCompetitor}
              >
                <FaPlus className="mr-2" />
                Add Competitor
              </Button>
            </>
          )}

          {pathname === 'montioredurl' && (
            <>
              <FilterSelector selectedSavedFilterSet={selectedSavedFilterSet} setSelectedSavedFilterSet={setSelectedSavedFilterSet} selectedCompetitor={selectedCompetitor} setSelectedCompetitor={setSelectedCompetitor} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} selectedStock={selectedStock} setSelectedStock={setSelectedStock} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedDiff={selectedDiff} setSelectedDiff={setSelectedDiff}/>
              <ColumnsSelector selectedAction={selectedSavedFilterSet} setSelectedAction={setSelectedSavedFilterSet} />
              <MassiveActionSelector2 selectedAction={selectedMassiveAction2} setSelectedAction={setSelectedMassiveAction2} />
              <ImportExportSelector handleImport={handleImport} handleExport={handleExport} selectedAction={selectedAction} setSelectedAction={setSelectedAction} />
            </>
          )}

          {pathname === 'mapinfragment' && (
            <Button
              className="flex items-center text-[14px] bg-transparent border text-[#a3a3a3] rounded-md px-2 py-1"
              onClick={handleExport}
            >
              Export
            </Button>
          )}
        </div>
      </div>

      <Outlet />

      <AddCompetitorModal isOpen={isAddCompetitorModalOpen} onClose={handleCloseAddCompetitorModal} />
      <MonitoredUrlsImport isOpen={isImportModalOpen} onClose={handleCloseImportModal} />
      <MonitoredUrlsExport isOpen={isExportModalOpen} onClose={handleCloseExportModal} />
    </>
  );
}

export default Competitors;
