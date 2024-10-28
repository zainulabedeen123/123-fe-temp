import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './NetworkChart';
import { TextComp } from './TextComp';

const Comp1 = ({ data1, data2, data4 }) => {
    return (
        <div className='flex bg-[#2D363D] col-span-5 md:col-span-2 h-[1670px] rounded-2xl'>
            <div className='flex flex-col text-white w-full'>
                <div className='p-3 border-b border-[#4E4E4E]'>
                    <p className='font-medium text-[20px]'>118,000</p>
                    <span className='text-[14px]'> Monthly Volume</span>
                </div>

                <div className='p-3 border-b border-[#4E4E4E]'>
                    <p className='font-medium text-[20px]'>44,800</p>
                    <span className='text-[16px]'> Estimated Clicks</span>
                    <Chart1 data={data1} />
                </div>

                <div className='p-3 border-b border-[#4E4E4E]'>
                    <span className='text-[16px]'> Clicked any result</span>
                    <div className="chart-container">
                        <Chart2 data={data2} />
                        <div className="chart-info">
                            <span>Low</span>
                            <div className="percentage">38%</div>
                            <span>High</span>
                        </div>
                    </div>
                </div>

                <div className='p-3 border-b border-[#4E4E4E]'>
                    <span className='text-[16px]'>Mobile vs desktop</span>
                    <div className='flex justify-between flex-wrap'>
                        <Chart3 />
                        <div className='flex flex-col items-center'>
                            <Chart4 data={data4} />
                            <p className='text-[12px]'>Network</p>
                        </div>
                    </div>
                </div>

                <div className='p-3 border-b border-[#4E4E4E]'>
                    <span className='text-[16px]'> Paid clicks</span>
                    <div className="chart-container">
                        <Chart2 data={data2} />
                        <div className="chart-info">
                            <span>Low</span>
                            <div className="percentage">38%</div>
                            <span>High</span>
                        </div>
                    </div>
                </div>

                <div className='p-3 border-b border-[#4E4E4E]'>
                    <span className='text-[16px]'> Difficulty</span>
                    <div className="chart-container">
                        <Chart2 data={data2} />
                        <div className="text-center font-thin">
                            39
                        </div>
                    </div>
                </div>

                <div className='p-3'>
                    <TextComp />
                </div>
            </div>
        </div>
    );
}

export default Comp1;
