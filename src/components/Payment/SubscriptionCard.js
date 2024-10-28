import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


const SubscriptionCard = ({ title, price, period, description, features, buttonText, onButtonClick, isActive }) => {
    return (
        <div className="bg-[#2D363D] rounded-2xl p-5 flex flex-col justify-start h-full w-full">
            <div className='mb-7'>
                <h2 className="text-[12px]">{title}</h2>
                <div className={`flex ${isActive ? 'flex-col' : ''} items-baseline gap-1 text-[20px] font-medium mb-2`}>
                    <p className=' text-white '>{price}</p> 
                    <p className="text-[12px]">{period}</p> 
                </div>
                <p className="text-sm mb-3">{description}</p>
                <button
                    className={`h-[30px] p-1 px-3 text-[12px] rounded-md ${
                        isActive ? 'bg-transparent border border-[#a3a3a3] ' : 'yellowBG text-white'
                    }`}
                    onClick={onButtonClick}
                >
                    {isActive ? 'Your Profile' : buttonText}
                </button>
            </div>
            <div className=''>
                <h3 className="text-sm font-semibold mb-2">FEATURES</h3>
                <ul className="text-[12px] ">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <IoMdCheckmarkCircleOutline size={20} className='mt-1 mr-1' /> {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubscriptionCard;
