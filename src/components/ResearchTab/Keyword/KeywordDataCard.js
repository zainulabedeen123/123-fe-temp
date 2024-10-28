import React from 'react';

const KeywordDataCard = ({ title, subtitle, data, footerLink }) => {
    return (
        <div className="p-3 w-full bg-[#2D363D] rounded-2xl">
            <div className="text-white mb-8">
                <p className="text-[20px] font-medium">{title}</p>
                <span className="text-[14px]">{subtitle}</span>
            </div>
            <div>
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span>{item.keyword}</span>
                        <span className="text-[14px] py-2 font-normal">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="text-[#F3941D] py-5">
                <a href={footerLink} className="font-medium">View All</a>
            </div>
        </div>
    );
}

export default KeywordDataCard;
