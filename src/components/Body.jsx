import React from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((resData, index) => (
                    <RestaurantCard key={index} resData={resData} />
                ))}
            </div>
        </div>
    )
}

export default Body
