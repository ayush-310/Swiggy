import React from 'react';

const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {Array(8).fill("").map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-100 animate-pulse rounded-lg shadow-md p-4"
                >
                    <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
