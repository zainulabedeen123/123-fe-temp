import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import CountrySelector from './CountrySelector';
import AccountSelector from './AccountSelector';

const SettingsGeneral = () => {
    const [selectedLang, setSelectedLang] = useState("English")
    const [selectedCurr, setSelectedCurr] = useState("EUR")
    const [selectedCountry, setSelectedCountry] = useState("Netherland")
    const [selectedAcc, setSelectedAcc] = useState("I am a Brand")

    return (
        <div className="bg-[#2d363d] rounded-lg p-5 pb-8">
            <div className=''>
                <h1 className='text-white text-sm'>General Settings</h1>
                <p className='text-[12px]'>Manage your preferences from this page to better adapt 123 scraper app to your work-style</p>
            </div>

            <div className="mt-8">

                <div className="mb-8 flex gap-4">
                    <div className="w-1/2">
                        <h1 className='text-white text-sm'>App Language</h1>
                        <p className='text-[12px]'>Select in which language you want to use our app.</p>
                    </div>
                    <div className="mb-8">
                        <LanguageSelector selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
                    </div>
                </div>
                <div className="mb-8 flex gap-4">
                    <div className="w-1/2">
                        <h1 className='text-white text-sm'>Currency</h1>
                        <p className='text-[12px]'>Select the default currency you want to apply to all your competitors prices.</p>
                    </div>
                    <div className="mb-8">
                        <CurrencySelector selectedCurr={selectedCurr} setSelectedCurr={setSelectedCurr} />
                    </div>
                </div>
                <div className="mb-8 flex gap-4">
                    <div className="w-1/2">
                        <h1 className='text-white text-sm'>Country</h1>
                        <p className='text-[12px]'>Select the default country. Do you need to change it? <span className='text-[#00fba0]'>Contact us.</span></p>
                    </div>
                    <div className="mb-8">
                        <CountrySelector selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                    </div>
                </div>
                <div className="mb-8 flex gap-4">
                    <div className="w-1/2">
                        <h1 className='text-white text-sm'>Account Type</h1>
                        <p className='text-[12px]'>Change here your account type between Merchant and Brand. <span className='text-[#00fba0]'>What is this?</span></p>
                    </div>
                    <div className="mb-8">
                        <AccountSelector selectedAcc={selectedAcc} setSelectedAcc={setSelectedAcc} />
                    </div>
                </div>
                <div className="mb-8 flex gap-4">
                    <div className="w-1/2">
                        <h1 className='text-white text-sm'>My Store Url</h1>
                        <p className='text-[12px]'>Change here your store url.</p>
                    </div>
                    <div className="mb-8">
                        <input type="url" placeholder='https://123scrapper' className='bg-transparent text-[12px] border border-[#a3a3a3] h-[38px] px-[10px] py-[4.5px] text-white outline-none rounded-md w-full md:w-[154px] max-w-[154px]' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsGeneral;
