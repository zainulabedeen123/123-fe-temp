import React, { useState } from 'react';
import OngoingSubscription from './OngoingSubscription';
import OtherSubscriptions from './OtherSubscriptions';
import AppsToTry from '../AppsToTry';

const subscriptions = [
    {
        title: 'Free',
        price: 'Free',
        period: 'Forever Free',
        description: '',
        features: ['Up To 50 Products', '3 Competitors', 'Competitors Scraped Once Per Day', 'Up To 50 Products'],
        buttonText: 'Your Profile',
        onButtonClick: () => alert('Profile clicked'),
    },
    {
        title: 'Starter',
        price: '$49',
        period: 'per month',
        description: 'Perfect for small businesses',
        features: [
            'Up To 100 Products',
            'Unlimited Competitors',
            'Competitors Scraped Once Per Day',
            'Price & Stock Daily Alerts',
            'CSV/Excel/XML Export',
            'Multi-Currency',
            'Easy Catalog Import'
        ],
        buttonText: 'Select Plan',
        onButtonClick: () => alert('Starter Plan clicked'),
        tag: 'Starter'
    },
    {
        title: 'Pro',
        price: '$99',
        period: 'per month',
        description: 'Ideal for experts',
        features: [
            'Up To 2000 Products',
            'Unlimited Competitors',
            'Competitors Scraped Twice Per Day',
            'Price & Stock Daily Alerts',
            'CSV/Excel/XML Export',
            'Multi-Currency',
            'Easy Catalog Import',
            'Public URL Export',
            'Dynamic Reprising'
        ],
        buttonText: 'Select Plan',
        onButtonClick: () => alert('Pro Plan clicked'),
        tag: 'Popular'
    },
    {
        title: 'Business',
        price: '$189',
        period: 'per month',
        description: 'Great for scaling up',
        features: [
            'Up To 15000 Products',
            'Unlimited Competitors',
            'Competitors Scraped Twice Per Day',
            'Price & Stock Daily Alerts',
            'CSV/Excel/XML Export',
            'Multi-Currency',
            'Easy Catalog Import',
            'Public URL Export',
            'Dynamic Reprising',
            'Instant Competitor Alerts'
        ],
        buttonText: 'Select Plan',
        onButtonClick: () => alert('Business Plan clicked'),
        tag: 'Top Featured'
    },
    {
        title: 'Business',
        price: '$189',
        period: 'per month',
        description: 'Great for scaling up',
        features: [
            'Up To 25000 Products',
            'Unlimited Competitors',
            'Competitors Scraped Twice Per Day',
            'Price & Stock Daily Alerts',
            'CSV/Excel/XML Export',
            'Multi-Currency',
            'Easy Catalog Import',
            'Public URL Export',
            'Dynamic Reprising Autopilot',
            'Instant Competitor Alerts'
        ],
        buttonText: 'Select Plan',
        onButtonClick: () => alert('Top Featured Plan clicked'),
        tag: 'Top Featured'
    }
];

const apps = [
    {
        title: 'Research Pro',
        description: 'This software is for photo and image editing with output in raster type',
    },
    {
        title: 'Inventory Management',
        description: 'This software is for photo and image editing with output in raster type',
    },
    {
        title: 'Research Pro',
        description: 'This software is for photo and image editing with output in raster type',
    },
    {
        title: 'Inventory Management',
        description: 'This software is for photo and image editing with output in raster type',
    },
    {
        title: 'Research Ultimate',
        description: 'This software is for photo and image editing with output in raster type',
    },
    {
        title: 'Inventory Management ultimate',
        description: 'This software is for photo and image editing with output in raster type',
    },
];

const PaymentPlans = () => {
    const [activeSubscription] = useState(subscriptions[0]); 
    const [activeApps] = useState(apps.slice(0, 4)); 
    const otherSubscriptions = subscriptions.slice(1); // Remaining subscriptions
    const otherApps = apps.slice(4); // Remaining apps

    return (
        <div className="bg-[#1e252b] min-h-screen">
            <h1 className="text-white text-xl font-medium mb-4">
                Simple, transparent billing</h1>
            <p className="text-sm mb-[50px]">
                We believe price monitoring should be accessible to all companies, no matter the size
            </p>
            {/* <SubscriptionList subscriptions={subscriptions} /> */}
            <OngoingSubscription activeSubscription={activeSubscription} activeApps={activeApps} />
            <OtherSubscriptions subscriptions={otherSubscriptions} />
            <AppsToTry apps={otherApps} />
        </div>
    );
};

export default PaymentPlans;
