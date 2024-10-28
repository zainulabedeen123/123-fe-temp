import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import AppsCard from '../AppsCard';

const OngoingSubscription = ({ activeSubscription, activeApps }) => {
  return (
    <div className="mb-12 p-4">
      <h2 className="text-[18px] font-medium mb-[25px]">Ongoing subscription</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 md:grid-cols-2 md:h-[320px]">
        <div className="col-span-1">
          <SubscriptionCard {...activeSubscription} isActive={true} />
        </div>
        <div className="col-span-1 lg:col-span-2 overflow-y-scroll scrollbar">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {activeApps.map((app, index) => (
              <AppsCard
                key={index}
                title={app.title}
                description={app.description}
                buttons={[
                  {
                    text: 'Open',
                    className: 'viewAllBg text-white border',
                    onClick: () => alert('Open clicked')
                  }
                ]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingSubscription;
