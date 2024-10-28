import React, {useState} from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import FilterOptions from './FilterOptions';
import SignupCannyModal from '../SignupCannyModal';

const featureRequests = [
    { title: "Filter by title", description: "When trying to see titles on screen, it is not possible, a filter A to Z would be useful", messages: 0, count: 1 },
    { title: "Alt tags for longer titles", description: "Use an Alt Tag, to show the full title, as there are many that are not readable as they are too long and are shortened on screen", messages: 0, count: 1 },
    { title: "Allow multi-select option to exclude multiple unapproved competitors after automatch run", messages: 0, count: 0 },
    { title: "Pricing Update Webhook", description: "Would be nice to have webhook notifications for pricing updates", messages: 0, count: 0 },
    { title: "Check shipping", description: "Shipping scrapping would be nice", messages: 0, count: 0 },
    { title: "Shipping", description: "Sorry me again, just looking at the price match match again. could the product match feature also look at price including shipping on platforms such...", messages: 3, count: 1 },
    { title: "Mobile website", description: "Mobile website is not complete. menu is not available, making the site unusable on mobile", messages: 0, count: 2 },
    { title: "Price Timeline", description: "Show the links of the competitors in the Price Timeline so you can check the price and match and see if it is really higher.", messages: 0, count: 2 },
    { title: "Improvement automatch functionality", description: "small improvement for the automatch functionality: if an url has already been matched to a product, it should no longer appear as a suggestion...", messages: 0, count: 0 },
    { title: "Import Additional Info - Cost", description: "Would be amazing to be able to import cost as additional info, as my Google feed does not include it.", messages: 0, count: 0 },
    { title: "Product bundles with it's own SKU", description: "Include several products from competitor into one package product of ours. F.ex. my package includes 2pcs of competitor product X and 4 pcs of...", messages: 0, count: 0 },
    { title: "Minimum Price", description: "Exclude products that have a price below an optional amount", messages: 0, count: 0 },
    { title: "Comparable prices", description: "Can I somehow set if my price is equal 1 pcs and the competitor is 2 pcs", messages: 0, count: 0 },
    { title: "Product Variations", description: "This might be a difficult one. We have many products that different competitors display differently, one of these ways is a single URL with multiple...", messages: 0, count: 2 },
    { title: "Add Shipping Column", description: "I know this was talked before in here and is something very hard to implement due to a lot of dynamic conditions, but would be really great if we...", messages: 0, count: 3 },
    { title: "Advance Tracking Galaxus", description: "There are various suppliers on the Galaxus marketplace and availability also plays a major role. Currently, only the price displayed on the product page is used. However...", messages: 0, count: 0 },
    { title: "Google Shopping Used Products", description: "The possibility of also having the status of the product in the price comparison would be useful. In the case of used or refurbished products...", messages: 0, count: 0 },
    { title: "Sort by Product name", description: "Trying to replace items where my competitor is higher I need to be able to sort by product name since many styles have the same name and I could...", messages: 0, count: 0 },
    { title: "Import based on tags at Product Variant level", description: "Import product categories based on tags that have been applied in the given ecommerce platform at product variant level. Not just the current...", messages: 0, count: 0 },
];

const FeatureRequestList = () => {
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);

    const handleOpenSignupModal = () => setSignupModalOpen(true);
    const handleCloseSignupModal = () => setSignupModalOpen(false);
    return (
        <>
            <FilterOptions />
            {featureRequests.map((request, index) => (
                <div key={index} className={`w-full px-[20px] py-[10px] flex justify-between items-center ${index % 2 === 0 ? 'bg-[#343E46]' : 'bg-[#2D363D]'}`}>
                    <div>
                        <div className="text-[14px] text-[#fafafa] font-normal leading-tight">{request.title}</div>
                        {request.description && <div className="text-[12px]">{request.description}</div>}
                        <div className="flex items-center ">
                            <FaRegComment className="mr-1 w-[14px] h-[14px]" />
                            <span>{request.messages}</span>
                        </div>
                    </div>
                    <div className="w-7 h-[41px] px-2 rounded border border-neutral-50 flex-col justify-center items-center inline-flex cursor-pointer" onClick={handleOpenSignupModal}>
                        <div className="flex flex-col justify-start items-center text-[#fafafa]">
                            <MdKeyboardArrowUp className="" />
                            {request.count}
                        </div>
                    </div>
                </div>
            ))}
            <SignupCannyModal isOpen={isSignupModalOpen} onClose={handleCloseSignupModal} />

        </>
    );
};

export default FeatureRequestList;
