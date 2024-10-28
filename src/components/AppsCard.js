import React from 'react';

const AppsCard = ({ title, description, buttons }) => {
    return (
        <div className="bg-[#2d363d] rounded-lg flex flex-col justify-between h-full">
            <div>
                <h3 className="text-white text-sm px-4 py-2 border-b font-medium mb-2">{title}</h3>
                <div className='px-4'>
                    <p className="text-white text-[12px] mt-2">{description}</p>
                </div>
            </div>
            <div className="flex p-4 justify-end gap-2">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`rounded-md h-[30px] px-3 py-1 text-[12px] ${button.className}`}
                        onClick={button.onClick}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AppsCard;
