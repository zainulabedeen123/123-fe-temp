import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div className="">
      <h2 className=" text-[18px] font-medium mb-[25px]">Ongoing subscription</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            title={subscription.title}
            price={subscription.price}
            description={subscription.description}
            features={subscription.features}
            buttonText={subscription.buttonText}
            onButtonClick={subscription.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionList;
