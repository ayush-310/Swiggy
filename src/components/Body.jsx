import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {

    const [ResList, setResList] = useState(resList);

    return (
        <div className="body">
            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const TopRatedRes = resList.filter((res) => res.info.avgRating > 4.2);
                        setResList(TopRatedRes);
                    }} >Top Rated Restaurants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {ResList?.map((resData, index) => (
                    <RestaurantCard key={index} resData={resData} />
                ))}
            </div>
        </div >
    )
}

export default Body
