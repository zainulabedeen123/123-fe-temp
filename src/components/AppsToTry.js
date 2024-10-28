import React from 'react';
import AppsCard from './AppsCard';

const AppsToTry = ({ apps }) => {
    return (
        <div className="mb-5">
            <h2 className="text-[18px] font-medium mb-[25px] text-white">Apps to try</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {apps.map((app, index) => (
                    <AppsCard
                        key={index}
                        title={app.title}
                        description={app.description}
                        buttons={[
                            {
                                text: 'Try',
                                className: 'bg-transparent border border-[#a3a3a3] text-white',
                                onClick: () => alert('Try clicked')
                            },
                            {
                                text: 'Buy',
                                className: 'yellowBG text-white',
                                onClick: () => alert('Buy clicked')
                            }
                        ]}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppsToTry;
