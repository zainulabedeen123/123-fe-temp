import { FormControl, IconButton, InputLabel, MenuItem, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaAngleDown, FaAngleRight, FaMinus, FaPlus } from 'react-icons/fa6'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import Select from 'react-select'
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiUpArrowCircle } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import nikeImg from '../../images/nike.png'
import { FiEye } from "react-icons/fi";
import repriceGray from '../../images/Reprice Grey.png'
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { PiFunnelFill } from "react-icons/pi";
import { BsFillHddStackFill, BsFunnelFill } from 'react-icons/bs'
import { PiFileArrowDown } from "react-icons/pi";

const Paidkeyword = () => {
    const [filterToggle, setFilterToggle] = useState('filters')

    const [keywordSelect, setKeywordSelect] = useState('Include')
    const [showmore, setShowmore] = useState(false)
    const [grouppby, setGrouppby] = useState('Group By: Search Volume')
    const [yourObject, setYourObject] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

    const handleChange = (e) => {
        setKeywordSelect(e.target.value)
    }

    const setKeyToOne = (key) => {
        console.log(typeof key);
        setYourObject(prevState => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(k => {
                newState[k] = (k === key) ? (newState[k] === 1 ? 0 : 1) : 0;
            });
            return newState;
        });

    };

    console.log(yourObject);

    const options = [{ value: 'Group By: Search Volume', label: 'Group By: Search Volume' }, { value: 'Group By: Search Count', label: 'Group By: Search Count' }]
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparant', // Change background color based on selection
            color: 'white', // Change text color based on selection
            '&:hover': {
                backgroundColor: 'lightgray', // Change background color on hover
                color: 'black'
            },
        }),
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <>
            <div className="px-2">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <p>Research</p>
                        <FaAngleRight size={14} />
                        <p className='text-[#f3941d]'>Paid Keywords</p>
                    </div>

                    <div className="flex items-center text-[#a3a3a3] gap-3">

                        <div className="flex items-center border border-[#fafafa] rounded-md gap-2 px-2 py-2">
                            <p>Sort: Most Valuable Keywords</p>
                            <FaAngleDown className='text-[#a3a3a3]' />
                        </div>

                        <div className="flex items-center border border-[#fafafa] rounded-md gap-2 px-2 py-2">
                            <p>Columns</p>
                            <FaAngleDown className='text-[#a3a3a3]' />
                        </div>

                        <div className="flex items-center border border-[#fafafa] rounded-md gap-2 px-2 py-2">
                            <p>Export All</p>
                            {/* <FaAngleDown className='text-[#a3a3a3]' /> */}
                        </div>

                    </div>

                </div>

            </div>

            <div className="flex mt-8 gap-4">

                <div className="w-1/4 bg-[#2d363d] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden">


                    <div className=" flex border-0 border-b border-[#4e4e4e] sticky">

                        <div onClick={() => setFilterToggle('filters')} className={`w-1/2 text-center cursor-pointer ${filterToggle === 'filters' && 'bg-[#3a4249]'} rounded-tl-2xl px-3 py-2`}>
                            Filters
                        </div>

                        <div onClick={() => setFilterToggle('topics')} className={`w-1/2 text-center cursor-pointer ${filterToggle === 'topics' && 'bg-[#3a4249]'} rounded-tr-2xl px-3 py-2`}>
                            Topics
                        </div>

                    </div>

                    <div className="overflow-y-scroll h-[430px] no-scrollbar">


                        {filterToggle === 'filters' &&
                            <div className="py-5 px-3">

                                <p className='flex items-center justify-between'>Compare to Your Site's Rank
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='Enter your domain' />

                                <p className='flex items-center justify-between mt-4'>Keywords
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <div className="flex items-center">

                                    <select className='bg-transparent p-2 border border-[#4a5258] text-sm focus:outline-none outline-none mt-1' name="keywords" id="keywords">
                                        <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Include">Include</option>
                                        <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Exclude">Exclude</option>
                                    </select>

                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='Comma separated' />
                                </div>

                                <p className='flex items-center justify-between mt-4'>URLs
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <div className="flex items-center">

                                    <select className='bg-transparent p-2 border border-[#4a5258] text-sm focus:outline-none outline-none mt-1' name="keywords" id="keywords">
                                        <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Include">Include</option>
                                        <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Exclude">Exclude</option>
                                    </select>

                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='example.com/blog' />
                                </div>

                                <p className='flex items-center justify-between mt-8'>

                                    <input id="checked-checkbox" type="checkbox" value="" className="w-3 h-3 text-[#aaaaaa] bg-[#2d363d] border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none "></input>

                                    <span>Exclude Homepage Keywords</span>

                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <p className='flex items-center justify-between mt-4'>Search Volume
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <div className="flex items-center">

                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='30,000,000' />
                                </div>

                                <p className='flex items-center justify-between mt-4'>Keyword Difficulty
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <div className="flex items-center">

                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100' />
                                </div>


                                <p className='flex items-center justify-between mt-4'>Rank
                                    <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                        <IconButton>
                                            <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                        </IconButton>
                                    </Tooltip>
                                </p>

                                <div className="flex items-center">

                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                    <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100' />
                                </div>

                                <div onClick={() => setShowmore(!showmore)} className="flex items-center gap-2 my-3 py-2 cursor-pointer">{!showmore ? <><FaPlus /> Show More </> : <><FaMinus /> Show Less</>}</div>

                                {showmore &&
                                    <div className={`${showmore ? 'block' : 'hidden'}`}>

                                        <p className='flex items-center justify-between'>Rank Change
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='-99' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='99' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>SEO Clicks
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000,000' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Cost Per Click
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$0' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$1000' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Mobile Searches (Percent)
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Desktop Searches (Percent)
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Searched Not Clicked (Percent)
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Paid Clicks (Percent)
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Organic Clicks (Percent)
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Cost
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$0' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$100,000' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Ads
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>HomePages
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">

                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />


                                            <input type="text" name="" id="" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000' />
                                        </div>

                                        <p className='flex items-center justify-between mt-4'>Adult Filters
                                            <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                                                <IconButton>
                                                    <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                                                </IconButton>
                                            </Tooltip>
                                        </p>

                                        <div className="flex items-center">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-[#aaaaaa] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none focus:outline-none active:outline-none shadow-none" />
                                            <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adult Filters (324 Hidden)</label>
                                        </div>

                                        <div className="flex items-center my-2">
                                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-[#aaaaaa] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none focus:outline-none active:outline-none shadow-none" />
                                            <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show only Adult Keywords</label>
                                        </div>

                                        <div className="flex items-center">
                                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-[#aaaaaa] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 outline-none focus:outline-none active:outline-none shadow-none" />
                                            <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adult Filter Off</label>
                                        </div>

                                    </div>
                                }

                                <button className='text-white font-light text-center bg-[#fb0078] rounded-md w-full py-1 mt-5 mb-3'>Apply</button>

                            </div>
                        }

                        {filterToggle === 'topics' &&

                            <>

                                <div className="py-5 px-3">
                                    <Select options={options} className='w-full' styles={customStyles} onChange={(e) => setGrouppby(e.value)} />
                                </div>

                                <div className="border-0 border-b border-t border-[#4e4e4e] text-center py-3 font-medium text-sm">
                                    All Keyword
                                </div>

                                <div className="">

                                    {Object.keys(yourObject).map((element, index) =>

                                        <>
                                            <div className="w-full border-0 border-b border-[#4e4e4e] p-3">
                                                <button onClick={() => setKeyToOne(index.toString())} className="flex items-center justify-between w-full" >
                                                    <span className='flex items-center gap-2'><MdArrowForwardIos style={{ rotate: yourObject[index] === 1 ? '90deg' : '0deg', transition: 'all 0.5s ease' }} /> nike</span>
                                                    <span>7.24am</span>
                                                </button>
                                                <div className={`mt-1`} style={{ display: yourObject[index] === 1 ? 'block' : 'none', transition: 'all 0.5s ease' }}>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs py-1">

                                                        <p>air max</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>blazer</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>nike shoes</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>nike sb</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>dunk</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>white</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>2</p>
                                                        <p>676k</p>

                                                    </div>
                                                    <div className="pl-14 flex w-full justify-between items-center text-xs">

                                                        <p>air mag</p>
                                                        <p>676k</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    )}

                                </div>

                                <div className="border border-[#4e4e4e] rounded-lg text-center mx-3 mb-8 mt-3 flex items-center text-sm justify-center gap-2 text-white py-2">
                                    <MdArrowForwardIos className='rotate-90' size={16} /> View All Topics
                                </div>




                            </>

                        }

                    </div>

                </div>

                <div className="w-3/4 bg-[#2d363d] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden">

                    <div className="overflow-y-scroll no-scrollbar h-[460px]">

                        <div className="flex gap-4 px-3 py-2 border-0 border-b border-[#4e4e4e]">
                            <div className="">Total Keywords: 1,97795</div>
                            <div className="">Total Volume: 218M</div>
                            <div className="">Total SEO Clicks: 3.44M</div>
                        </div>

                        <div className="overflow-hidden no-scrollbar">
                            <div className="overflow-y-scroll h-[350px] no-scrollbar">
                                <table className="w-full text-sm text-left ">
                                    <thead className="text-xs bg-[#252d33]">
                                        <tr>

                                            <th className="px-6 py-3">
                                                <div className="flex items-center gap-2">
                                                    <input id="checked-checkbox" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-transparent border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none "></input>
                                                    <span>Keyword</span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3">Volume</th>
                                            <th className="px-6 py-3">Rank (Change)</th>
                                            <th className="px-6 py-3">SEO Clicks (Change)</th>
                                            <th className="px-6 py-3">KD</th>
                                            <th className="px-6 py-3">CPC (B)</th>
                                            <th className="px-6 py-3">Desktop Searches</th>
                                            <th className="px-6 py-3"></th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {array.map(() => {
                                            return (
                                                <tr className="border-0 border-b border-[#4e4e4e]">
                                                    <td className="px-6 py-3">
                                                        <div className="flex items-center gap-2">
                                                            <input id="checked-checkbox" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-transparent border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none "></input>
                                                            <p>
                                                                stockx
                                                                <Link className='flex items-center gap-1'><FiExternalLink />https://stockx.com/</Link>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6">946k</td>
                                                    <td className="px-6">1 -</td>
                                                    <td className="px-6">155k -</td>
                                                    <td className="px-6">51</td>
                                                    <td className="px-6">$0.08</td>
                                                    <td className="px-6">76.3%</td>
                                                    <td className="px-6"><button className='text-white yellowBG px-2 py-0.5 rounded-sm text-xs inline-block'>Add</button><PiDotsThreeOutlineVerticalFill className='inline' /></td>

                                                </tr>
                                            )
                                        }
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="pt-10">

                            <h1 className='text-center text-2xl font-medium'>Want to view more results?</h1>
                            <p className='text-center leading-none'>To view more data, subscribe to one of our plans.</p>

                            <div className="w-3/5 mx-auto mt-10">
                                <div className="flex gap-10">

                                    <div className="flex flex-col items-center">
                                        <BsFunnelFill size={60} />
                                        <p className='text-center'>Advanced filtering and sorting options</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <BsFillHddStackFill size={60} />
                                        <p className='text-center'>Huge keyword database at your finger tips</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <PiFileArrowDown size={60} />
                                        <p className='text-center'>Export data into an excel or cdv file</p>
                                    </div>

                                </div>

                                <div className='bg-[#fb0078] rounded-md text-white py-1 mx-auto text-center w-4/5 my-8'>See Plans and Pricing</div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Paidkeyword