import React, { useState } from 'react';
import AppsCard from '../AppsCard';
import InstalledAppTable from './InstalledAppTable';
import AppsToTry from '../AppsToTry';

const Apps = () => {
    const appCards = [
        {
            title: 'Research Pro',
            description: 'This software is for photo and image editing with output in raster type',
            buttons: [
                {
                    text: 'Install',
                    className: 'yellowBG text-white',
                    onClick: () => alert('Install clicked')
                }
            ]
        },
        {
            title: 'Inventory Management',
            description: 'This software is for photo and image editing with output in raster type',
            buttons: [
                {
                    text: 'Install',
                    className: 'yellowBG text-white',
                    onClick: () => alert('Install clicked')
                }
            ]
        },
        {
            title: 'Inventory Management',
            description: 'This software is for photo and image editing with output in raster type',
            buttons: [
                {
                    text: 'Install',
                    className: 'yellowBG text-white',
                    onClick: () => alert('Install clicked')
                }
            ]
        },
        {
            title: 'Research Pro',
            description: 'This software is for photo and image editing with output in raster type',
            buttons: [
                {
                    text: 'Install',
                    className: 'yellowBG text-white',
                    onClick: () => alert('Install clicked')
                }
            ]
        }
    ];

    const [installedApps, setInstalledApps] = useState([
        { appName: 'Research', status: 'Up to Date', actionText: 'Open', actionColor: '#FFCA49', isActive: true },
        { appName: 'Inventory Management', status: 'Trial Expired', actionText: 'Buy Now', actionColor: 'yellowBG', isActive: false },
        { appName: 'Research', status: 'Up to Date', actionText: 'Open', actionColor: '#FFCA49', isActive: true },
        { appName: 'Inventory Management', status: 'Trial Expired', actionText: 'Buy Now', actionColor: 'yellowBG', isActive: false },
    ]);

    const toggleAppStatus = (index) => {
        setInstalledApps(prevApps => {
            const newApps = [...prevApps];
            newApps[index].isActive = !newApps[index].isActive;
            newApps[index].status = newApps[index].isActive ? 'Up to Date' : 'Trial Expired';
            newApps[index].actionText = newApps[index].isActive ? 'Open' : 'Buy Now';
            return newApps;
        });
    };

    const appsToTry = [
        {
            title: 'Research Ultimate',
            description: 'This software is for photo and image editing with output in raster type',

        },
        {
            title: 'Inventory Management Ultimate',
            description: 'This software is for photo and image editing with output in raster type',

        }
    ];

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-5 px-2 items-center text-white">
                    <p>Available in your plan</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {appCards.map((app, index) => (
                    <AppsCard
                        key={index}
                        title={app.title}
                        description={app.description}
                        buttons={app.buttons}
                    />
                ))}
            </div>

            <div className="bg-[#2d363d] rounded-md p-5 my-5 overflow-x-scroll scrollbar">
                <h1 className='mb-5'>Installed Apps</h1>
                <InstalledAppTable apps={installedApps} toggleAppStatus={toggleAppStatus} />
            </div>

            <AppsToTry apps={appsToTry} />
        </>
    );
};

export default Apps;
