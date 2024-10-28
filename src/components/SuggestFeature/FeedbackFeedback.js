import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowUp } from "react-icons/md";
import avatar from '../../images/avatar.png'
import ActivityItem from './ActivityItem';
import Searchbar from '../Searchbar';

const FeedbackFeedback = () => {
    const location = useLocation();
    const { request } = location.state || {};

    const activities = [
        { id: 1, user: 'Paul Morello', date: 'February 11, 2023', status: 'Complete', type: 'marked', message: '', isLiked: false },
        { id: 2, user: 'Paul Morello', date: 'February 11, 2023', status: '', type: 'message', message: 'This feature is now live', isLiked: true, likes: 1 },
        { id: 3, user: 'Paul Morello', date: 'January 4, 2023', status: 'In Progress', type: 'marked', message: '', isLiked: false },
        { id: 4, user: 'Paul Morello', date: 'July 25, 2022', status: 'Planned', type: 'marked', message: '', isLiked: false },
        { id: 5, user: 'Paul Morello', date: 'July 25, 2022', status: 'Complete', type: 'marked', message: '', isLiked: false },
        { id: 6, user: 'Paul Morello', date: 'June 23, 2022', status: 'Planned', type: 'marked', message: '', isLiked: false },
    ];

    const voters = [
        { id: 1, name: 'Beebuzz', avatar: avatar },
        { id: 2, name: 'Tim Struijs', avatar: avatar },
        { id: 3, name: 'Adam Broadhead', avatar: avatar },
        { id: 4, name: 'Maurice Jacobs', avatar: avatar }
    ];

    if (!request) {
        return <p>No feedback details available</p>;
    }

    return (
        <>
            <div className='mb-4'>
                <Searchbar />
            </div>
            <div className="min-h-screen bg-[#2D363D] rounded-2xl p-6 grid grid-cols-4 gap-6">

                <div className="col-span-1">
                    <div className="bg-transparent border border-[#A2A2A2] p-4 rounded-2xl">
                        <h2 className="text-[16px] font-semibold text-white mb-1">Category</h2>
                        <p className="text-[16px] mb-4">Uncategorized</p>

                        <h3 className="text-[16px] font-semibold text-white mb-4">Voters</h3>
                        <ul>
                            {voters.map(voter => (
                                <li key={voter.id} className="flex items-center mb-2">
                                    <img src={voter.avatar} alt={voter.name} className="w-5 h-5 border border-[#A2A2A2] rounded-full mr-2" />
                                    <span className="text-sm">{voter.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="mb-5 flex gap-5 items-stretch cursor-pointer">
                        <div className="w-7 h-[41px] my-1 px-2 rounded border border-neutral-50 flex-col justify-center items-center inline-flex" >
                            <div className="flex flex-col justify-start items-center text-[#fafafa]">
                                <MdKeyboardArrowUp className="" />
                                {request.count}
                            </div>
                        </div>
                        <div>
                            <span className="block text-lg font-medium">{request.title}</span>
                            <span className="text-gray-400 font-medium text-[12px]">{request.category}</span>
                        </div>
                    </div>

                    <div className="mb-6">

                        <div className='flex gap-2 w-full '>

                            <div className="flex mt-2">
                                <button className="bg-[#E3CEFF] rounded-full h-5 w-5 mt-1 flex items-center justify-center mr-3">
                                    <span className="text-[#AB47BC] text-xs">M</span>
                                </button>
                            </div>

                            <div className='flex flex-col w-full'>

                                <div className='space-y-2'>
                                    <h2 className="text-sm text-[#F9F9F9]">Maurice Jacobs</h2>
                                    <p className="text-xs ">{request.title}</p>
                                    <p className="text-xs ">June 22, 2022</p>
                                </div>


                                <div className="mb-6 mt-2">
                                    <input
                                        className="w-full text-sm py-2 px-2 rounded-md bg-transparent border border-[#a2a2a2] focus:ring-0"
                                        placeholder="Leave a comment"
                                    />
                                </div>


                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-medium">Activity Feed</h3>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[12px]'>Sort by</p>
                                        <select
                                            className="bg-transparent text-[14px] border border[#a3a3a3] rounded-md py-1 px-2"
                                        >
                                            <option>Newest First</option>
                                            <option>Oldest First</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    {activities.map((activity) => (
                                        <ActivityItem
                                            key={activity.id}
                                            user={activity.user}
                                            date={activity.date}
                                            status={activity.status}
                                            type={activity.type}
                                            message={activity.message}
                                            isLiked={activity.isLiked}
                                            likes={activity.likes}
                                        />
                                    ))}
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackFeedback;
