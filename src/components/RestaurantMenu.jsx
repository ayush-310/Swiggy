import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []); // Added dependency to avoid stale data

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/v5?restaurant_id=${resId}`
            );
            const json = await response.json();
            console.log(json);

            const data = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info

            setResInfo(data);
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    if (!resInfo) return <Shimmer />;

    // const restaurantDetails = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;

    // if (!restaurantDetails) return <p>Error loading menu details.</p>;

    const { name, cuisines, avgRating, costForTwo } = resInfo;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <h3>{cuisines?.join(', ') || 'No cuisine info available'}</h3>
            <p>⭐ {avgRating} | 💰 {costForTwo}</p>
            <ul>
                {resInfo?.cards?.map((card, index) => (
                    card?.card?.card?.title ? <li key={index}>{card.card.card.title}</li> : null
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
