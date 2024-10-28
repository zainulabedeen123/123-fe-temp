import React from 'react';
import './styles.css';
import { FaNewspaper } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

export const TextComp = () => (
    <div className="flex flex-col">
        <div className="section flex flex-col pb-10 border-b border-[#4E4E4E]">
            <h3 className='text-[16px] font-medium'>Google Provided Data</h3>
            <div className="text-[14px]">
                <span className="data-title">Cost Per Click</span>
                <div className="data-subitem">Broad (US) <span className="data-value">$0.78</span></div>
                <div className="data-subitem">Phrase (US) <span className="data-value">$0.81</span></div>
                <div className="data-subitem">Exact (US) <span className="data-value">$0.77</span></div>
            </div>
            <div className="text-[14px]">
                <span className="data-title">Monthly Costs</span>
                <div className="data-subitem">Broad (US) <span className="data-value">$76,931</span></div>
                <div className="data-subitem">Phrase (US) <span className="data-value">$61,183</span></div>
                <div className="data-subitem">Exact (US) <span className="data-value">$2,372</span></div>
            </div>
            <div className="text-[14px]">
                <span className="data-title">Search Volume</span>
                <div className="data-subitem">Global <span className="data-value">4,090,000</span></div>
                <div className="data-subitem">Local <span className="data-value">2,240,000</span></div>
            </div>
            <div className="text-[14px] mt-10">
                <div className="data-subitem">Advertisers <span className="data-value">0</span></div>
                <div className="data-subitem">Homepages <span className="data-value">4</span></div>
            </div>
        </div>

        <div className="section">
            <span className="data-title">Universal Search in SERP</span>
            <div className="flex justify-start gap-4 text-[#A3A3A3]">
                <span className="icon"><FaNewspaper /></span>
                <span className="icon"><AiOutlinePicture /></span>
                <span className="icon"><FaLocationDot /></span>
                <span className="icon"><IoCartOutline /></span>
            </div>
        </div>
    </div>
);