import React from 'react';

const Shimmer = () => {
    return (
        <div className="res-container">
            {Array(8).fill("").map((_, index) => (
                <div key={index} className="restaurant-card">
                    <div className="restaurant-logo"></div>
                    <div className="restaurant-name"></div>
                    <div className="restaurant-cuisines"></div>
                    <div className="restaurant-rating"></div>
                    <div className="restaurant-cost"></div>
                    <div className="restaurant-delivery-time"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
