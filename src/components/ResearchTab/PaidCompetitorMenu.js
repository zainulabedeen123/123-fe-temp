import React from 'react';
import { IoCheckmark, IoClose } from "react-icons/io5";

const PaidCompetitorMenu = ({ competitors, selectedCompetitors, toggleCompetitor }) => {
    return (
        <div className="col-span-3 text-[#a3a3a3]">
            {competitors.map((competitor, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border-b border-r pr-2 py-3 border-[#414141] relative"
                >
                    <span className={`absolute left-0 top-0 h-full w-1`} style={{backgroundColor: competitor.color}}></span>
                    <div className="flex items-center gap-2 pl-3">
                        <div>
                            <p className="font-semibold text-[14px]">{competitor.domain}</p>
                            <p className="text-[#a3a3a3] text-sm">Paid Keywords: {competitor.monthlyPaidKeywords}</p>
                        </div>
                    </div>
                    <button onClick={() => toggleCompetitor(competitor.domain)}>
                        {selectedCompetitors.includes(competitor.domain) ? <IoClose /> : <IoCheckmark /> }
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PaidCompetitorMenu;
