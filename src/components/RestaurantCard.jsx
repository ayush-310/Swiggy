import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla,
    } = resData.info;

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
            <img
                className="w-full h-48 object-cover"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-sm text-gray-600 mb-2 truncate">
                    {cuisines.join(", ")}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-700">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                        {avgRating} ⭐
                    </span>
                    <span>{costForTwo}</span>
                    <span>{sla.deliveryTime} mins</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
