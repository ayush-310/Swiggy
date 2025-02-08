import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData.card.card.restaurants[0].info; // Adjusted based on API structure

    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>₹ {costForTwo / 100} for two</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard
