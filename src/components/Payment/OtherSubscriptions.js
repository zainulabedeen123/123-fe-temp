import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const OtherSubscriptions = ({ subscriptions }) => {
    return (
        <div className="mb-12">
            <h2 className=" text-[18px] font-medium mb-[25px]">Other available subscription plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {subscriptions.map((subscription, index) => (
                    <SubscriptionCard
                        key={index}
                        {...subscription}
                    />
                ))}
            </div>
        </div>
    );
};

export default OtherSubscriptions;
