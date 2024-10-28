import React, { useState } from 'react';
import nikeImg from '../../images/Ellipse 963.png';
import { LuDot } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const CompetitorTable = () => {
    const [competitors, setCompetitors] = useState([
        { url: 'https://www.nike.com/shop-1', status: 'Enabled', isActive: true },
        { url: 'https://www.nike.com/shop-2', status: 'Enabled', isActive: true },
        { url: 'https://www.nike.com/shop-3', status: 'Enabled', isActive: true },
        { url: 'https://www.nike.com/shop-4', status: 'Enabled', isActive: true },
        // Add more competitors as needed
    ]);

    const toggleActive = (index) => {
        setCompetitors(prevCompetitors => {
            const newCompetitors = [...prevCompetitors];
            newCompetitors[index].isActive = !newCompetitors[index].isActive;
            newCompetitors[index].status = newCompetitors[index].isActive ? 'Enabled' : 'Disabled';
            return newCompetitors;
        });
    };

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
            <div className="bg-[#3a4249] rounded-md p-3 overflow-auto scrollbar">
                <table className='font-thin text-left w-full mb-10'>
                    <thead>
                        <tr className='text-[#A4A4A4] text-[14px]'>
                            <th className='px-6 py-3'>Competitors</th>
                            <th className='px-6 py-3'>Monitored URL's</th>
                            <th className='px-6 py-3'>Status</th>
                            <th className='px-6 py-3'></th>
                        </tr>
                    </thead>
                    <tbody className='text-white text-[14px]'>
                        {competitors.map((competitor, index) => (
                            <tr key={index} className='h-[70px]'>
                                <td className='px-6'>
                                    <div className='flex items-center gap-4'>
                                        <img src={nikeImg} alt="Competitor Logo" className="w-6 h-6" />
                                        <p>{new URL(competitor.url).hostname}</p>
                                    </div>
                                </td>
                                <td className='px-6'>{competitor.url}</td>
                                <td className='px-6'>
                                    <div className={`flex items-center rounded-full ${competitor.isActive ? 'bg-[#28433b] text-[#00b62a]' : 'bg-[#423143] text-[#fc0479]'} w-fit pr-3 py-1 text-sm`}>
                                        <LuDot size={20} />
                                        <span>{competitor.status}</span>
                                    </div>
                                </td>
                                <td className='px-6 cursor-pointer' onClick={() => toggleActive(index)}>
                                    {competitor.isActive ? <FiEye /> : <FiEyeOff />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='bg-transparent rounded-md border px-3 py-1 text-[12px] text-white'>
                    Add New Competitor
                </button>
            </div>
        </div>
    );
};

export default CompetitorTable;
