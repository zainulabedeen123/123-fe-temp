import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaPlus, FaMinus } from 'react-icons/fa';

const PaidFilters = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="py-5 px-3">
            <p className='flex items-center justify-between'>Hide Your Site's Paid Keywords
                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                    <IconButton>
                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                    </IconButton>
                </Tooltip>
            </p>
            <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='Enter your domain' />

            <p className='flex items-center justify-between mt-4'>Keywords
                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                    <IconButton>
                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                    </IconButton>
                </Tooltip>
            </p>
            <div className="flex items-center">
                <select className='bg-transparent p-2 border border-[#4a5258] text-sm focus:outline-none outline-none mt-1' name="keywords">
                    <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Include">Include</option>
                    <option className='bg-[#1e252b] text-[#828385] rounded-none' value="Exclude">Exclude</option>
                </select>
                <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='Comma separated' />
            </div>

            <p className='flex items-center justify-between mt-4'>Search Volume
                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                    <IconButton>
                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                    </IconButton>
                </Tooltip>
            </p>
            <div className="flex items-center">
                <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='30,000,000' />
            </div>

            <p className='flex items-center justify-between mt-4'>CPC
                <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                    <IconButton>
                        <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                    </IconButton>
                </Tooltip>
            </p>
            <div className="flex items-center">
                <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$0' />
                <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$100' />
            </div>

            <div onClick={() => setShowMore(!showMore)} className="flex items-center gap-2 my-3 py-2 cursor-pointer">{!showMore ? <><FaPlus /> Show More </> : <><FaMinus /> Show Less</>}</div>

            {showMore && (
                <div className='block'>
                    <p className='flex items-center justify-between mt-4'>Ads
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Mobile Searches (Percent)
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Paid Clicks (Percent)
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Monthly Cost
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$100' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Keyword Difficulty
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Clicks
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000,000' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Desktop Searches (Percent)
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                        <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Searched Not Clicked (Percent)
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Organic Clicks (Percent)
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0%' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='100%' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Cost
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='$100,000' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Ads
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Homepages
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center">
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='0' />
                        <input type="text" className='border border-[#4a5258] outline-none bg-transparent px-2 py-2 mt-1 w-full text-sm' placeholder='10,000' />
                    </div>

                    <p className='flex items-center justify-between mt-4'>Adult Filters
                        <Tooltip title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placement="bottom">
                            <IconButton>
                                <HiOutlineInformationCircle className='cursor-pointer text-[#a3a3a3]' size={18} />
                            </IconButton>
                        </Tooltip>
                    </p>
                    <div className="flex items-center gap-2">
                        <input type="radio" id="adult1" name="adult" value="Adult Filters On (0 Hidden)" className="w-3 h-3 text-[#aaaaaa] bg-[#2d363d] border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none" />
                        <label htmlFor="adult1">Adult Filters On (0 Hidden)</label>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <input type="radio" id="adult2" name="adult" value="Show only Adult Keywords" className="w-3 h-3 text-[#aaaaaa] bg-[#2d363d] border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none" />
                        <label htmlFor="adult2">Show only Adult Keywords</label>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <input type="radio" id="adult3" name="adult" value="Adult Filter Off" className="w-3 h-3 text-[#aaaaaa] bg-[#2d363d] border-gray-300 rounded dark:bg-transparent dark:border-gray-600 outline-none" />
                        <label htmlFor="adult3">Adult Filter Off</label>
                    </div>
                </div>
            )}

            <button className='text-white font-light text-center bg-[#fb0078] rounded-md w-full py-1 mt-5 mb-3'>Apply</button>
        </div>
    );
};

export default PaidFilters;
