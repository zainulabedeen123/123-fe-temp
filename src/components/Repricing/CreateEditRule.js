import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FaTshirt } from 'react-icons/fa';
import { LiaSearchDollarSolid } from "react-icons/lia";
import Searchbar from '../Searchbar';
import { useNavigate } from 'react-router-dom';
import UpgradeModal from '../UpgradeModal';
import AdvancedProductFilters from './AdvancedProductFilters';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FiFilter, FiTrash2 } from "react-icons/fi";
import { Button } from '@nextui-org/react';
import { CompetitorSelector, ABSelector, CurrSelector, OperatorSelector, ConditionSelector, StopConditionSelector, WhenSelector, LowerHigherSelector, MyPriceSelector } from './CreateSection';


const CreateEditRule = () => {
    const [enabledProducts, setEnabledProducts] = React.useState(false);
    const [enabledReprisedPrice, setEnabledReprisedPrice] = React.useState(false);
    const [enabledLastExtracterPrice, setEnabledLastExtracterPrice] = React.useState(false);
    const [enabledEmailExport, setEnabledEmailExport] = React.useState(false);
    const [enabledSlackExport, setEnabledSlackExport] = React.useState(false);
    const [upgraded, setUpgraded] = useState(false); // State for upgrade
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [add, setAdd] = useState(false)
    const [add2, setAdd2] = useState(false)

    const [selectedComp, setSelectedComp] = useState('Cheapest Competitor')
    const [selectedAB, setSelectedAB] = useState('Below')
    const [selectedCurr, setSelectedCurr] = useState('€')
    const [selectedCurr2, setSelectedCurr2] = useState('€')
    const [selectedOperator, setSelectedOperator] = useState('Plus')
    const [selectedCondition1, setSelectedCondition1] = useState('No Condition')
    const [selectedCondition2, setSelectedCondition2] = useState('No Condition')
    const [whenSelector, setWhenSelector] = useState('')
    const [lowerHigher, setLowerHigher] = useState('')
    const [myPriceSelector, setMyPriceSelector] = useState('')

    const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false)

    const handleAddClick = () => {
        setAdd(true)
    }

    const handleDeleteClick = () => {
        setAdd(false)
    }

    const handleFilterClick = () => {
        setIsAdvancedFilterOpen(true)
    }


    const navigate = useNavigate();

    const handleAddRepricingRule = () => {
        navigate('/repricing');
    };

    const handleInteraction = (interactionFn) => {
        if (!upgraded) {
            setIsModalOpen(true);
        } else {
            interactionFn();
        }
    };


    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <div className="flex space-x-5 px-2 items-center font-medium text-[14px] text-[#fafafa]">
                    <p>Create / Edit Repricing Rule</p>
                </div>

                <div className="flex items-center text-[#a3a3a3] gap-3">
                    <Button onClick={handleAddRepricingRule} className="flex items-center border border-[#a3a3a3] bg-transparent text-[#a3a3a3] rounded gap-2 px-2 py-1 text-[14px]">
                        <p>Back</p>
                    </Button>
                    <Button className="flex items-center border cursor-pointer border-[#a3a3a3] bg-transparent text-[#a3a3a3] rounded gap-2 px-2 py-1 text-[14px]">
                        <p>Save Rule</p>
                    </Button>
                    <Button className="flex items-center border cursor-pointer border-[#a3a3a3] bg-transparent text-[#a3a3a3] rounded gap-2 px-2 py-1 text-[14px]">
                        <p>Save Rule & Preview</p>
                    </Button>
                </div>
            </div>

            <div className="p-6 bg-[#2d363d] rounded-lg space-y-12 text-xs">
                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 1 - Rule Name
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Please enter a recognizable name for this rule</p>
                    <div classname='w-[150px]'>
                        <Searchbar />
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 2 - Repricing
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Select which actions we must perform on your prices</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className='text-sm'>Set new price</p>

                        {selectedAB !== 'Equal' &&
                            <>
                                <input type="number" className="w-20 p-2 bg-transparent text-neutral-400 text-sm border border-[#a3a3a3] font-normal outline-none" placeholder="0.1" />

                                <CurrSelector selectedCurr={selectedCurr} setSelectedCurr={setSelectedCurr} />
                            </>
                        }
                        <ABSelector selectedAB={selectedAB} setSelectedAB={setSelectedAB} />
                        <p className='text-sm'>my</p>
                        <CompetitorSelector selectedComp={selectedComp} setSelectedComp={setSelectedComp} />
                        <button className="px-4 py-2.5 text-[#F3941D] border border-[#F3941D]" onClick={handleAddClick}>+ Add</button>
                    </div>
                    {add &&
                        <div className='flex items-center gap-2 md:ml-[90px]'>
                            <OperatorSelector selectedOperator={selectedOperator} setSelectedOperator={setSelectedOperator} />
                            <input type="number" className="w-20 p-2 bg-transparent text-neutral-400 text-sm border border-[#a3a3a3] font-normal outline-none" placeholder="0.1" />
                            {(selectedOperator === 'Plus' || selectedOperator === 'Minus') &&
                                <CurrSelector selectedCurr={selectedCurr2} setSelectedCurr={setSelectedCurr2} />
                            }
                            <button className="px-4 py-2.5 flex gap-1 items-center  text-[#F3941D] border border-[#F3941D]" onClick={handleDeleteClick}><FiTrash2 /> Delete</button>
                        </div>
                    }
                    <p className="text-neutral-400 text-xs font-normal leading-tight">A product with a price of € 10.00 and a cheapest competitor price of € 9.50 will be repriced € 0.10 below his price, at € 9.40</p>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 3 - When
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Select which additional condition triggers this rule</p>

                    <div className="flex items-center gap-2">
                        <ConditionSelector selectedCondition={selectedCondition1} setSelectedCondition={setSelectedCondition1} />
                        {selectedCondition1 === 'When' &&
                            <>
                                <p className='text-sm'>Cheapest Competitor product is</p>
                                <WhenSelector whenSelector={whenSelector} setWhenSelector={setWhenSelector} />
                            </>
                        }
                    </div>
                    {selectedCondition1 === 'When' &&
                        <p className="text-neutral-400 text-xs font-normal leading-tight">This repricing rule will run if the competitor's product is <span className='uppercase'>{whenSelector}</span></p>
                    }
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 4 - Stop Conditions
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Choose when this rule must be halted</p>

                    <div className="flex items-center gap-2">
                        {selectedCondition2 === 'New Price' &&
                            <p className='text-sm'>If</p>
                        }
                        <StopConditionSelector selectedCondition={selectedCondition2} setSelectedCondition={setSelectedCondition2} />
                        {selectedCondition2 === 'New Price' &&
                            <>
                                <p className='text-sm'>is</p>
                                <LowerHigherSelector value={lowerHigher} setValue={setLowerHigher} />
                                <p className='text-sm'>than</p>
                                <MyPriceSelector value={myPriceSelector} setValue={setMyPriceSelector} lowerHigher={lowerHigher} />
                                {lowerHigher !== 'Lower/Higher' &&
                                    <>
                                        <button className="px-4 py-2.5 text-[#F3941D] border border-[#F3941D]" onClick={() => setAdd2(true)}>+ Add</button>
                                    </>
                                }
                            </>
                        }
                    </div>
                    {add2 &&
                        <div className='flex items-center gap-2'>
                            <OperatorSelector selectedOperator={selectedOperator} setSelectedOperator={setSelectedOperator} />
                            <input type="number" className="w-20 p-2 bg-transparent text-neutral-400 text-sm border border-[#a3a3a3] font-normal outline-none" placeholder="0.1" />
                            {(selectedOperator === 'Plus' || selectedOperator === 'Minus') &&
                                <CurrSelector selectedCurr={selectedCurr2} setSelectedCurr={setSelectedCurr2} />
                            }
                            <button className="px-4 py-2.5 flex gap-1 items-center  text-[#F3941D] border border-[#F3941D]" onClick={()=>setAdd2(false)}><FiTrash2 /> Delete</button>
                        </div>
                    }
                </div>

                <div className='text-center'>

                    <p className='flex mb-1 items-center justify-between gap-2'>
                        <span className='w-[40%]'><hr /></span>
                        <span className=''>Min/Max Values Settings</span>
                        <span className='w-[40%]'><hr /></span>
                    </p>
                    <div className="h-[270px] bg-[#1F2529] bg-opacity-40 -mx-6 text-center">
                        <h2 className='font-bold text-[15px] py-[130px] h-full'>Please select Min / Max / Min-Max as stop condition to enable this section</h2>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 5 - Apply to products
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Select which product(s) must be considered or excluded</p>
                    <div className="flex items-center gap-4">
                        <p>Apply to</p>
                        <button onClick={handleFilterClick} className="flex items-center gap-2 px-2 py-1">
                            <div className='flex gap-2'><FiFilter />Advanced Filters</div>
                        </button>
                        <Switch
                            checked={enabledProducts}
                            onChange={setEnabledProducts}
                            className={`${enabledProducts ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                        >
                            <span className="sr-only">Enable</span>
                            <span
                                className={`${enabledProducts ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`}
                            />
                        </Switch>
                        <span>Select all products</span>
                    </div>
                    <div classname='w-[150px]'>
                        <Searchbar />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <label className="container flex items-center gap-2">
                            <input type="checkbox" className="hidden" />
                            <span className="checkmark mt-2"></span>
                            <span className="text-[#a3a3a3] ml-5">Include these competitors in this rule</span>
                        </label>
                    </div>
                    <div className="p-4 h-[270px] md:w-[70%] bg-[#294846] rounded-lg flex justify-center items-center">
                        <FaTshirt className="text-2xl text-white" />
                        <span className="text-white font-bold ml-2">All Products</span>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 6 - Apply to competitors
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Select which competitor(s) must be considered or excluded</p>
                    <div classname='w-[150px]'>
                        <Searchbar />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <label className="container flex items-center gap-2">
                            <input type="checkbox" className="hidden" />
                            <span className="checkmark mt-2"></span>
                            <span className="text-[#a3a3a3] ml-5">Include these competitors in this rule</span>
                        </label>
                    </div>
                    <div className="p-4 h-[270px] md:w-[70%] bg-[#294846] rounded-lg flex justify-center items-center">
                        <LiaSearchDollarSolid className="text-2xl text-white" />
                        <span className="text-white font-bold ml-2">All Competitors</span>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 7 - Repricing Method
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">
                        Choose if 123 Scraper will apply the new price automatically on your platform or will just suggest it
                    </p>
                    <label className="containerRadio flex items-center gap-2">
                        <input type="radio" name="repricing-method" className="hidden" />
                        <span className="checkmarkRadio"></span>
                        <span className="text-[#a3a3a3]">Semi-Automatic - 123 Scraper will suggest you the new price which you could apply with just a click. (Upgrade to unlock)</span>
                    </label>
                    <label className="containerRadio flex items-center gap-2">
                        <input type="radio" name="repricing-method" className="hidden" />
                        <span className="checkmarkRadio"></span>
                        <span className="text-[#a3a3a3]">Autopilot (Soon Available for) - Price will be automatically changed by 123 Scraper</span>
                    </label>
                    <div className="flex flex-col gap-2 bg-[#294746] p-3">
                        <label className="container flex items-center gap-2" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                            <input type="checkbox" className="hidden" />
                            <span className="checkmark mt-2"></span>
                            <span className="text-[#a3a3a3] ml-5">Every time a catalog import terminates</span>
                        </label>
                        <label className="container flex items-center gap-2" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                            <input type="checkbox" className="hidden" />
                            <span className="checkmark mt-2"></span>
                            <span className="text-[#a3a3a3] ml-5">Everyday at</span>
                            <input
                                type="time"
                                className="w-20 bg-transparent text-neutral-400 text-sm font-normal border border-[#a3a3a3] rounded outline-none"
                            />
                            <select className="bg-transparent rounded-md text-neutral-400 text-sm font-normal outline-none">
                                <option>Europe/Amsterdam</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 8 - Options
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Options to let your prices be more attractive. Note: The options are applied BEFORE the stop condition analysis</p>
                    <label className="flex items-center gap-2">
                        <Switch
                            checked={enabledProducts}
                            onChange={() => handleInteraction(() => setEnabledProducts(!enabledProducts))}
                            className={`${enabledProducts ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                        >
                            <span className="sr-only">Enable</span>
                            <span className={`${enabledProducts ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`} />
                        </Switch>
                        <span>Adjust calculated prices</span>
                    </label>
                    <div className="flex flex-col gap-2 p-3 bg-[#284A47]">
                        <div className='flex justify-start gap-2 items-center'>
                            <p className="text-neutral-400 text-xs text-center font-normal leading-tight">New Price</p>
                            <select onClick={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))} className="w-20 p-1 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none">
                                <option>Plus</option>
                                <option>Minus</option>
                            </select>
                            <input type="number" onClick={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))} className="w-20 p-1 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none" placeholder="20" />
                            <select onClick={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))} className="w-20 p-1 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none">
                                <option>%</option>
                            </select>
                        </div>

                        <p className="text-neutral-400 text-xs mt-2 text-center font-normal leading-tight">Example: If the repricing rule sets the new price at € 10, 123 Scraper will list the price as € 12 on your platform. </p>

                    </div>
                    <label className="flex items-center gap-2">
                        <Switch
                            checked={enabledReprisedPrice}
                            onChange={() => handleInteraction(() => setEnabledReprisedPrice(!enabledReprisedPrice))}
                            className={`${enabledReprisedPrice ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                        >
                            <span className="sr-only">Enable</span>
                            <span className={`${enabledReprisedPrice ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`} />
                        </Switch>
                        <span>End repriced product prices</span>
                    </label>
                    <div className="flex flex-col gap-2 p-3 bg-[#284A47]">
                        <div className='flex justify-start gap-2 items-center'>
                            <p className="text-neutral-400 text-xs text-center font-normal leading-tight">New Price</p>
                            <div className=''>

                                <input type="number" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))} className="w-12 p-1 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none" placeholder="XX" />
                                <input type="number" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))} className="w-12 p-1 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none" placeholder="99" />
                            </div>
                        </div>
                        <p className="flex text-neutral-400 text-xs mt-2 text-center font-normal leading-tight">Example: If the repricing rule sets the new price at € 10, 123 Scraper will list the price as € 12 on your platform. </p>
                    </div>
                    <label className="flex items-center gap-2">
                        <Switch
                            checked={enabledLastExtracterPrice}
                            onChange={setEnabledLastExtracterPrice}
                            className={`${enabledLastExtracterPrice ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                        >
                            <span className="sr-only">Enable</span>
                            <span
                                className={`${enabledLastExtracterPrice ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`}
                            />
                        </Switch>
                        <span>Use last extracter price</span>
                    </label>
                    <p className="flex text-neutral-400 text-xs mt-2 text-center font-normal leading-tight">Enabling this option, 123 Scraper will consider competitos whose status is Missing price, using the last extracted price.</p>
                </div>

                <div className="space-y-5">
                    <div className="text-neutral-400 text-base font-medium leading-tight">
                        Step 9 - Export
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <p className="text-neutral-400 text-xs font-normal leading-tight">Choose if you want to export your repricing data on a web URL</p>
                    <div className="flex flex-col gap-3 p-3 bg-[#284A47]">
                        <label className="flex items-center gap-2">
                            <Switch
                                checked={enabledEmailExport}
                                onChange={() => handleInteraction(() => setEnabledEmailExport(!enabledEmailExport))}
                                className={`${enabledEmailExport ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                            >
                                <span className="sr-only">Enable</span>
                                <span className={`${enabledEmailExport ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`} />
                            </Switch>
                            <span>Email john@gmail.com <span className="text-green-600 bg-green-600 bg-opacity-10 p-1 rounded-full">Upgrade to unlock</span></span>
                        </label>
                        <label className="flex items-center gap-2">
                            <Switch
                                checked={enabledSlackExport}
                                onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}
                                className={`${enabledSlackExport ? 'bg-green-500' : 'bg-[#e2e2e2]'} relative inline-flex items-center h-4 rounded-full w-8`}
                            >
                                <span className="sr-only">Enable</span>
                                <span className={`${enabledSlackExport ? 'translate-x-4' : 'translate-x-1'} inline-block w-3 h-3 transform bg-[#1E2429] rounded-full`} />
                            </Switch>
                            <span>Slack</span>
                        </label>
                        <div className="flex items-center h-[30px] gap-4">
                            {/* Radio Buttons for Export Format */}
                            <label className="containerRadio items-center flex" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                                <input type="radio" name="export-format" className="hidden" />
                                <span className="checkmarkRadio" ></span>
                                <span className="text-[#a3a3a3]">CSV</span>
                            </label>
                            <label className="containerRadio flex" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                                <input type="radio" name="export-format" className="hidden" />
                                <span className="checkmarkRadio"></span>
                                <span className="text-[#a3a3a3]">Excel</span>
                            </label>
                            <label className="containerRadio flex" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                                <input type="radio" name="export-format" className="hidden" />
                                <span className="checkmarkRadio"></span>
                                <span className="text-[#a3a3a3]">XML</span>
                            </label>
                            <label className="containerRadio flex" onChange={() => handleInteraction(() => setEnabledSlackExport(!enabledSlackExport))}>
                                <input type="radio" name="export-format" className="hidden" />
                                <span className="checkmarkRadio"></span>
                                <span className="text-[#a3a3a3]">JSON</span>
                            </label>
                        </div>
                        <input type="text" className="w-full p-3 bg-transparent border border-[#a3a3a3] rounded text-neutral-400 text-sm font-normal outline-none" placeholder="Public Download Link" />
                    </div>
                </div>
            </div>

            <UpgradeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <AdvancedProductFilters isOpen={isAdvancedFilterOpen} onClose={() => setIsAdvancedFilterOpen(false)} />

        </>
    );
};

export default CreateEditRule;
