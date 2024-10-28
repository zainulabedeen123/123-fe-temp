import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const ActivityItem = ({ user, date, status, type, message, isLiked, likes, comment }) => {
    return (
        <div className="flex items-start mb-4">
            <div className="relative bg-[#68FFC9] rounded-full h-5 w-5 mt-1 flex items-center justify-center mr-3">
                <span className="text-[#006A19] text-lg">P</span>
                <div className="absolute h-4 w-4 -bottom-2 -right-2 bg-blue-500 text-white rounded-full">
                <FaRegStar />
                </div>
            </div>
            <div>
                <p className="text-sm">
                    <span className="text-green-400">{user}</span> {type === 'marked' && `marked this post as`}
                    {status && <span className={`ml-2 px-2 py-1 rounded-lg text-xs ${status === 'Complete' ? 'bg-opacity-10 bg-[#00B52A] text-[#00B52A]' : status === 'In Progress' ? 'bg-opacity-10 bg-[#EB7301] text-[#EB7301] ' : 'bg-opacity-10 bg-[#9747FF] text-[#9747FF] '}`}>{status}</span>}
                </p>
                {message && <p className="text-sm text-[#a3a3a3]">{message}</p>}
                <div className="flex gap-1 items-center text-xs text-[#a3a3a3] mt-1">
                    <FaRegHeart className={`mr-1 ${isLiked ? 'text-red-500' : ''}`} />
                    {likes && <span className="mr-3">{likes} like{likes > 1 ? 's' : ''}</span>}
                    <span className="mr-3">{date}</span>
                    <div className="underline cursor-pointer">Reply</div>
                </div>
            </div>
        </div>
    );
};

export default ActivityItem;
