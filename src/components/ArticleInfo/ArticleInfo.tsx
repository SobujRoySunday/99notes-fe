import React from "react";
import { FaTag, FaClock, FaUser, FaRegClock } from "react-icons/fa";

const ArticleInfo = () => {
    return (
        <div className="max-w-md w-full mx-auto ">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl font-semibold mb-4 pb-2">Article Information</h2>
                <div className="w-[10rem] h-[1px] bg-black mb-4"></div>
            </div>
            <div className="bg-gray-100 shadow-md rounded-2xl p-6">

                <div className="space-y-3">
                    <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                        <FaTag className="text-gray-500" />
                        <span className="text-gray-700 font-medium">Category:</span>
                        <span className="text-gray-900">Ancient India</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                        <FaClock className="text-gray-500" />
                        <span className="text-gray-700 font-medium">Updated:</span>
                        <span className="text-gray-900">January 1, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                        <FaUser className="text-gray-500" />
                        <span className="text-gray-700 font-medium">Author:</span>
                        <span className="text-gray-900">99Notes Admin</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-2 rounded-lg">
                        <FaRegClock className="text-gray-500" />
                        <span className="text-gray-700 font-medium">Reading Time:</span>
                        <span className="text-gray-900">10 min</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleInfo;
