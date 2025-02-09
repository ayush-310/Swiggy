import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData.info;

    return (
        <div className="restaurant-card">
            <img
                className="restaurant-logo"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <h3 className="restaurant-name">{name}</h3>
            <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
            <h4 className="restaurant-rating">{avgRating} ⭐</h4>
            <h4 className="restaurant-cost">{costForTwo}</h4>
            <h4 className="restaurant-delivery-time">{sla.deliveryTime} mins</h4>
        </div>
    );
};

export default RestaurantCard;
