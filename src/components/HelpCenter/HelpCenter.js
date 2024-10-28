import React from 'react';
import Searchbar from '../Searchbar.js';

const HelpCenter = () => {
    const array2 = [
        { heading: 'Getting started', desc: "Everything you need to know to get you started with 123 scraper." },
        { heading: 'Working in 123 scraper', desc: "Getting started as a user of the 123 scraper inbox." },
        { heading: '123 scraper account', desc: "Learn about your 123 scraper account, your team's access, bills and financing." },
        { heading: 'WhatsApp Business', desc: "How to set up WhatsApp Business, create templates and other useful information." },
        { heading: 'Email', desc: "Learn how to set up email channels, create auto replies and other email settings." },
        { heading: 'Social media channels', desc: "Set up Facebook, Instagram, and Telegram in 123 scraper." },
        { heading: 'Voice and SMS', desc: "Learn how to set up Voice and SMS channels in 123 scraper." },
        { heading: 'Website chat and widget', desc: "How to set up a website chat channel, create and place a website widget." },
        { heading: 'Broadcasting', desc: "Send messages to groups of people via SMS or Whatsapp Business." },
        { heading: 'Integrations', desc: "Retrieve and share information with other applications." },
        { heading: 'Help centre', desc: "Learn how to set up structure your Help Centre, write articles and all other settings." },
        { heading: 'Automation', desc: "Increase efficiency and save time by automating repetitive workflows." },
        { heading: 'Productivity', desc: "Great features that will help you to work more efficiently in 123 scraper." },
        { heading: 'Team chat', desc: "How to use Team Chat, create groups of colleagues, and other information on Team Chat." },
        { heading: 'Customer satisfaction', desc: "How to set up and send out customer satisfaction (CSAT) surveys using 123 scraper." },
        { heading: '123 scraper analytics', desc: "Monitor the inbox's performance by checking the reports of your 123 scraper analytics." },
        { heading: 'Beta features', desc: "Features and functions currently being tested by 123 scraper." },
    ];

    return (
        <div>
            <h1 className='text-[#fafafa] text-[14px] mb-[18px]'>How we can help</h1>
            <Searchbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[35px]">
                <div className="bg-[#2d363d] rounded-md pb-4">
                    <p className='px-[9px] py-[10px] text-white text-[14px] border-0 border-b border-[#a3a3a3]'>Video Tutorials</p>
                    <p className='p-3 text-sm font-light text-white text-[12px] h-[100px] md:h-[80px]'>Use 123scapper from any browser--- no installation necessary</p>
                    <div className='yellowBG text-white text-[12px] w-fit ml-auto text-sm rounded-md px-3 py-1 mr-3'>Learn More</div>
                </div>
                <div className="bg-[#2d363d] rounded-md pb-4">
                    <p className='px-[9px] py-[10px] text-white text-[14px] border-0 border-b border-[#a3a3a3]'>API documentation</p>
                    <p className='p-3 text-sm font-light text-white text-[12px] h-[100px] md:h-[80px]'>Download the Android app and receive push notifications.</p>
                    <div className='yellowBG text-white text-[12px] w-fit ml-auto text-sm rounded-md px-3 py-1 mr-3'>Learn More</div>
                </div>
            </div>
            <h1 className='text-white text-[14px] mt-10'>Knowledge base</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {array2.map((e, index) => (
                    <div key={index} className="bg-[#2d363d] rounded-md pb-4 flex flex-col justify-between">
                        <div>
                            <p className='px-[9px] py-[10px] text-white text-[14px] border-0 border-b border-[#a3a3a3]'>{e.heading}</p>
                            <p className='p-3 text-sm font-light text-white text-[12px] h-[100px] md:h-[80px]'>{e.desc}</p>
                        </div>
                        <div className='yellowBG text-white text-[12px] w-fit ml-auto text-sm rounded-md px-3 py-1 mr-3 mb-3'>Learn More</div>
                    </div>
                ))}
            </div>
            <div className="bg-[#2d363d] rounded-md mt-10 p-10 text-center">
                <h1 className='text-[25px] text-white mb-5 font-semibold'>Still having trouble?</h1>
                <p className='mb-8 font-medium text-[14px]'>
                    Not finding the answer to your question? Get in<br />
                    touch with us, and we'll do our best to help you out!
                </p>
                <button className='text-white text-[14px] px-3 py-2 rounded-md bg-[#fb0078]'>Contact Support</button>
            </div>
        </div>
    );
}

export default HelpCenter;
